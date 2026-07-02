---
vendor: ivanti
title: Ivanti Security Controls
order: 4
sources:
  - label: Antivirus Exclusions for Ivanti Security Controls
    url: https://forums.ivanti.com/s/article/Antivirus-Exclusions-For-Patch-Deployments?language=en_US
notes:
  - kind: note
    text: Console executables (located in the installation directory) can be in different locations depending on the version. Console Directories 2019.3 and earlier - C:\ProgramData\Landesk\Shavlik Protect - C:\Program Files\LANDESK\Shavlik Protect (by default, may be custom) 2020.1 and later - C:\ProgramData\Ivanti\Security Controls - C:\Program Files\Ivanti\Security Controls (by default, may be custom)
exclusions:
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control\Relay Server\RelayServer.exe'
    type: File
    description: ''
    justification: ''
  - path: C:\Relay\Cache\{<GUID>}\Transactions\*.log
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

Av exclusions for Ivanti Security Controls
