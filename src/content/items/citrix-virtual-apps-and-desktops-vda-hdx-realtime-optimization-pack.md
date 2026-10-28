---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (HDX RealTime Optimization Pack)
order: 15
lastReviewed: 2026-10-28
related:
  - citrix-virtual-apps-and-desktops-vda-multi-session
  - citrix-virtual-apps-and-desktops-vda-single-session
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%UserProfile%\AppData\Local\Temp\Citrix\RTMediaEngineSRV\MediaEngineSRVDebugLogs\*\*.txt'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%UserProfile%\AppData\Local\Temp\Citrix\HDXRTConnector\*\*.txt'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\HDX RealTime Connector\AudioTranscoder.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\HDX RealTime Connector\MediaEngine.Net.Service.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\HDX RealTime Connector\MediaEngineService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

HDX RealTime Optimization Pack components on the VDA.
