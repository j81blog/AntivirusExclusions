---
vendor: ivanti
title: Ivanti Workspace Control Application Whitelist Monitor
order: 12
lastReviewed: 2026-10-28
related:
  - ivanti-workspace-control-agent
  - ivanti-workspace-control-console
  - ivanti-workspace-control-relay-service
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
    source: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control Application Whitelist Monitor\FileHashes.xml'
    type: File
    description: Output file (alternative to the CSV file)
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%UserProfile%\AppData\Local\Temp'
    type: Folder
    description: AWM working directory
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Ivanti\Workspace Control Application Whitelist Monitor\FileHashMonitor.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Workspace Control tool that collects file hashes for application whitelisting.
