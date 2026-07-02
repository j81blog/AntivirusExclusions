---
vendor: ivanti
title: Ivanti Workspace Control Relay Service
order: 7
sources:
  - label: Ivanti Workspace Control Antivirus Best Practices
    url: https://forums.ivanti.com/s/article/Ivanti-Workspace-Control-Antivirus-Best-Practices?language=en_US
notes: []
exclusions:
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\Relay Server\RelayServer.exe'
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.log
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.pll
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.plla
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.pllc
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.stu
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.str
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.nur
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.pmw
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.lic
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.licn
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.licu
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.licr
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.pta
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.ptc
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.pts
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.mls
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.vdxlic
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.vdxlicn
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.vdxlicr
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.sublic
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.sublicn
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.cnl
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.appv
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Cache\{DateTime}\Resources\Custom_resources
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramData%\Ivanti\Relay Server\'
    type: Folder
    description: ''
    justification: Folder en subfolders
tags: []
---

Av exclusions for Ivanti Workspace Control Relay Service
