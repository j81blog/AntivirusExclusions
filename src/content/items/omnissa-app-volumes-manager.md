---
vendor: omnissa
title: Omnissa App Volumes Manager
order: 2
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes:
  - kind: note
    text: Omnissa advises considering real-time scan exclusions on the App Volumes Manager machines.
exclusions:
  - path: '%ProgramFiles(x86)%\CloudVolumes\Manager\bin'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Omnissa App Volumes Manager
