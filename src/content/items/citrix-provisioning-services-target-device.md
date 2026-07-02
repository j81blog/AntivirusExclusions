---
vendor: citrix
title: Citrix Provisioning Services Target Device
order: 5
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '**\*.vdiskcache'
    type: File / Extension
    description: ''
    justification: ''
  - path: '**\vdiskdif.vhdx'
    type: File
    description: ''
    justification: 7.x only, when using RAM cache with overflow
  - path: '%SystemRoot%\System32\drivers\bnistack6.sys'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\CfsDep2.sys'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\CVhdBusP6.sys'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\CVhdMp.sys'
    type: File
    description: ''
    justification: 7.x only
  - path: '%SystemRoot%\System32\drivers\cnicteam.sys'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\PvsVm\Service\PvsVmAgent.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\BNDevice.exe'
    type: Process
    description: Handles client functions, licensing, etc
    justification: ''
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVD.exe'
    type: Process
    description: ''
    justification: PvD and AppDisks only
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVDSVC.exe'
    type: Process
    description: ''
    justification: PvD and AppDisks only
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\BNIstack6.sys'
    type: Process
    description: IO protocol driver
    justification: UDP port 6901-6930 or custom port range
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CNicTeam.sys'
    type: Process
    description: Network NIC teaming, if being used
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CFsDep2.sys'
    type: Process
    description: File system minifilter
    justification: ''
  - path: '%ProgramFiles%\Citrix\Provisioning Services\drivers\CVhdMp.sys'
    type: Process
    description: Storage miniport driver
    justification: ''
tags: []
---

Av exclusions for Citrix Provisioning Services Target Device
