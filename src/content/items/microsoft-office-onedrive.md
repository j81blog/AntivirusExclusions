---
vendor: microsoft
title: Microsoft Office OneDrive
order: 8
sources: []
notes:
  - kind: warning
    text: Microsoft does not publish antivirus exclusion guidance for OneDrive. These entries are community practice; only use them when you see sync or performance problems.
exclusions:
  - path: '%localappdata%\Microsoft\OneDrive\OneDrive.exe'
    type: Process
    description: Microsoft OneDrive
    justification: ''
    condition: Per-User install
    status: current
  - path: '%ProgramFiles%\Microsoft OneDrive\OneDrive.exe'
    type: Process
    description: Microsoft OneDrive
    justification: ''
    condition: Per-Machine install
    status: current
tags: []
---

Av exclusions for Microsoft Office OneDrive
