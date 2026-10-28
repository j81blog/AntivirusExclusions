---
vendor: microsoft
title: Microsoft SQL Server Database Engine
order: 11
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
  - path: '*.ldf'
    type: File / Extension
    description: Transaction log files
    justification: ''
    condition: ''
    status: current
  - path: '*.ndf'
    type: File / Extension
    description: Secondary data files
    justification: ''
    condition: ''
    status: current
  - path: '*.bak'
    type: File / Extension
    description: Backup files
    justification: ''
    condition: ''
    status: current
  - path: '*.trn'
    type: File / Extension
    description: Transaction log backup files
    justification: ''
    condition: ''
    status: current
  - path: '*.trc'
    type: File / Extension
    description: Trace files
    justification: ''
    condition: When SQL trace or C2 auditing is used
    status: current
  - path: '*.xel'
    type: File / Extension
    description: Extended Events files
    justification: ''
    condition: ''
    status: current
  - path: '*.xem'
    type: File / Extension
    description: Extended Events files
    justification: ''
    condition: ''
    status: current
  - path: '*.sqlaudit'
    type: File / Extension
    description: SQL audit files
    justification: ''
    condition: ''
    status: current
  - path: '*.sql'
    type: File / Extension
    description: SQL query files
    justification: ''
    condition: ''
    status: current
  - path: '*.mdmp'
    type: File / Extension
    description: Exception dump files
    justification: Stored in the instance LOG folder or the folder set in HKLM\SOFTWARE\Microsoft\Microsoft SQL Server\<InstanceName>\CPE.
    condition: ''
    status: current
  - path: <Database_data_filename.extension>_MSSQL_DBCC<database_id_of_snapshot>
    type: File
    description: DBCC CHECKDB snapshot files
    justification: ''
    condition: ''
    status: current
  - path: C:\Users\<DistributionAgentAccount>\AppData\Temp\*.lob
    type: File
    description: Distribution Agent temp files
    justification: ''
    condition: Replication with OLEDB streaming (SQL Server 2017 CU22, 2019 and later)
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\DATA'
    type: Folder
    description: Default data folder
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\Backup'
    type: Folder
    description: Default backup folder
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\FTDATA'
    type: Folder
    description: Full-text catalog files
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\DATA\xtp'
    type: Folder
    description: In-Memory OLTP files
    justification: ''
    condition: Only when In-Memory OLTP is used
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\MSSQL<NN>.<InstanceName>\MSSQL\ReplData'
    type: Folder
    description: Replication snapshot folder
    justification: 'File types: .sch, .idx, .bcp, .pre, .cft, .dri, .trg, .prc'
    condition: Only when replication is used
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\<NNN>\COM'
    type: Folder
    description: Replication executables and COM objects (x64)
    justification: ''
    condition: Only when replication is used
    status: current
  - path: '%ProgramFiles(x86)%\Microsoft SQL Server\<NNN>\COM'
    type: Folder
    description: Replication executables and COM objects (x86)
    justification: ''
    condition: Only when replication is used
    status: current
  - path: <Quorum drive>:\
    type: Folder
    description: Quorum drive
    justification: ''
    condition: Only for failover cluster instances
    status: current
  - path: '%SystemRoot%\Cluster'
    type: Folder
    description: ''
    justification: ''
    condition: Only for failover cluster instances
    status: current
  - path: sqlservr.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: sqlagent.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: sqlbrowser.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft SQL Server\1<NN>\Shared\SQLDumper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft SQL Server Database Engine
