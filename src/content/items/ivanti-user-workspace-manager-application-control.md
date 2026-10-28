---
vendor: ivanti
title: Ivanti User Workspace Manager Application Control
order: 5
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
exclusions:
  - path: '%SystemRoot%\System32\drivers\AMFileSystemFilter.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 10.1+
    status: current
  - path: '%SystemRoot%\System32\drivers\AMFilterDriver.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.0 - 10.0
    status: legacy
  - path: '%SystemRoot%\System32\drivers\AMMiniFilter.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.0 - 10.0
    status: legacy
  - path: '%SystemRoot%\System32\drivers\AsModLdr.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.9+
    status: current
  - path: '%ProgramFiles%\AppSense\Application Manager\Agent\AMAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
  - path: '%ProgramFiles%\AppSense\Application Manager\Agent\AMAgentAssist.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_AC_ENGINE.WIN64\AMAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_AC_ENGINE.WIN64\AMAgentAssist.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
tags: []
---

Av exclusions for Ivanti User Workspace Manager Application Control
