---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (Single Session)
order: 18
lastReviewed: 2026-10-28
related:
  - citrix-user-profile-management
  - citrix-virtual-apps-and-desktops-vda-hdx-realtime-optimization-pack
  - citrix-virtual-apps-and-desktops-vda-multi-session
  - microsoft-fslogix
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
    source: ''
  - path: '%SystemRoot%\System32\drivers\CtxUvi.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%UserProfile%\AppData\Local\Temp\Citrix\HDXRTConnector\*\*.txt'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: D:\mcsdif.vhdx
    type: File
    description: ''
    justification: ''
    condition: When using MCS I/O
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\HDX\bin\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2003+
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICAService\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\HDX\bin\CpSvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2112+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\HDX\bin\ctxgfx.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR, CVAD 2112+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\HDX\bin\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 2112+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\HDX\bin\picaSvc2.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR, 2112+
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\HTML5 Video Redirection\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 7.15 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\ICAService\CpSvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\ICAService\picaSvc2.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\ICAService\WebSocketService.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVD.exe'
    type: Process
    description: ''
    justification: ''
    condition: PvD and AppDisks only
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVDSVC.exe'
    type: Process
    description: ''
    justification: ''
    condition: PvD and AppDisks only
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Citrix\System32\ctxgfx.exe'
    type: Process
    description: ''
    justification: ''
    condition: CVAD 1912 LTSR
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\User Profile Manager\UserProfileManager.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Virtual Desktop Agent\BrokerAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\drivers\CVhdFilter.sys'
    type: Process
    description: ''
    justification: ''
    condition: When using MCS I/O
    status: current
    source: ''
  - path: '%SystemRoot%\System32\spoolsv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\winlogon.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%ProgramData%\Citrix\XenDesktopSetup\CtxBackup.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Virtual Delivery Agent on single-session (desktop OS) machines.
