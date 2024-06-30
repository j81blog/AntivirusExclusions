[CmdletBinding()]
[OutputType()]
param (
    $ProjectRoot = "$PSScriptRoot",

    $OutputPath = "$PSScriptRoot\output"
)
Write-Host "Generating HTML and json files"
Write-Host "Project root: $projectRoot"
Write-Host "Checking if PSParseHTML module is installed"
if (Get-Module -Name PSParseHTML -ListAvailable) {
    Write-Host "PSParseHTML module is already installed"
} else {
    Write-Host "Installing PSParseHTML module"
    Install-Module -Name PSParseHTML -Force -AllowClobber
    Write-Host "PSParseHTML module installed"
}
Import-Module PSParseHTML

if (Get-Module -Name PSParseHTML) {
    Write-Host "PSParseHTML module is already imported"
} else {
    Write-Host "Importing PSParseHTML module"
    Import-Module -Name PSParseHTML -ErrorAction Stop
}

$csvFiles = Get-ChildItem -Path "$ProjectRoot\*" -Include "*.csv"
Write-Host "CSVs: $($csvFiles.Count)"
$htmlVendorHeadings = Get-ChildItem -Path "$ProjectRoot\*" -Include "*.html" | Where-Object { $_.Name -match "^[0-9]{1,3}\-[A-Za-z0-9()]*\.html$" } | Sort-Object -Property Name
Write-Host "Vendor HTMLs: $($htmlVendorHeadings.Count)"
$indexFilename = "$outputPath\index.html"
$htmlCode = New-Object -TypeName System.Text.StringBuilder
$htmlCodeExclusions = New-Object -TypeName System.Text.StringBuilder
$htmlCodeIndex = New-Object -TypeName System.Text.StringBuilder
if (Test-Path -Path $outputPath) {
    Remove-Item -Path $outputPath -Recurse -Force
}
New-Item -Path $outputPath -ItemType Directory -Force | Out-Null
$processedCsvs = @()
$htmlCode.Append(@"
<!DOCTYPE HTML>

<html lang="en">

<head>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/css/tabulator_bulma.min.css" integrity="sha512-Ix1tDtTLrfGS60Xj232WgTr50m8srh4PO5DAwqhi8DI6gnw3/ewIVMpVAD06gSTND/V5yVysEQ/E6xImUUv+BQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/js/tabulator.min.js" integrity="sha512-+FOZvgG76G8TTi7fxXsyGIA5XKmZXTOO2rLYtqakgs5ct1qsUSaO8/UP6Z3xbsyxL/hjS7mhYacG7CPmevI6Cw==" crossorigin="anonymous" referrerpolicy="no-referrer"> </script>

    <!-- the line below is necessary for the Date sorter to work - it is buried in the v5.1 documentation here
    https://tabulator.info/docs/6.2/sort#func-builtin -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.4.4/luxon.min.js" integrity="sha512-dUlSLLkxslGILhPdCkALwk4szPhp3xmZIKFtlUD+O9Lslq41Aksmdt5OGqpomDoT4FsCUH70jQU8ezZHI3v1RQ==" crossorigin="anonymous" referrerpolicy="no-referrer"> </script>
    <!-- the two scripts below are necessary for the export to pdf to work - https://tabulator.info/docs/6.2/download#overview -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA==" crossorigin="anonymous" referrerpolicy="no-referrer"> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js" integrity="sha512-2/YdOMV+YNpanLCF5MdQwaoFRVbTmrJ4u4EpqS/USXAQNUDgI5uwYi6J98WVtJKcfe1AbgerygzDFToxAlOGEQ==" crossorigin="anonymous" referrerpolicy="no-referrer"> </script>

    <meta charset="utf-8" />
    <title>Anti Virus Exclusions</title>
</head>
<style>
    body {
        min-height: 100vh;
        max-width: 80vw;
        background-color: #A3BFD1;
        margin: 0 auto;
        font-family: 'Montserrat-optimized', Monserrat, Verdana, sans-serif;
        font-size: 12px;
    }
    .tabulator {
        font-size: 12px;
    }
    .button {
        border: none;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    .button1 {
        background-color: #3759d7;
    }
</style>

<body>

    <h1>Anti Virus Exclusions</h1>
"@) | Out-Null

ForEach ($htmlVendorHeading in $htmlVendorHeadings) {
    $vendor = $htmlVendorHeading.BaseName.Split("-")[1]
    $vendorContent = Get-Content -Path $htmlVendorHeading.FullName
    $vendorTileLink = $vendor.Replace("(", $null).Replace(")", $null).Replace(" ", "-").Replace("---", "-").Replace("--", "-").ToLower()
    $vendorCsvs = $csvFiles | Where-Object { $_.Name -like "$($vendor)*" } | Sort-Object -Property Name
    Write-Host "Vendor: $vendor"
    Write-Host "CSVs: $($vendorCsvs.Count)"

    $htmlCodeExclusions.Append(@"
<div>
    <h2 id="$($vendorTileLink)">
        <a href="#$($vendorTileLink)">
            $($vendor)
        </a>
    </h2>
    $($vendorContent)
</div>
"@) | Out-Null
$htmlCodeIndex.Append(@"
<div>
    <h2><a href="#$($vendorTileLink)">
        $($vendor)
    </a></h2>
</div>
"@) | Out-Null
    ForEach ($csvFile in $vendorCsvs) {
        $title = $csvFile.BaseName
        $csvFilename = $csvFile.Name
        Write-Host "CSV: $csvFilename"
        $jsonFilepath = "$($outputPath)\$($csvFile.BaseName).json"
        $jsonFilename = Split-Path -Path $jsonFilepath -Leaf
        $csvData = @(Import-Csv -Path $csvFile.FullName -Delimiter ";" | Select-Object -Property "Exclusion", "ExclusionType", "Description", "Justification")
        Write-Host "CSV Data: $($csvData.Count)"
        $json = $csvData | ConvertTo-Json -Depth 5
        $titleLink = $title.Replace("(", $null).Replace(")", $null).Replace(" ", "-").Replace("---", "-").Replace("--", "-").ToLower()
        $shortCode = (($title -split '' | Where-Object { $_ -cmatch '[A-Z]' }) -join '').ToLower()
        $itemPreCodeFilename = "$($csvFile.FullName)".Replace(".csv", "-pre.html")
        $itemPostCodeFilename = "$($csvFile.FullName)".Replace(".csv", "-post.html")

        $htmlCodeExclusions.Append(@"
<div>
    <h3 id="$($titleLink)">
        <a href="#$($titleLink)">
            $($title)
        </a>
    </h3>
"@) | Out-Null

        if (Test-Path -Path $itemPreCodeFilename) {
            $htmlCodeExclusions.Append(@"
$(Get-Content -Path $itemPreCodeFilename)
<br />
"@) | Out-Null
        }
        if ($csvData.Count -gt 0) {
            [System.IO.File]::WriteAllText($jsonFilepath, $json)
            $htmlCodeExclusions.Append(@"
<div id="$($shortCode)-table"></div>
<script>
    function $($shortCode)csvdown() {
        $($shortCode)table.download("csv", "$($csvFilename)", {
            delimiter: ",",
        });
    }
    function $($shortCode)pdfdown() {
        $($shortCode)table.download("pdf", "$("$($csvFilename)".replace("csv","pdf"))", {
            orientation:"landscape",
            title:"Av exclusions: $($title)",
        });
    }
    var $($shortCode)table = new Tabulator("#$($shortCode)-table", {
        ajaxURL: "$($jsonFilename)",
        layout: "fitDataStretch",
        setSort: [
            { column: "ExclusionType", dir: "asc" },
            { column: "Exclusion", dir: "asc" }
        ],
        columns: [
            { title: "Exclusion", field: "Exclusion", width: 650 },
            { title: "ExclusionType", field: "ExclusionType", width: 150, hozAlign: "left" },
            { title: "Description", field: "Justification", width: 300, hozAlign: "left", formatter: "textarea" }
            { title: "Justification", field: "Justification", hozAlign: "left", formatter: "textarea" }
        ],
        footerElement: "<div><button id='download-$($shortCode)-csv' onclick='$($shortCode)csvdown();' class='button button1'>Download CSV</button><button id='download-$($shortCode)-pdf' onclick='$($shortCode)pdfdown();' class='button button1'>Download PDF</button></div>",
    });
</script>
</div>
<br />
"@) | Out-Null
$htmlCodeIndex.Append(@"
<div>
    <h3><a href="#$($titleLink)">
        $($title)
    </a></h3>
</div>
"@) | Out-Null
        }
        if (Test-Path -Path $itemPostCodeFilename) {
            $htmlCodeExclusions.Append(@"
                $(Get-Content -Path $itemPostCodeFilename)
"@) | Out-Null
        }
        $processedCsvs += $csvFile.FullName
    }

}

$unprocessedCsvs = $csvFiles | Where-Object { $_.FullName -notin $processedCsvs } | Sort-Object -Property Name

if ($unprocessedCsvs.Count -gt 0) {
    $htmlCodeExclusions.Append(@"
<div>
    <h2 id=misc">
        <a href="#misc">
            Miscellaneous
        </a>
    </h2>
</div>
"@) | Out-Null
$htmlCodeIndex.Append(@"
<div>
    <h2><a href="#misc">
        Miscellaneous
    </a></h2>
</div>
"@) | Out-Null
    foreach ($csvFile in $unprocessedCsvs) {
        $title = $csvFile.BaseName
        $csvFilename = $csvFile.Name
        Write-Host "CSV: $csvFilename"
        $jsonFilepath = "$outputPath\$($csvFile.BaseName).json"
        $csvData = @(Import-Csv -Path $csvFile.FullName -Delimiter ";" | Select-Object -Property "Exclusion", "ExclusionType", "Description", "Justification")
        $json = $csvData | ConvertTo-Json -Depth 5
        $jsonFilename = Split-Path -Path $jsonFilepath -Leaf
        $titleLink = $title.Replace("(", $null).Replace(")", $null).Replace(" ", "-").Replace("---", "-").Replace("--", "-").ToLower()
        $shortCode = (($title -split '' | Where-Object { $_ -cmatch '[A-Z]' }) -join '').ToLower()
        $itemPreCodeFilename = "$($csvFile.FullName)".Replace(".csv", "-pre.html")
        $itemPostCodeFilename = "$($csvFile.FullName)".Replace(".csv", "-post.html")

        $htmlCodeExclusions.Append(@"
<div>
<h3 id="$($titleLink)">
    <a href="#$($titleLink)">
        $($title)
    </a>
</h3>
"@) | Out-Null
        if (Test-Path -Path $itemPreCodeFilename) {
            $htmlCodeExclusions.Append(@"
$(Get-Content -Path $itemPreCodeFilename)
<br />
"@) | Out-Null
        }

        if ($csvData.Count -gt 0) {
            [System.IO.File]::WriteAllText($jsonFilepath, $json)
            $htmlCodeExclusions.Append(@"
<div id="$($shortCode)-table"></div>
<script>
function $($shortCode)csvdown() {
    $($shortCode)table.download("csv", "$($csvFilename)", {
        delimiter: ",",
    });
}
function $($shortCode)pdfdown() {
    $($shortCode)table.download("pdf", "$("$($csvFilename)".replace("csv","pdf"))", {
        orientation:"landscape",
        title:"Av exclusions: $($title)",
    });
}
var $($shortCode)table = new Tabulator("#$($shortCode)-table", {
    ajaxURL: "$($jsonFilename)",
    layout: "fitDataStretch",
    setSort: [
        { column: "ExclusionType", dir: "asc" },
        { column: "Exclusion", dir: "asc" }
    ],
    columns: [
        { title: "Exclusion", field: "Exclusion", width: 650 },
        { title: "ExclusionType", field: "ExclusionType", width: 150, hozAlign: "left" },
        { title: "Description", field: "Justification", width: 300, hozAlign: "left", formatter: "textarea" }
        { title: "Justification", field: "Justification", hozAlign: "left", formatter: "textarea" }
    ],
    footerElement: "<div><button id='download-$($shortCode)-csv' onclick='$($shortCode)csvdown();' class='button button1'>Download CSV</button><button id='download-$($shortCode)-pdf' onclick='$($shortCode)pdfdown();' class='button button1'>Download PDF</button></div>",
});
</script>
</div>
<br />
"@) | Out-Null
$htmlCodeIndex.Append(@"
<div>
<h3><a href="#$($titleLink)">
    $($title)
</a></h3>
</div>
"@) | Out-Null
        }
        if (Test-Path -Path $itemPostCodeFilename) {
            $htmlCodeExclusions.Append(@"
            $(Get-Content -Path $itemPostCodeFilename)
"@) | Out-Null
        }
    }
}

$htmlCode.Append($htmlCodeIndex.ToString())

$htmlCode.Append($htmlCodeExclusions.ToString())

$htmlCode.Append(@"
        </div>
        <br />
        <p>Updated: $((Get-Date).ToString('dd-MM-yyyy HH:mm'))</p>
</body>
</html>
"@) | Out-Null

[System.IO.File]::WriteAllText($indexFilename, $(Format-HTML -Content $htmlCode.ToString()))
Write-Host "HTML and JSON files written to disk: $($outputPath)"
