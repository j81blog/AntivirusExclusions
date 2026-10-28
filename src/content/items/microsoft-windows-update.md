---
vendor: microsoft
title: Microsoft Windows Update
order: 28
lastReviewed: 2026-10-28
related:
  - microsoft-windows
  - microsoft-windows-group-policy
  - microsoft-windows-security-files
  - microsoft-windows-server-wsus
  - microsoft-windows-user-profile
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus built-in exclusions
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-overview#built-in-exclusions
notes: []
exclusions:
  - path: '%ProgramData%\Microsoft\Search\Data\Applications\Windows\windows.edb'
    type: File
    description: Windows Search index
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\edb\*.log'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\Res\*.log'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Datastore.edb'
    type: File
    description: Windows Update or Automatic Update database file
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Edb.chk'
    type: File
    description: Log files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Edb*.jrs'
    type: File
    description: Log files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Tmp.edb'
    type: File
    description: Log files
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\tmp.edb'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\edb.chk'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\Edb\*.jrs'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Windows Update files on all Windows machines.
