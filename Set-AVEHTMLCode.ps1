$csvFiles = Get-ChildItem -Path "$PSScriptRoot\*" -Include "*.csv" -Recurse
$htmlCode = New-Object -TypeName System.Text.StringBuilder

ForEach ($csvFile in $csvFiles) {
    $jsonFilename = $csvFile.FullName.Replace(".csv", ".json")
    $csvData = Import-Csv -Path $csvFile.FullName
    $json = $csvData | ConvertTo-Json -Depth 5
    $json | Out-File -FilePath $jsonFilename

    $title = $csvFile.BaseName
    $jsonFilename = Split-Path -Path $jsonFilename -Leaf
    $titleLink = $title.Replace(" ", "-").Replace("---", "-").Replace("--", "-").ToLower()
#Extract only the capital letters from $title and convert them to lowercase assigning them to a variable $shortCode
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

"@)

}
