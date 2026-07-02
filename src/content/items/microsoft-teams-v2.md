---
vendor: microsoft
title: Microsoft Teams v2
order: 8
sources:
  - label: Exclude antivirus and DLP applications from blocking Teams
    url: https://learn.microsoft.com/en-us/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp#new-teams
  - label: MC1189656 - Upcoming Change to Teams Desktop Client on Windows (17-12-2025)
    url: https://mc.merill.net/message/MC1189656
notes:
  - kind: extra
    text: Make sure to apply QoS settings only to "ms-teams_modulehost.exe" instead of "ms-teams.exe" as this is the new process handling media traffic in Teams v2.
exclusions:
  - path: '%ProgramFiles%\WindowsApps\MSTeams_*_x64__8wekyb3d8bbwe\ms-teams.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\WindowsApps\MSTeams_*_x64__8wekyb3d8bbwe\ms-teams_modulehost.exe'
    type: Process
    description: ''
    justification: https://mc.merill.net/message/MC1189656
  - path: '%ProgramFiles%\WindowsApps\MSTeams_*_x64__8wekyb3d8bbwe\ms-teamsupdate.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\WindowsApps\MSTeams_*_x64__8wekyb3d8bbwe\msteams_autostarter.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\WindowsApps\MSTeams_*_x64__8wekyb3d8bbwe\msedgewebview2.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Microsoft Teams v2
