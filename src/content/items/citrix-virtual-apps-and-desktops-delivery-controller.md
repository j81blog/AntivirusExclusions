---
vendor: citrix
title: Citrix Virtual Apps and Desktops Delivery Controller
order: 11
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: Also configure the IIS Exclusions when IIS installed on the same server.
exclusions:
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName.mdf'
    type: File
    description: ''
    justification: 1912+
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName.mdf'
    type: File
    description: ''
    justification: 1912+
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName_log.ldf'
    type: File
    description: ''
    justification: 1912+
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName_log.ldf'
    type: File
    description: ''
    justification: 1912+
  - path: '%ProgramData% \Citrix\Broker\Cache'
    type: Folder
    description: ''
    justification: 1912+
  - path: '%ProgramFiles%\Citrix\Broker\Service\BrokerService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\150\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\HighAvailabilityService.exe'
    type: Process
    description: ''
    justification: 1912+
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSyncService.exe'
    type: Process
    description: ''
    justification: 1912+
  - path: '%ProgramFiles%\Microsoft SQL Server\160\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: 2311+
tags: []
---

Av exclusions for Citrix Virtual Apps and Desktops Delivery Controller
