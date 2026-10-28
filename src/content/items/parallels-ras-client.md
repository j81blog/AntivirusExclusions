---
vendor: parallels
title: Parallels RAS Client
order: 1
sources:
  - label: 'KB Parallels: Antivirus exclusions'
    url: https://kb.parallels.com/en/123235
notes:
  - kind: note
    text: These exclusions apply to Windows client devices.
exclusions:
  - path: '%appdata%\2XClient'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Parallels'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Parallels'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Parallels RAS Client
