---
vendor: microsoft
title: Microsoft System Center Operations Manager
order: 12
lastReviewed: 2026-10-28
related:
  - microsoft-sql-server-database-engine
sources:
  - label: Antivirus exclusions for Operations Manager 2019 and later
    url: https://learn.microsoft.com/en-us/system-center/scom/plan-security-antivirus
notes:
  - kind: note
    text: Microsoft does not recommend relying on process exclusions for Operations Manager servers.
  - kind: note
    text: When a folder name is longer than 8 characters, add both the short and the long name.
exclusions:
  - path: '%ProgramFiles%\Microsoft Monitoring Agent\Agent\Health Service State'
    type: Folder
    description: ''
    justification: 'File types: .edb, .chk, .log'
    condition: Windows agent
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft System Center\Operations Manager\Server\Health Service State'
    type: Folder
    description: ''
    justification: 'File types: .edb, .chk, .log'
    condition: Management server
    status: current
    source: ''
  - path: '%ProgramFiles%\System Center Operations Manager\Gateway\Health Service State'
    type: Folder
    description: ''
    justification: 'File types: .edb, .chk, .log'
    condition: Gateway server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft System Center\Operations Manager\WebConsole'
    type: Folder
    description: ''
    justification: ''
    condition: Web Console server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft System Center\Operations Manager\Reporting'
    type: Folder
    description: ''
    justification: ''
    condition: Reporting server
    status: current
    source: ''
  - path: <SQL data and log folders>
    type: Folder
    description: Folders with the .mdf and .ldf files of all Operations Manager databases, Report Server databases, master and tempdb
    justification: ''
    condition: SQL Server hosting the Operations Manager databases
    status: current
    source: ''
  - path: HealthService.exe
    type: Process
    description: ''
    justification: ''
    condition: Windows agent, Management server, Gateway server, Web Console server, SQL Server hosting the Operations Manager databases
    status: current
    source: ''
  - path: MonitoringHost.exe
    type: Process
    description: ''
    justification: ''
    condition: Windows agent, Management server, Gateway server, Web Console server, SQL Server hosting the Operations Manager databases
    status: current
    source: ''
  - path: MOMPerfSnapshotHelper.exe
    type: Process
    description: ''
    justification: ''
    condition: Windows agent, Management server
    status: current
    source: ''
  - path: Microsoft.Mom.Sdk.ServiceHost.exe
    type: Process
    description: ''
    justification: ''
    condition: Management server
    status: current
    source: ''
  - path: cshost.exe
    type: Process
    description: ''
    justification: ''
    condition: Management server
    status: current
    source: ''
tags: []
---

Operations Manager servers and the Windows agent on monitored machines.
