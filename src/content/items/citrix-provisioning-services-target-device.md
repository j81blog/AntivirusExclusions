---
vendor: citrix
title: Citrix Provisioning Services Target Device
order: 5
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '**\vdiskdif.vhdx'
    type: File
    description: ''
    justification: ''
    condition: 7.x only, when using RAM cache with overflow
    status: current
  - path: '%SystemRoot%\System32\drivers\bnistack6.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\CfsDep2.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\cnicteam.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\CVhdBusP6.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
  - path: '%SystemRoot%\System32\drivers\CVhdMp.sys'
    type: File
    description: ''
    justification: ''
    condition: 7.x only
    status: current
  - path: '**\*.vdiskcache'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVD.exe'
    type: Process
    description: ''
    justification: ''
    condition: PvD and AppDisks only
    status: legacy
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVDSVC.exe'
    type: Process
    description: ''
    justification: ''
    condition: PvD and AppDisks only
    status: legacy
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNDevice.exe'
    type: Process
    description: Handles client functions, licensing, etc
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\BNIstack6.sys'
    type: Process
    description: IO protocol driver
    justification: UDP port 6901-6930 or custom port range
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CFsDep2.sys'
    type: Process
    description: File system minifilter
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CNicTeam.sys'
    type: Process
    description: Network NIC teaming, if being used
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CVhdMp.sys'
    type: Process
    description: Storage miniport driver
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\PvsVm\Service\PvsVmAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
tags: []
---

Av exclusions for Citrix Provisioning Services Target Device
