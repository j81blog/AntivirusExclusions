---
vendor: citrix
title: Cloud Connector
order: 17
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSync.ps1'
    type: File
    description: ''
    justification: ''
  - path: "%ProgramFiles%\\Citrix\\Broker\\Service\\Setup\_Scripts\\ConfigureHighAvailabilityService.ps1"
    type: File
    description: ''
    justification: ''
  - path: "%ProgramFiles%\\Citrix\\Broker\\Service\\Setup\_Scripts\\RestoreDesktopServerKeys.ps1"
    type: File
    description: ''
    justification: ''
  - path: "%ProgramFiles%\\Citrix\\Broker\\Service\\Setup\_Scripts\\BackupDesktopServerKeys.ps1"
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\Setup Scripts\Set-ADControllerDiscovery.ps1'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Broker\Service\ControlScripts\HighAvailabilityServiceControl.psm1'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\AppData\Local\Temp\CitrixLhc\<TempFolder>\GenericFunctions.ps1'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\AppData\Local\Temp\CitrixLhc\<TempFolder>\ImportBrokerConfiguration.ps1'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\AppData\Local\Temp\CitrixLhc\<TempFolder>\ImportConfigConfiguration.ps1'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\AppData\Local\Temp\CitrixLhc\<TempFolder>\Logging.ps1'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Monitor\SnapIn\Citrix.Monitor.Admin.V1\Citrix.Monitor.Commands.psm1'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\Logs'
    type: Folder
    description: All Citrix-owned Processes in Citrix Cloud Connector write to this folder
    justification: ''
  - path: '%SystemDrive%\Logs'
    type: Folder
    description: 'The following processes write to this folder: CdfCaptureService.exe, XaXdCloudProxy.exe, cwcconnectorcomponents.exe, msiexec.exe'
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\InstallLogs'
    type: Folder
    description: 'The following processes write to this folder: Citrix.CloudServices.AutoUpdater.Updater.exe, cwcconnector.exe, cwcconnectorcomponents.exe, cwcconnectorprerequisites.exe or msiexec.exe. Exclusions can be limited to *.log files in this folder.'
    justification: ''
  - path: '%SystemRoot%\Temp\<ProductGUID>\Logger\Citrix.CloudServices.AutoUpdater.Logger.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\Temp\<ProductGUID>\Updater\Citrix.CloudServices.AutoUpdater.Updater.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\Temp\<ProductGUID>\<ProductGUID>\CWCConnector.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\Temp\<ProductGUID>\<ProductGUID>\cwcconnectorcomponents.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\Temp\<ProductGUID>\<ProductGUID>\cwcconnectorprerequisites.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\InstallExes\CWCConnector.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\InstallExes\cwcconnectorcomponents.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\WorkspaceCloud\InstallExes\cwcconnectorprerequisites.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Package Cache\<ProductGUID>\CWCConnector.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Package Cache\<ProductGUID>\cwcconnectorcomponents.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Package Cache\<ProductGUID>\cwcconnectorprerequisites.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramData%\Package Cache\<ProductGUID>\Citrix.CloudServices.SetupTools.CustomActions.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\Microsoft.NET\Framework64\<DotNetVersionFolder>\InstallUtil.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\system32\wevtutil.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\system32\netsh.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\system32\taskkill.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\system32\sc.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\SysWOW64\wevtutil.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\SysWOW64\netsh.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\SysWOW64\taskkill.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\SysWOW64\sc.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentLogger\Citrix.CloudServices.AgentLogger.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentSystem\Citrix.CloudServices.AgentSystem.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentWatchDog\Citrix.CloudServices.AgentWatchDog.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\Connectivity Test\Citrix.CloudServices.ConnectivityCheck.UI.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\CredentialProvider\Citrix.CloudServices.CredentialProvider.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\WebRelayAgent\Citrix.CloudServices.WebRelay.Agent.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentDiscovery\Citrix.CloudServices.AgentDiscovery.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentDiscovery\Handlers\XenApp65\Citrix.CloudServices.AgentDiscovery.XenApp65.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\AgentDiscovery\Handlers\XenDesktop7\Citrix.CloudServices.AgentDiscovery.XenDesktop7.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\Agent\Citrix.CloudServices.Agent.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\NetScaler Cloud Gateway\MetricsService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\NetScaler Cloud Gateway\Citrix.NetScaler.CloudGateway.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\RemoteHCLServer\Service\RemoteHCLServer.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Common Files\Citrix\HCLPlugins\RegisterPlugins.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\ConfigSync\ConfigSyncRun.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\ConfigSync\MonitorNotificationRun.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<SQLServerVersionFolder>\Shared\sqlwriter.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<SQLServerVersionFolder>\LocalDB\Binn\sqlservr.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Microsoft SQL Server\<SQLServerVersionFolder>\Tools\Binn\SqlLocalDb.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Sdkproxy\Snapin\v1\OutOfProc\Citrix.Xaxd.Authentication.OutOfProc.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CdfCaptureService\CdfCaptureService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CitrixITSMAdapterProvider\WorkspaceAutomationConnectorPlugin.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\ClxMtpService\Citrix.ClxMtpService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\WemProvider\Connector.Authentication.Host.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\WemProvider\Connector.Messaging.Host.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\MessageBroker\Citrix.CloudServices.MessageBroker.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\CloudServices\StaMessagingPlugin\Citrix.CloudServices.StaMessagingPlugin.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Monitor\Service\MonitorConnectorService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\AccessSecurityService\Citrix.AccessSecurityService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\StaService\Service\StaService.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Added missing exclusions
