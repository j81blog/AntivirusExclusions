---
vendor: citrix
title: Citrix Session Recording Player
order: 7
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%UserProfile%\AppData\Local\Citrix\SessionRecording\Player\Cache'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: legacy
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%UserProfile%\AppData\Local\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\iclstat.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\SsRecPlayer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Session Recording Player
