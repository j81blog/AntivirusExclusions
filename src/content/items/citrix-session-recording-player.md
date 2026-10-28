---
vendor: citrix
title: Citrix Session Recording Player
order: 7
lastReviewed: 2026-10-28
related:
  - citrix-session-recording-agent
  - citrix-session-recording-server
  - citrix-session-recording-task-service
  - citrix-session-recording-web-player
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
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%UserProfile%\AppData\Local\Citrix\SessionRecording\Player'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\iclstat.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\SessionRecording\Player\Bin\SsRecPlayer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Windows application used to play back recorded sessions.
