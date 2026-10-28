---
vendor: ivanti
title: Ivanti User Workspace Manager Environment Manager
order: 6
lastReviewed: 2026-10-28
related:
  - ivanti-user-workspace-manager-application-control
  - ivanti-user-workspace-manager-file-director
  - ivanti-user-workspace-manager-insight
  - ivanti-user-workspace-manager-management-center-communications-agent
  - ivanti-user-workspace-manager-performance-manager
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
  - kind: note
    text: Do not exclude the AppSenseVirtual folder (default C:\AppSenseVirtual). It holds user settings that users and their applications can write to, so it needs the same scanning as the rest of the user profile.
exclusions:
  - path: '%SystemRoot%\System32\drivers\AsModLdr.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.6+
    status: current
    source: ''
  - path: '%SystemRoot%\System32\drivers\AsVfxLdr.sys'
    type: File
    description: ''
    justification: ''
    condition: Version 8.1 - 8.5
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\EMDriver.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\drivers\EMRCore.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMCoreService.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMExit.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMLoggedOnUser.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EmPsHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMSystem.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EmTaskSchd.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMUser.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EMUserLogoff.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Environment Manager\Agent\EmVirtualizationHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-premises deployment
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMCoreService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMExit.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMLoggedOnUser.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EmPsHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMSystem.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EmTaskSchd.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMUser.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EMUserLogoff.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Ivanti Cloud Agent\UWM_EM_ENGINE.WIN64\EmVirtualizationHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Ivanti Neurons hybrid deployment (UWM 2023.3+)
    status: current
    source: ''
tags: []
---

UWM Environment Manager agent on endpoints.
