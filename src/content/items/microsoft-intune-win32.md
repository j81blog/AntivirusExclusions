---
vendor: microsoft
title: Microsoft Intune Win32
order: 7
sources:
  - label: 'Microsoft Learn: Troubleshoot Win32 app issues'
    url: https://learn.microsoft.com/en-us/intune/app-management/deployment/troubleshoot-win32
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Microsoft Intune Management Extension\Content'
    type: Folder
    description: ''
    justification: ''
    condition: x64 clients
    status: current
  - path: '%SystemRoot%\IMECache'
    type: Folder
    description: ''
    justification: Needed for installation and execution of LOB Win32 apps.
    condition: ''
    status: current
  - path: '%ProgramFiles%\Microsoft Intune Management Extension\Content'
    type: Folder
    description: ''
    justification: ''
    condition: x86 clients
    status: current
tags: []
---

Av exclusions for Microsoft Intune Win32
