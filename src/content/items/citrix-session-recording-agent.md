---
vendor: citrix
title: Citrix Session Recording Agent
order: 6
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%SystemRoot%\System32\drivers\srminifilterdrv.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\ssrecdrv.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\ssrecdrv.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\ssrecdrv.inf'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\ssrecdrv.cat'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\srminifilterdrv.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\srminifilterdrv.inf'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Drivers\srminifilterdrv.cat'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\HDX\bin\CtxAudioListener.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\msmq'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%UserProfile%\Videos\SessionRecordings'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecAgentWrapper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecEventMonitorService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecSessionHelper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecSRGraphics.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecSessionInfoProvider.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecHotKeyMonitor.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SsRecAgentConsole.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\Agent\Bin\SRAgentTool.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Session Recording Agent
