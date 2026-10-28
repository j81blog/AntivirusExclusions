---
vendor: microsoft
title: Microsoft SQL Server Analysis, Integration and Reporting Services
order: 10
lastReviewed: 2026-10-28
related:
  - microsoft-sql-server-database-engine
sources:
  - label: Configure antivirus software to work with SQL Server
    url: https://learn.microsoft.com/en-us/troubleshoot/sql/database-engine/security/antivirus-and-sql-server
notes:
  - kind: note
    text: 'Placeholders: <ID>, <InstanceID> and <VersionNum> depend on the SQL Server version and <InstanceName> is MSSQLSERVER for the default instance. Applies to SQL Server 2016 and later on Windows.'
  - kind: note
    text: Also exclude custom Analysis Services partition storage locations.
exclusions:
  - path: '%ProgramFiles%\Microsoft SQL Server\MSAS<ID>.<InstanceName>\OLAP\Data'
    type: Folder
    description: ''
    justification: ''
    condition: Analysis Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSAS<ID>.<InstanceName>\OLAP\Temp'
    type: Folder
    description: ''
    justification: ''
    condition: Analysis Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSAS<ID>.<InstanceName>\OLAP\Backup'
    type: Folder
    description: ''
    justification: ''
    condition: Analysis Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSAS<ID>.<InstanceName>\OLAP\Log'
    type: Folder
    description: ''
    justification: ''
    condition: Analysis Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\MSAS<ID>.<InstanceName>\OLAP\bin\MSMDSrv.exe'
    type: Process
    description: ''
    justification: ''
    condition: Analysis Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<VersionNum>\DTS'
    type: Folder
    description: ''
    justification: ''
    condition: Integration Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<VersionNum>\DTS\Binn\ISServerExec.exe'
    type: Process
    description: ''
    justification: ''
    condition: Integration Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<VersionNum>\DTS\Binn\DTExec.exe'
    type: Process
    description: ''
    justification: ''
    condition: Integration Services
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<InstanceID>.<InstanceName>\MSSQL\Log\Polybase'
    type: Folder
    description: ''
    justification: ''
    condition: PolyBase
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<InstanceID>.<InstanceName>\MSSQL\Binn\Polybase\mpdwsvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: PolyBase
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<InstanceID>.<InstanceName>\Reporting Services'
    type: Folder
    description: ''
    justification: ''
    condition: Reporting Services 2016
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<InstanceID>.<InstanceName>\Reporting Services\ReportServer\Bin\ReportingServicesService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2016
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<InstanceID>.<InstanceName>\Reporting Services\RSWebApp\Microsoft.ReportingServices.Portal.WebHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2016
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\SSRS'
    type: Folder
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\Shared Tools'
    type: Folder
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\SSRS\Management\RSManagement.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\SSRS\Portal\RSPortal.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\SSRS\ReportServer\bin\ReportingServicesService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft SQL Server Reporting Services\SSRS\RSHostingService\RSHostingService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Reporting Services 2017 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS'
    type: Folder
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\Shared Tools'
    type: Folder
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\ASEngine\msmdsrv.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\Management\RSManagement.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\Office\RSOffice.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\Portal\RSPortal.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\PowerBI\Microsoft.Mashup.Container.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\PowerBI\Microsoft.Mashup.Container.NetFX40.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\PowerBI\Microsoft.Mashup.Container.NetFX45.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\PowerBI\RSPowerBI.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\ReportingServicesService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Power BI Report Server\PBIRS\RSHostingService\RSHostingService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Power BI Report Server
    status: current
    source: ''
tags: []
---

SQL Server Analysis, Integration and Reporting Services, PolyBase and Power BI Report Server.
