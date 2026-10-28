---
vendor: citrix
title: Citrix Virtual Apps and Desktops Delivery Controller
order: 14
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: Also configure the IIS Exclusions when IIS installed on the same server.
exclusions:
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName_log.ldf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName_log.ldf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%ProgramData%\Citrix\Broker\Cache'
    type: Folder
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%ProgramFiles%\Citrix\Broker\Service\BrokerService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Broker\Service\HighAvailabilityService.exe'
    type: Process
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSyncService.exe'
    type: Process
    description: ''
    justification: ''
    condition: 1912+
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\150\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\160\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
    condition: 2311+
    status: current
tags: []
---

Av exclusions for Citrix Virtual Apps and Desktops Delivery Controller
