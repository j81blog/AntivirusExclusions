---
vendor: ivanti
title: Ivanti User Workspace Manager Performance Manager
order: 10
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
exclusions:
  - path: '%SystemRoot%\System32\drivers\PMOptimizer.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.0 - 10.0
    status: legacy
  - path: '%SystemRoot%\System32\drivers\PMUserMem.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.0 - 10.0
    status: legacy
  - path: '%ProgramFiles%\AppSense\Performance Manager\Agent\PMAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
  - path: '%ProgramFiles%\AppSense\Performance Manager\Agent\PMAgentAssist.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
  - path: '%ProgramFiles%\AppSense\Performance Manager\Agent\PMDenied.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_PM_ENGINE.WIN64\PMAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_PM_ENGINE.WIN64\PMAgentAssist.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_PM_ENGINE.WIN64\PMDenied.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
  - path: '%ProgramFiles(x86)%\AppSense\Performance Manager\Agent\PmDllInjectionAssist.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Ivanti User Workspace Manager Performance Manager
