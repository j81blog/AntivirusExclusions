---
vendor: ivanti
title: Ivanti User Workspace Manager Management Center Communications Agent
order: 9
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
  - path: '%ProgramFiles%\AppSense\Management Center\Watchdog Agent\WatchdogAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: Version 8.0 - 2021.3
    status: legacy
  - path: '%ProgramFiles%\AppSense\Management Center\Watchdog Agent\WatchdogAgent64.exe'
    type: Process
    description: ''
    justification: ''
    condition: Version 8.0 - 2021.3
    status: legacy
  - path: '%SystemRoot%\System32\AppSenseBootstrap\AppSenseBootstrap64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Ivanti User Workspace Manager Management Center Communications Agent
