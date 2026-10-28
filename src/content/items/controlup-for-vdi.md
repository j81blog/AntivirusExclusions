---
vendor: controlup
title: ControlUp for VDI
order: 4
lastReviewed: 2026-10-28
related:
  - controlup-for-applications
  - controlup-for-compliance
  - controlup-for-desktops
  - controlup-synthetic-monitoring
sources:
  - label: Anti-Virus Exclusions for ControlUp Products
    url: https://support.controlup.com/docs/av-exclusions-for-controlup
notes: []
exclusions:
  - path: '%ProgramFiles%\Smart-X'
    type: Folder
    description: Agent and Monitor folder
    justification: ''
    condition: ControlUp Agent and Monitor
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\*\AppLoadTimeTracer.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\<Version###>\AppLoadTimeTracer.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If wildcards are not possible; update after every upgrade
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\*\cuAgent.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\<Version###>\cuAgent.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If wildcards are not possible; update after every upgrade
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\*\cuAgentHelper.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpAgent\<Version###>\cuAgentHelper.exe'
    type: Process
    description: ControlUp Agent
    justification: ''
    condition: If wildcards are not possible; update after every upgrade
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpRealTimeAgentManager'
    type: Folder
    description: Agent Manager
    justification: ''
    condition: Version 9.0 and later
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpRealTimeAgentManager\cuAgentManager.exe'
    type: Process
    description: Agent Manager
    justification: ''
    condition: Version 9.0 and later. If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpRealTimeAgentManager\Uninstall.vbs'
    type: File
    description: Agent Manager
    justification: ''
    condition: Version 9.0 and later. If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpMonitor\*\CuMonitor.exe'
    type: Process
    description: ControlUp Monitor
    justification: ''
    condition: If directory exclusions are not possible
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUpMonitor\<Version###>\CuMonitor.exe'
    type: Process
    description: ControlUp Monitor
    justification: ''
    condition: If wildcards are not possible; update after every upgrade
    status: current
    source: ''
  - path: '%ProgramFiles%\Smart-X\ControlUp\ControlUpConsole.exe'
    type: Process
    description: Real-Time Console
    justification: ''
    condition: On-premises deployments
    status: current
    source: ''
  - path: ControlUpConsole.exe
    type: Process
    description: Real-Time Console
    justification: In the folder where the Console is saved.
    condition: Hybrid cloud deployments
    status: current
    source: ''
  - path: '%ProgramFiles%\ControlUp Remote DX - Microsoft\CUEPUX-Plugin.dll'
    type: File
    description: Remote DX plugin
    justification: ''
    condition: Client devices, Azure Virtual Desktop
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Citrix\ICA Client\cuepux.dll'
    type: File
    description: Remote DX plugin
    justification: ''
    condition: Client devices, Citrix
    status: current
    source: ''
  - path: '%ProgramFiles%\ControlUp Remote DX - VMware\cuepux.dll'
    type: File
    description: Remote DX plugin
    justification: ''
    condition: Client devices, Horizon
    status: current
    source: ''
  - path: '%ProgramFiles%\ControlUp Inc\ControlUp Server'
    type: Folder
    description: COP server
    justification: ''
    condition: On-premises deployments
    status: current
    source: ''
  - path: '%SystemRoot%\System32\dsamain.exe'
    type: Process
    description: ControlUp Server installer
    justification: The source lists this together with PanelSW.InstallerJetBA.dll.
    condition: On-premises deployments
    status: current
    source: ''
tags: []
---

ControlUp Agent and Monitor on VDI machines, plus the Console and Remote DX plugins.
