---
vendor: microsoft
title: Microsoft Windows Server DNS
order: 20
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
  - path: '%SystemRoot%\System32\Dns\*\*.dns'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\Dns\*\*.scc'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\Dns\*\BOOT'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\dns.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Windows Server DNS
