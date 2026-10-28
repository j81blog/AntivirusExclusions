---
vendor: microsoft
title: Microsoft Teams v1 (Classic)
order: 13
lastReviewed: 2026-10-28
related:
  - microsoft-teams-v2
sources:
  - label: Exclude antivirus and DLP applications from blocking Teams
    url: https://learn.microsoft.com/en-us/troubleshoot/microsoftteams/teams-administration/include-exclude-teams-from-antivirus-dlp#classic-teams
notes: []
exclusions:
  - path: '%localappdata%\Microsoft\Teams\current\squirrel.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-User install
    status: current
    source: ''
  - path: '%localappdata%\Microsoft\Teams\current\teams.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-User install
    status: current
    source: ''
  - path: '%localappdata%\Microsoft\Teams\update.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-User install
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\current\squirrel.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-Machine install
    status: legacy
    source: ''
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\current\teams.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-Machine install
    status: legacy
    source: ''
  - path: '%ProgramFiles(x86)%\Microsoft\Teams\update.exe'
    type: Process
    description: ''
    justification: ''
    condition: Per-Machine install
    status: legacy
    source: ''
  - path: '%localappdata%\Microsoft\TeamsMeetingAddin'
    type: Folder
    description: Teams meeting add-in for Outlook
    justification: ''
    condition: Per-User install
    status: current
    source: ''
tags: []
---

Classic Teams (retired).
