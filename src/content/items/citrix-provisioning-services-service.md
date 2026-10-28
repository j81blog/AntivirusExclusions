---
vendor: citrix
title: Citrix Provisioning Services Service
order: 4
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramData%\Citrix\Provisioning Services\Tftpboot\ARDBP32.BIN'
    type: File
    description: Boot file used for TFTP boot
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Pvsnbpn64.efi'
    type: File
    description: Boot file used for TFTP boot
    justification: ''
    condition: Only when UEFI PXE boot is used
    status: current
  - path: '%SystemRoot%\System32\drivers\CfsDep2.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\CvhdBusP6.sys'
    type: File
    description: ''
    justification: ''
    condition: Windows Server 2008 R2
    status: current
  - path: '%SystemRoot%\System32\drivers\CVhdMp.sys'
    type: File
    description: ''
    justification: ''
    condition: Windows Server 2012 R2
    status: current
  - path: '**\*.avhd'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '**\*.avhdx'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '**\*.lok'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '**\*.pvp'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '**\*.vhd'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '**\*.vhdx'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNAbsService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNPXE.exe'
    type: Process
    description: PXE service (Only if PXE is used)
    justification: Broadcast Protocol
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNTFTP.EXE'
    type: Process
    description: TFTP service delivers bootstrap
    justification: UDP port 69
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\cdfsvc.exe'
    type: Process
    description: Citrix Diagnostic Facility COM Server
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\CFsDep2.sys'
    type: Process
    description: File system minifilter
    justification: ''
    condition: ''
    status: legacy
  - path: '%ProgramFiles%\Citrix\Provisioning Services\CVhdMp.sys'
    type: Process
    description: Storage miniport driver
    justification: ''
    condition: ''
    status: legacy
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Inventory.exe'
    type: Process
    description: vDisk Inventory
    justification: UDP port 6895
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\MgmtDaemon.exe'
    type: Process
    description: Inter-server communication
    justification: UDP port 6898
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\Notifier.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\PVSTSB.EXE'
    type: Process
    description: Two Stage Boot delivers bootstrap
    justification: UDP port 6969
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\soapserver.exe'
    type: Process
    description: Handles Database connectivity and AD authentication
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\StreamProcess.exe'
    type: Process
    description: Service manager for streaming services
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\StreamService.exe'
    type: Process
    description: Streaming engine
    justification: UDP port 6901-6910
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Provisioning Services Service
