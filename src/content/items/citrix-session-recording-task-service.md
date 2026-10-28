---
vendor: citrix
title: Citrix Session Recording Task Service
order: 9
lastReviewed: 2026-10-28
related:
  - citrix-session-recording-agent
  - citrix-session-recording-player
  - citrix-session-recording-server
  - citrix-session-recording-web-player
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
    source: ''
  - path: '%ProgramData%\Citrix\SessionRecording\SRTask'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\SRTaskService\SsRecTaskService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\SRTaskService\ExportConsole\SsRecExporterConsole.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Session Recording service that runs scheduled tasks such as exports.
