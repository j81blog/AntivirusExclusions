---
vendor: citrix
title: Citrix Session Recording Agent
order: 6
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecAgent.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecAgentWrapper.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\ssrecdrv.sys'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\srminifilterdrv.sys'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\msmq'
    type: Folder
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Session Recording Agent
