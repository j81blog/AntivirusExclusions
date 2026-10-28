---
vendor: omnissa
title: Omnissa App Volumes Agent
order: 1
lastReviewed: 2026-10-28
related:
  - omnissa-app-volumes-manager
  - omnissa-dynamic-environment-manager-agent
  - omnissa-horizon-agent
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
    source: ''
  - path: '%ProgramFiles(x86)%\CloudVolumes\Agent'
    type: Folder
    description: ''
    justification: ''
    condition: Older versions (CloudVolumes folder)
    status: current
    source: ''
  - path: C:\SnapVolumesTemp
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: C:\SVROOT
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: C:\{00000000-0000-0000-0000-000000000000}\SVROOT
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\AppVolumes\Agent\svservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

App Volumes agent on desktops and session hosts.
