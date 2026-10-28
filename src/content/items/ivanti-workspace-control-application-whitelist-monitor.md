---
vendor: ivanti
title: Ivanti Workspace Control Application Whitelist Monitor
order: 12
sources:
  - label: 'Ivanti Workspace Control 2024: Anti-virus Best Practices'
    url: https://help.ivanti.com/res/help/en_US/IWC/2024/Help/Content/10036.htm
notes: []
exclusions:
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control Application Whitelist Monitor\FileHashes.csv'
    type: File
    description: Output file
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control Application Whitelist Monitor\FileHashes.xml'
    type: File
    description: Output file (alternative to the CSV file)
    justification: ''
    condition: ''
    status: current
  - path: '%UserProfile%\AppData\Local\Temp'
    type: Folder
    description: AWM working directory
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control Application Whitelist Monitor\FileHashMonitor.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Ivanti Workspace Control Application Whitelist Monitor
