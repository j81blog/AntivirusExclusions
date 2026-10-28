---
vendor: citrix
title: Citrix Virtual Apps and Desktops Delivery Controller
order: 14
lastReviewed: 2026-10-28
related:
  - microsoft-sql-server-database-engine
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
    source: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName_log.ldf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\HaImportDatabaseName.mdf'
    type: File
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%ProgramData%\Citrix\Broker\Cache'
    type: Folder
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\BrokerService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\HighAvailabilityService.exe'
    type: Process
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSyncService.exe'
    type: Process
    description: ''
    justification: ''
    condition: 1912+
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\150\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\160\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
    condition: 2311+
    status: current
    source: ''
tags: []
---

Delivery Controllers that broker sessions and manage the site.
