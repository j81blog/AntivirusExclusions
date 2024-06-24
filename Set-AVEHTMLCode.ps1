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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/css/tabulator_site.min.css"
        integrity="sha512-9LQ1wW/0o26vV8KSgztjahv/AWL+6xR+pwsDQI9V7SLMINkszW9ZN5qmIrxFmZdktGTM9dHm225D4ilSbCw5zw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tabulator/6.2.1/js/tabulator.min.js"
        integrity="sha512-+FOZvgG76G8TTi7fxXsyGIA5XKmZXTOO2rLYtqakgs5ct1qsUSaO8/UP6Z3xbsyxL/hjS7mhYacG7CPmevI6Cw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- the line below is necessary for the Date sorter to work - it is buried in the v5.1 documentation here
    https://tabulator.info/docs/6.2/sort#func-builtin -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.4.4/luxon.min.js"
        integrity="sha512-dUlSLLkxslGILhPdCkALwk4szPhp3xmZIKFtlUD+O9Lslq41Aksmdt5OGqpomDoT4FsCUH70jQU8ezZHI3v1RQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <meta charset="utf-8" />
    <title>Anti Virus Exclusions</title>
</head>
<style>
    body {
        min-height: 100vh;
        max-width: 80vw;
        background-color: #A3BFD1;
        margin: 0 auto;
    }
</style>

<body>

    <h1>Anti Virus Exclusions</h1>
"@) | Out-Null

ForEach ($csvFile in $csvFiles) {
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
                var table = new Tabulator("#$($shortCode)-table", {
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
                    ]
                });
            </script>
        </div>

"@) | Out-Null

}

$htmlCode.Append(@"
</body>
</html>
"@) | Out-Null

[System.IO.File]::WriteAllText($indexFilename, $htmlCode.ToString())
Write-Information -MessageData "HTML was written to disk: $($outputPath)" -InformationAction Continue
