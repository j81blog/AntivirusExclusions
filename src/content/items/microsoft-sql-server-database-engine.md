---
vendor: microsoft
title: Microsoft SQL Server Database Engine
order: 11
lastReviewed: 2026-10-28
related:
  - citrix-virtual-apps-and-desktops-delivery-controller
  - citrix-workspace-environment-management-infrastructure-service
  - microsoft-configuration-manager-site-server
  - microsoft-sql-server-analysis-integration-and-reporting-services
  - microsoft-system-center-operations-manager
  - microsoft-windows-server-failover-clustering
sources:
  - label: Configure antivirus software to work with SQL Server
    url: https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/security/antivirus-and-sql-server
notes:
  - kind: note
    text: 'Placeholders: <NN> is the SQL Server version number and <InstanceName> is MSSQLSERVER for the default instance. Applies to SQL Server 2016 and later on Windows.'
  - kind: note
    text: Also exclude FILESTREAM data folders (container type FILESTREAM in sys.database_files) and, for failover cluster instances, the MSDTC folder on the MSDTC drive. These have no fixed path.
exclusions:
  - path: '*.mdf'
    type: File / Extension
    description: Primary data files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.ldf'
    type: File / Extension
    description: Transaction log files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.ndf'
    type: File / Extension
    description: Secondary data files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.bak'
    type: File / Extension
    description: Backup files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.trn'
    type: File / Extension
    description: Transaction log backup files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.trc'
    type: File / Extension
    description: Trace files
    justification: ''
    condition: When SQL trace or C2 auditing is used
    status: current
    source: ''
  - path: '*.xel'
    type: File / Extension
    description: Extended Events files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.xem'
    type: File / Extension
    description: Extended Events files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.sqlaudit'
    type: File / Extension
    description: SQL audit files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.sql'
    type: File / Extension
    description: SQL query files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '*.mdmp'
    type: File / Extension
    description: Exception dump files
    justification: Stored in the instance LOG folder or the folder set in HKLM\SOFTWARE\Microsoft\Microsoft SQL Server\<InstanceName>\CPE.
    condition: ''
    status: current
    source: ''
  - path: <Database_data_filename.extension>_MSSQL_DBCC<database_id_of_snapshot>
    type: File
    description: DBCC CHECKDB snapshot files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: C:\Users\<DistributionAgentAccount>\AppData\Temp\*.lob
    type: File
    description: Distribution Agent temp files
    justification: ''
    condition: Replication with OLEDB streaming (SQL Server 2017 CU22, 2019 and later)
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\DATA'
    type: Folder
    description: Default data folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\Backup'
    type: Folder
    description: Default backup folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\FTDATA'
    type: Folder
    description: Full-text catalog files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\DATA\xtp'
    type: Folder
    description: In-Memory OLTP files
    justification: ''
    condition: Only when In-Memory OLTP is used
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\ReplData'
    type: Folder
    description: Replication snapshot folder
    justification: 'File types: .sch, .idx, .bcp, .pre, .cft, .dri, .trg, .prc'
    condition: Only when replication is used
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<NNN>\COM'
    type: Folder
    description: Replication executables and COM objects (x64)
    justification: ''
    condition: Only when replication is used
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Microsoft SQL Server\<NNN>\COM'
    type: Folder
    description: Replication executables and COM objects (x86)
    justification: ''
    condition: Only when replication is used
    status: current
    source: ''
  - path: <Quorum drive>:\
    type: Folder
    description: Quorum drive
    justification: ''
    condition: Only for failover cluster instances
    status: current
    source: ''
  - path: '%SystemRoot%\Cluster'
    type: Folder
    description: ''
    justification: ''
    condition: Only for failover cluster instances
    status: current
    source: ''
  - path: sqlservr.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: sqlagent.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: sqlbrowser.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\1<NN>\Shared\SQLDumper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

SQL Server database servers.
