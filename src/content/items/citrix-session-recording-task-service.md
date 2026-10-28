---
vendor: citrix
title: Citrix Session Recording Task Service
order: 9
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\SessionRecording\SRTaskService'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramData%\Citrix\SessionRecording\SRTask'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\SRTaskService\SsRecTaskService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\SessionRecording\SRTaskService\ExportConsole\SsRecExporterConsole.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Session Recording Task Service
