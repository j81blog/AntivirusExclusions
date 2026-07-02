---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (Single Session)
order: 13
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%userprofile%\AppData\Local\Temp\Citrix\HDXRTConnector\*\*.txt'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\drivers\CtxUvi.sys'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\HDX\bin\CitrixLogonCsp.dll'
    type: File
    description: ''
    justification: ''
  - path: D:\mcsdif.vhdx
    type: File
    description: ''
    justification: When using MCS I/O
  - path: '%SystemRoot%\System32\drivers\CVhdFilter.sys'
    type: Process
    description: ''
    justification: When using MCS I/O
  - path: '%ProgramFiles%\Citrix\User Profile Manager\UserProfileManager.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Virtual Desktop Agent\BrokerAgent.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\ICAService\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR
  - path: '%ProgramFiles%\Citrix\System32\ctxgfx.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR
  - path: '%ProgramFiles%\Citrix\ICAService\picaSvc2.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR
  - path: '%ProgramFiles%\Citrix\ICAService\CpSvc.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR
  - path: '%ProgramFiles%\Citrix\HDX\bin\picaSvc2.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR, 2112+
  - path: '%ProgramFiles%\Citrix\HDX\bin\CpSvc.exe'
    type: Process
    description: ''
    justification: CVAD 2112+
  - path: '%ProgramFiles%\Citrix\HDX\bin\ctxgfx.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR, CVAD 2112+
  - path: '%ProgramFiles%\Citrix\HDX\bin\CtxSvcHost.exe'
    type: Process
    description: ''
    justification: CVAD 2112+
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVD.exe'
    type: Process
    description: ''
    justification: PvD and AppDisks only
  - path: '%ProgramFiles%\Citrix\Personal vDisk\BIN\CTXPVDSVC.exe'
    type: Process
    description: ''
    justification: PvD and AppDisks only
  - path: '%SystemRoot%\System32\spoolsv.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\winlogon.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\HTML5 Video Redirection\WebSocketService.exe'
    type: Process
    description: ''
    justification: CVAD 7.15 LTSR
  - path: '%ProgramFiles%\Citrix\ICAService\WebSocketService.exe'
    type: Process
    description: ''
    justification: CVAD 1912 LTSR
  - path: '%ProgramFiles(x86)%\Citrix\HDX\bin\WebSocketService.exe'
    type: Process
    description: ''
    justification: CVAD 2003+
tags: []
---

Av exclusions for Citrix Virtual Apps and Desktops VDA (Single Session)
