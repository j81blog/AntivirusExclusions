---
vendor: citrix
title: Citrix WorkspaceApp
order: 16
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: Exclusions for the Citrix Workspace app are typically not required. A need arises in environments with antivirus configured with more strict than usual policies, or in situations in which multiple security agents are simultaneously in use (AV, DLP, HIP, and so on). When installing Citrix Workspace app using the Virtual Delivery Agent installer, an "Online plug-in" folder is present in the install path such as %ProgramFiles(x86)%\Citrix\online plugin\ICA Client\
exclusions:
  - path: '%userprofile%\AppData\Local\Temp\Citrix\RTMediaEngineSRV\MediaEngineSRVDebugLogs\*\*.txt'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\ctxapclient32.dll'
    type: File
    description: ''
    justification: Only when App Protection is used
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\ctxapclient64.dll'
    type: File
    description: ''
    justification: Only when App Protection is used
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\ctxapinject.sys'
    type: File
    description: ''
    justification: Only when App Protection is used
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\ctxapdotnet.dll'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\MediaEngineService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\CDViewer.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\concentr.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\wfica32.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\bgblursvc.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\AuthManager\AuthManSvr.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\SelfServicePlugin\SelfService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\SelfServicePlugin\SelfServicePlugin.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\HdxTeams.exe'
    type: Process
    description: ''
    justification: Optimization for Microsoft Teams for Workspace app 2009.5 or older
  - path: '%ProgramFiles%(x86)\Citrix\ICA Client\HdxRtcEngine.exe'
    type: Process
    description: ''
    justification: Optimization for Microsoft Teams for Workspace app 2009.6 or higher 17-03-2022
tags: []
---

Av exclusions for Citrix WorkspaceApp
