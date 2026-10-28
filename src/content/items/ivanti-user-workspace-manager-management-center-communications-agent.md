---
vendor: ivanti
title: Ivanti User Workspace Manager Management Center Communications Agent
order: 9
lastReviewed: 2026-10-28
related:
  - ivanti-user-workspace-manager-application-control
  - ivanti-user-workspace-manager-environment-manager
  - ivanti-user-workspace-manager-file-director
  - ivanti-user-workspace-manager-insight
  - ivanti-user-workspace-manager-performance-manager
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
exclusions:
  - path: '%ProgramFiles%\AppSense\Management Center\Communications Agent\CCA.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\AppSense\Management Center\Watchdog Agent\WatchdogAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: Version 8.0 - 2021.3
    status: legacy
    source: ''
  - path: '%ProgramFiles%\AppSense\Management Center\Watchdog Agent\WatchdogAgent64.exe'
    type: Process
    description: ''
    justification: ''
    condition: Version 8.0 - 2021.3
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\AppSenseBootstrap\AppSenseBootstrap64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Management Center communications agent on UWM endpoints.
