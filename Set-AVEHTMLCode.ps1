$csvFiles = Get-ChildItem -Path "$PSScriptRoot\*" -Include "*.csv" -Recurse
$outputPath = "$PSScriptRoot\output"
$indexFilename = "$outputPath\index.html"
$htmlCode = New-Object -TypeName System.Text.StringBuilder
if (Test-Path -Path $outputPath) {
    Remove-Item -Path $outputPath -Recurse -Force
}
New-Item -Path $outputPath -ItemType Directory -Force | Out-Null

$htmlCode.Append(@"
<!DOCTYPE HTML>

<html lang="en">

<head>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/css/tabulator_bulma.min.css"
        integrity="sha512-Ix1tDtTLrfGS60Xj232WgTr50m8srh4PO5DAwqhi8DI6gnw3/ewIVMpVAD06gSTND/V5yVysEQ/E6xImUUv+BQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/js/tabulator.min.js"
        integrity="sha512-+FOZvgG76G8TTi7fxXsyGIA5XKmZXTOO2rLYtqakgs5ct1qsUSaO8/UP6Z3xbsyxL/hjS7mhYacG7CPmevI6Cw=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>

    <!-- the line below is necessary for the Date sorter to work - it is buried in the v5.1 documentation here
    https://tabulator.info/docs/6.2/sort#func-builtin -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.4.4/luxon.min.js"
        integrity="sha512-dUlSLLkxslGILhPdCkALwk4szPhp3xmZIKFtlUD+O9Lslq41Aksmdt5OGqpomDoT4FsCUH70jQU8ezZHI3v1RQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>
    <!-- the two scripts below are necessary for the export to pdf to work - https://tabulator.info/docs/6.2/download#overview -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        integrity="sha512-qZvrmS2ekKPF2mSznTQsxqPgnpkI4DNTlrdUmTzrDgektczlKNRRhy5X5AAOnx5S09ydFYWWNSfcEqDTTHgtNA=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"
        integrity="sha512-2/YdOMV+YNpanLCF5MdQwaoFRVbTmrJ4u4EpqS/USXAQNUDgI5uwYi6J98WVtJKcfe1AbgerygzDFToxAlOGEQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    </script>

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

ForEach ($csvFile in $csvFiles) {
    $csvFilename = $csvFile.Name
    $jsonFilename = "$outputPath\$($csvFile.BaseName).json"
    $csvData = Import-Csv -Path $csvFile.FullName -Delimiter ";"
    $json = $csvData | ConvertTo-Json -Depth 5
    [System.IO.File]::WriteAllText($jsonFilename, $json)

    $title = $csvFile.BaseName
    $jsonFilename = Split-Path -Path $jsonFilename -Leaf
    $titleLink = $title.Replace("(", $null).Replace(")", $null).Replace(" ", "-").Replace("---", "-").Replace("--", "-").ToLower()
    $shortCode = (($title -split '' | Where-Object { $_ -cmatch '[A-Z]' }) -join '').ToLower()

    $htmlCode.Append(@"
        <div>
            <h2 id="$($titleLink)">
                <a href="#$($titleLink)">
                    $($title)
                </a>
            </h2>
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
                        { title: "Justification", field: "Justification", hozAlign: "left", formatter: "textarea" }
                    ],

                    footerElement: "<div><button id='download-$($shortCode)-csv' onclick='$($shortCode)csvdown();' class='button button1'>Download CSV</button><button id='download-$($shortCode)-pdf' onclick='$($shortCode)pdfdown();' class='button button1'>Download PDF</button></div>",
                });
            </script>
            </div>
        </div>

"@) | Out-Null

}

$htmlCode.Append(@"
</body>
</html>
"@) | Out-Null

[System.IO.File]::WriteAllText($indexFilename, $htmlCode.ToString())
Write-Information -MessageData "HTML was written to disk: $($outputPath)" -InformationAction Continue
