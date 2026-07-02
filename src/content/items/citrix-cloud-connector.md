---
vendor: citrix
title: Citrix Cloud Connector
order: 1
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName_log.ldf'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName_log.ldf'
    type: File
    description: ''
    justification: ''
  - path: C:\Logs\CDF
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\Logs'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\XaXdCloudProxy\XaXdCloudProxy.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\HighAvailabilityService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSyncService.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Cloud Connector
