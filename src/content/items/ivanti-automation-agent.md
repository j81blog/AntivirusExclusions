---
vendor: ivanti
title: Ivanti Automation Agent
order: 1
lastReviewed: 2026-10-28
related:
  - ivanti-automation-console
  - ivanti-automation-dispatcher
  - ivanti-workspace-control-agent
sources:
  - label: Ivanti Automation Antivirus Best Practices
    url: https://hub.ivanti.com/s/article/Ivanti-Automation-Antivirus-Best-Practices?language=en_US
notes:
  - kind: note
    text: The default folder for new installs is Ivanti\Automation. Upgraded installs are often in RES Software\Automation Manager. Executables left over from older Automation Manager versions do not need exclusions.
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\SidekickCore\SidekickCore.exe'
    type: File
    description: ''
    justification: ''
    condition: Agent+ (x64)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\agent_updater.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\deployer.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Sidekick32.exe'
    type: File
    description: ''
    justification: ''
    condition: Agent+ (x64)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Sidekick64.exe'
    type: File
    description: ''
    justification: ''
    condition: Agent+ (x64)
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Wisexch.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisgate.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_2.0.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_4.0.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_2.0_x64.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_2.0_x86.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_4.0_x64.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_4.0_x86.exe'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_2.0_x64.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_2.0_x86.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_4.0_x64.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_4.0_x86.exe'
    type: File
    description: ''
    justification: ''
    condition: RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\agent.exe'
    type: File / Process
    description: ''
    justification: 'Service Name: RESWAS'
    condition: Agent+ (x64), and RES ONE Automation Agent up to 10.2.100.0
    status: current
    source: ''
tags: []
---

Ivanti Automation agent on managed machines.
