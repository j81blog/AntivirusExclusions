---
vendor: citrix
title: Citrix Provisioning Services Service
order: 4
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '**\*.vhd'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\*.avhd'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\*.vhdx'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\*.avhdx'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\*.pvp'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\*.lok'
    type: File / Extension
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\CvhdBusP6.sys'
    type: File
    description: ''
    justification: Windows Server 2008 R2
  - path: '%SystemRoot%\System32\drivers\CVhdMp.sys'
    type: File
    description: ''
    justification: Windows Server 2012 R2
  - path: '%SystemRoot%\System32\drivers\CfsDep2.sys'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramData%\Citrix\Provisioning Services\Tftpboot\ARDBP32.BIN'
    type: File
    description: Boot file used for TFTP boot
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Tftpboot\PVSNBP64.EFI'
    type: File
    description: Boot file used for TFTP boot
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNTFTP.EXE'
    type: Process
    description: TFTP service delivers bootstrap
    justification: UDP port 69
  - path: '%ProgramFiles%\Citrix\Provisioning Services\PVSTSB.EXE'
    type: Process
    description: Two Stage Boot delivers bootstrap
    justification: UDP port 6969
  - path: '%ProgramFiles%\Citrix\Provisioning Services\StreamService.exe'
    type: Process
    description: Streaming engine
    justification: UDP port 6901-6910
  - path: '%ProgramFiles%\Citrix\Provisioning Services\StreamProcess.exe'
    type: Process
    description: Service manager for streaming services
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\soapserver.exe'
    type: Process
    description: Handles Database connectivity and AD authentication
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Inventory.exe'
    type: Process
    description: vDisk Inventory
    justification: UDP port 6895
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Notifier.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\MgmntDaemon.exe'
    type: Process
    description: Inter-server communication
    justification: UDP port 6898
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNPXE.exe'
    type: Process
    description: PXE service (Only if PXE is used)
    justification: Broadcast Protocol
  - path: '%ProgramFiles%\Citrix\Provisioning Services\cdfsvc.exe'
    type: Process
    description: Citrix Diagnostic Facility COM Server
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNAbsService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\CFsDep2.sys'
    type: Process
    description: File system minifilter
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\CVhdMp.sys'
    type: Process
    description: Storage miniport driver
    justification: ''
tags: []
---

Av exclusions for Citrix Provisioning Services Service
