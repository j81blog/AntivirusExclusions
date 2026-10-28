---
vendor: microsoft
title: Microsoft Windows Server WINS
order: 26
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#windows-internet-name-service-wins-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus applies these as built-in exclusions. Add them manually for other antivirus products or when the files are in a custom location.
exclusions:
  - path: '%SystemRoot%\System32\Wins\*\*.chk'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\Wins\*\*.log'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\Wins\*\*.mdb'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\LogFiles'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\SysWow64\LogFiles'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Windows Server WINS
