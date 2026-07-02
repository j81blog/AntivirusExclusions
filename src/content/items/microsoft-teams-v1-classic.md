---
vendor: microsoft
title: Microsoft Teams v1 (Classic)
order: 7
sources:
  - label: Exclude antivirus and DLP applications from blocking Teams
    url: https://learn.microsoft.com/en-us/microsoftteams/troubleshoot/teams-administration/include-exclude-teams-from-antivirus-dlp#classic-teams
notes: []
exclusions:
  - path: '%localappdata%\Microsoft\Teams\current\teams.exe'
    type: File
    description: ''
    justification: Per-User install
  - path: '%localappdata%\Microsoft\Teams\update.exe'
    type: File
    description: ''
    justification: Per-User install
  - path: '%localappdata%\Microsoft\Teams\current\squirrel.exe'
    type: File
    description: ''
    justification: Per-User install
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\current\teams.exe'
    type: File
    description: ''
    justification: Per-Machine install
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\update.exe'
    type: File
    description: ''
    justification: Per-Machine install
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\current\squirrel.exe'
    type: File
    description: ''
    justification: Per-Machine install
tags: []
---

Av exclusions for Microsoft Teams v1 (Classic)
