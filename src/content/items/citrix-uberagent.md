---
vendor: citrix
title: Citrix uberAgent
order: 12
lastReviewed: 2026-10-28
related: []
sources:
  - label: 'uberAgent 8.x: Firewall and antivirus exclusions'
    url: https://docs.citrix.com/en-us/uberagent/8-x/planning/firewall-and-antivirus-exclusions
notes:
  - kind: note
    text: The output queue paths assume the default location. Adjust them when you use a different path.
exclusions:
  - path: '%ProgramData%\vast limits\uberAgent\Configuration*'
    type: File / Folder
    description: Configuration files
    justification: 'File types: .conf, .ps1'
    condition: Windows
    status: current
    source: ''
  - path: '%ProgramData%\vast limits\uberAgent\Config cache*'
    type: File / Folder
    description: Configuration cache
    justification: 'File types: .conf, .ps1'
    condition: Windows
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\uberAgent\Scripts*'
    type: File / Folder
    description: Scripts
    justification: 'File types: .ps1'
    condition: Windows
    status: current
    source: ''
  - path: '%ProgramData%\vast limits\uberAgent\Output Queue*'
    type: File / Folder
    description: Persistent output queue
    justification: 'File types: .db, .db-shm, .db-wal'
    condition: Windows
    status: current
    source: ''
  - path: /Library/Application Support/uberAgent/
    type: File / Folder
    description: Configuration files
    justification: 'File types: .conf'
    condition: macOS
    status: current
    source: ''
  - path: /Library/Application Support/uberAgent/Security inventory/*
    type: File / Folder
    description: Security inventory scripts
    justification: 'File types: .zsh'
    condition: macOS
    status: current
    source: ''
  - path: /Library/Application Support/uberAgent/Config Cache/*
    type: File / Folder
    description: Configuration cache
    justification: 'File types: .conf, .zsh'
    condition: macOS
    status: current
    source: ''
  - path: /Library/Application Support/uberAgent/Output Queue/*
    type: File / Folder
    description: Persistent output queue
    justification: 'File types: .db, .db-shm, .db-wal'
    condition: macOS
    status: current
    source: ''
  - path: /etc/uberAgent/
    type: File / Folder
    description: Configuration files
    justification: 'File types: .conf'
    condition: Linux
    status: current
    source: ''
  - path: /var/lib/uberAgent/OutputQueue/*
    type: File / Folder
    description: Persistent output queue
    justification: 'File types: .db, .db-shm, .db-wal'
    condition: Linux
    status: current
    source: ''
tags: []
---

Monitoring agent installed on endpoints, VDAs and servers (Windows, macOS and Linux).
