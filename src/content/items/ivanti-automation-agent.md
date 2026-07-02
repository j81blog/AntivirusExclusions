---
vendor: ivanti
title: Ivanti Automation Agent
order: 1
sources:
  - label: Ivanti Automation Antivirus Best Practices
    url: https://forums.ivanti.com/s/article/Ivanti-Automation-Antivirus-Best-Practices?language=en_US
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\agent.exe'
    type: File / Process
    description: ''
    justification: 'Service Name: RESWAS'
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\agent_updater.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\deployer.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Wisexch.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisgate.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_2.0.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisShell_4.0.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_2.0_x64.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_2.0_x86.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_4.0_x64.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\wisstub_4.0_x86.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Sidekick32.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\Sidekick64.exe'
    type: File
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Ivanti\Automation\Agent\ SidekickCore\SidekickCore.exe'
    type: File
    description: ''
    justification: ''
tags: []
---

Av exclusions for Ivanti Automation Agent
