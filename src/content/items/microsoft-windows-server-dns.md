---
vendor: microsoft
title: Microsoft Windows Server DNS
order: 20
lastReviewed: 2026-10-28
related:
  - microsoft-windows-active-directory-controller
  - microsoft-windows-server-frs-and-dfsr
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#dns-server-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '%SystemRoot%\System32\Dns\*\*.log'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\Dns\*\*.dns'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\Dns\*\*.scc'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\Dns\*\BOOT'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\dns.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Windows Server DNS Server role.
