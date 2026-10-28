---
vendor: microsoft
title: Microsoft Windows Server Print Server
order: 25
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#print-server-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '*.shd'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '*.spl'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\spool\printers\*'
    type: Folder
    description: Spool folder
    justification: The location is set by DefaultSpoolDirectory in HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Print\Printers.
    condition: ''
    status: current
  - path: spoolsv.exe
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Windows Server Print Server
