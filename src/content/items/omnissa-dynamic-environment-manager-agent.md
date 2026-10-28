---
vendor: omnissa
title: Omnissa Dynamic Environment Manager Agent
order: 3
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes: []
exclusions:
  - path: '%ProgramFiles%\Immidio\Flex Profiles'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Immidio\Flex Profiles\Flex+ Self-Support.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Immidio\Flex Profiles\FlexEngine.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Immidio\Flex Profiles\FlexService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Omnissa Dynamic Environment Manager Agent
