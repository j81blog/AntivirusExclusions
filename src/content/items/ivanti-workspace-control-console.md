---
vendor: ivanti
title: Ivanti Workspace Control Console
order: 13
lastReviewed: 2026-10-28
related:
  - ivanti-workspace-control-agent
  - ivanti-workspace-control-application-whitelist-monitor
  - ivanti-workspace-control-relay-service
sources:
  - label: Ivanti Workspace Control Antivirus Best Practices
    url: https://hub.ivanti.com/s/article/Ivanti-Workspace-Control-Antivirus-Best-Practices?language=en_US
  - label: 'Ivanti Workspace Control 2024: Anti-virus Best Practices'
    url: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\ConsoleHelper.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFPol.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXA6.exe'
    type: File
    description: (Optional) Application Publishing to Citrix XenApp 6.x
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXA7.exe'
    type: File
    description: (Optional) Application Publishing to Citrix XenApp 7.x
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PFXACloud.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrfunc.exe'
    type: File
    description: (Optional) Application Manager feature
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrmail.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\PwrRat.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrsnmp.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrtech.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrtrace.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\pwrx64.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\StartWiz.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\svc\resop.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: https://hub.ivanti.com/s/article/Ivanti-Workspace-Control-Antivirus-Best-Practices?language=en_US
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\UserSettingsCaptureWizard.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\wmedit.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\WMExchAuto.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\wmwizrds.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\svc\res.exe'
    type: File / Process
    description: Service
    justification: ''
    condition: ''
    status: current
    source: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
tags: []
---

Workspace Control management console.
