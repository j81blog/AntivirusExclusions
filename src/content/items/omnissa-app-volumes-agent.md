---
vendor: omnissa
title: Omnissa App Volumes Agent
order: 1
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes:
  - kind: note
    text: 'Omnissa says these locations should still be scanned on a regular schedule: the App Volumes and Omnissa program folders, C:\SnapVolumesTemp, C:\SVROOT, pagefile.sys and the LDF, MDF and NDF files.'
exclusions:
  - path: '%ProgramFiles%\Omnissa\AppVolumes'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\CloudVolumes\Agent'
    type: Folder
    description: ''
    justification: ''
    condition: Older versions (CloudVolumes folder)
    status: current
  - path: C:\SnapVolumesTemp
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: C:\SVROOT
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: C:\{00000000-0000-0000-0000-000000000000}\SVROOT
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\AppVolumes\Agent\svservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Omnissa App Volumes Agent
