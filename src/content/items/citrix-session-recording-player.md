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
    justification: Older versions only, no longer listed in the 2026 Citrix tech paper
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
  - path: '%UserProfile%\AppData\Local\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\iclstat.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\SsRecPlayer.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Session Recording Player
