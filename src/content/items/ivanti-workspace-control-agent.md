---
vendor: ivanti
title: Ivanti Workspace Control Agent
order: 5
sources:
  - label: Ivanti Workspace Control Antivirus Best Practices
    url: https://forums.ivanti.com/s/article/Ivanti-Workspace-Control-Antivirus-Best-Practices?language=en_US
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\cpushld.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\ConsoleHelper.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\guardian.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\IGStub.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\IGStubCTX.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\islogoff.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFPOL.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pfsync.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pftsra.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pfwsmgr.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrcache.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrgate.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PwrGpo.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrgrid.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrhelp.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrinit.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmail.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmapi.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmapi64.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmenu.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmlmp.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PwrRat.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrsnmp.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrstart.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrsync.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrtrace.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrx64.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pfxa6.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\RES.Workspacemanager.WMSync.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\setoutsi.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\setprint.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\wifimon.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\WMExchAuto.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\WMStartMenu.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\ResPesvc.exe'
    type: File / Process
    description: Service
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\ResPesvc64.exe'
    type: File / Process
    description: Service
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\svc\res.exe'
    type: File / Process
    description: Service
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\svc\resop.exe'
    type: File / Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pfgii.exe'
    type: Process
    description: (Optional) Citrix Streamed Applications
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrdesk.exe'
    type: Process
    description: (Optional) RES ONE Workspace Shell
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrfunc.exe'
    type: Process
    description: (Optional) Application Manager feature
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXA6.exe'
    type: Process
    description: (Optional) Application Publishing to Citrix XenApp 6.x
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXA7.exe'
    type: Process
    description: (Optional) Application Publishing to Citrix XenApp 7.x
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXACloud.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\system32\pwrgrids.exe'
    type: Process
    description: (Optional) Virtual Applications
    justification: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\Data\DBCache\Resources\custom_resources'
    type: File / Folder
    description: OR the redirected location! (Optional) Custom Resources
    justification: ''
  - path: '%ProgramFiles%\RES Software\VDX Plugin\VDXPluginHelper.exe'
    type: Process
    description: (Optional) RES VDX Plugin 32 / 64 bit
    justification: ''
  - path: '%ProgramFiles%\RES Software\VDX Engine\VDXEngine.exe'
    type: Process
    description: (Optional) RES VDX Engine 32 / 64 bit
    justification: ''
  - path: '%ProgramFiles%\RES Software\VDX Engine\VDXEngineHelper.exe'
    type: Process
    description: (Optional) RES VDX Engine 32 / 64 bit
    justification: ''
tags: []
---

Av exclusions for Ivanti Workspace Control Agent
