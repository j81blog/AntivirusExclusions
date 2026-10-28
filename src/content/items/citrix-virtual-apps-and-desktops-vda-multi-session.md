---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (Multi Session)
order: 17
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\HDX\bin\CitrixLogonCsp.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\CtxUvi.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%UserProfile%\AppData\Local\Temp\Citrix\HDXRTConnector\*\*.txt'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: D:\mcsdif.vhdx
    type: File
    description: ''
    justification: ''
    condition: When using MCS I/O
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\HDX\bin\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2003+
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\ICAService\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\System32\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
  - path: '%ProgramFiles%\Citrix\HDX\bin\ctxgfx.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2112+
    status: current
  - path: '%ProgramFiles%\Citrix\HDX\bin\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2112+
    status: current
  - path: '%ProgramFiles%\Citrix\HDX\bin\picaSvc2.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2112+
    status: current
  - path: '%ProgramFiles%\Citrix\HTML5 Video Redirection\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 7.15 LTSR
    status: current
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVD.exe'
    type: Process
    description: ''
    justification: ''
    condition: AppDisks only
    status: legacy
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVDSVC.exe'
    type: Process
    description: ''
    justification: ''
    condition: AppDisks only
    status: legacy
  - path: '%ProgramFiles%\Citrix\System32\ctxgfx.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
  - path: '%ProgramFiles%\Citrix\User Profile Manager\UserProfileManager.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Virtual Desktop Agent\BrokerAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\drivers\CVhdFilter.sys'
    type: Process
    description: ''
    justification: ''
    condition: When using MCS I/O
    status: current
  - path: '%SystemRoot%\System32\spoolsv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
  - path: '%SystemRoot%\System32\winlogon.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
  - path: '%ProgramData%\Citrix\XenDesktopSetup\CtxBackup.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Virtual Apps and Desktops VDA (Multi Session)
