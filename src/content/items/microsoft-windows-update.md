---
vendor: microsoft
title: Microsoft Windows Update
order: 12
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus
notes: []
exclusions:
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Datastore.edb'
    type: File
    description: Windows Update or Automatic Update database file
    justification: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Edb*.jrs'
    type: File
    description: Log files
    justification: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Edb.chk'
    type: File
    description: Log files
    justification: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\Logs\Tmp.edb'
    type: File
    description: Log files
    justification: ''
  - path: '%ProgramData%\Microsoft\Search\Data\Applications\Windows\windows.edb'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\Res\*.log'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\SoftwareDistribution\Datastore\*\edb\*.log'
    type: File
    description: ''
    justification: ''
tags: []
---

Av exclusions for Microsoft Windows Update
