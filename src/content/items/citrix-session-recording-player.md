---
vendor: citrix
title: Citrix Session Recording Player
order: 7
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\SessionRecording\Player\Bin\SsRecPlayer.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%UserProfile%\AppData\Local\Citrix\SessionRecording\Player\Cache'
    type: Folder
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Session Recording Player
