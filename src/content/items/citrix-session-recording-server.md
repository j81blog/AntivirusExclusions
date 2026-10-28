---
vendor: citrix
title: Citrix Session Recording Server
order: 8
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\App_Data*.xml'
    type: File
    description: ''
    justification: ''
    status: legacy
  - path: C:\SessionRecordings\<yyyy>\<MM>\<dd>\i_*.icl*
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\log'
    type: Folder
    description: ''
    justification: ''
    status: legacy
  - path: '%SystemRoot%\System32\msmq'
    type: Folder
    description: ''
    justification: ''
  - path: C:\SessionRecordings
    type: Folder
    description: ''
    justification: ''
  - path: C:\SessionRecordingsRestored
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\RestApiService'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\SignalRApiService'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\WebSocketServer'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Logging'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\LoggingWebService'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\EndPointRestApiService'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\RecordingDataApiServiceDsAuth'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Database'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\PolicyConsole'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Scripts'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\icldb.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\iclstat.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\SsRecAnalyticsService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\SsRecServerConsole.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\SsRecStorageManager.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\SsRecUtils.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\SsRecWebSocketServer.exe'
    type: Process
    description: ''
    justification: ''
    status: legacy
  - path: '%ProgramFiles%\Citrix\SessionRecording\Server\Bin\TestPolicyAdmin.exe'
    type: Process
    description: ''
    justification: ''
    status: legacy
  - path: '%ProgramFiles%\Citrix\SessionRecording\MQCoreService\Bin\SsRecMQCoreService.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Session Recording Server
