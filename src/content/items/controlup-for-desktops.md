---
vendor: controlup
title: ControlUp for Desktops
order: 3
sources:
  - label: Anti-Virus Exclusions for ControlUp Products
    url: https://support.controlup.com/docs/av-exclusions-for-controlup
notes:
  - kind: note
    text: ControlUp states these also apply to next-gen security products such as CrowdStrike and Carbon Black.
exclusions:
  - path: '%ProgramFiles%\Avacee\sip_agent'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramData%\Avacee\sip_agent\scripts'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\ControlUp\AgentManager'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramData%\ControlUp\EdgeDx\UserSurveys'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\SIPAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\RCNotifications.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\UserPrompt.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\WinFocusMonitor.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\Wow64MIHelper.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\Survey.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\SentimentUI.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\cu_rc.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\Avacee\sip_agent\hookldr.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
  - path: '%ProgramFiles%\ControlUp\AgentManager\AgentManager.exe'
    type: Process
    description: ''
    justification: ''
    condition: If directory exclusions are not possible
    status: current
tags: []
---

Av exclusions for ControlUp for Desktops
