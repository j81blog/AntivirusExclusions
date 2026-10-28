---
vendor: microsoft
title: Microsoft Windows Server WSUS
order: 27
lastReviewed: 2026-10-28
related:
  - microsoft-windows-update
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#windows-server-update-services-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '%SystemRoot%\WSUS\WSUSContent'
    type: Folder
    description: ''
    justification: The location is set in HKEY_LOCAL_MACHINE\Software\Microsoft\Update Services\Server\Setup.
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\WSUS\UpdateServicesDBFiles'
    type: Folder
    description: ''
    justification: The location is set in HKEY_LOCAL_MACHINE\Software\Microsoft\Update Services\Server\Setup.
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Download'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Windows Server Update Services (WSUS) servers.
