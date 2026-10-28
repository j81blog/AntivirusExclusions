---
vendor: ivanti
title: Ivanti Security Controls
order: 4
lastReviewed: 2026-10-28
related: []
sources:
  - label: Antivirus Exclusions for Ivanti Security Controls
    url: https://hub.ivanti.com/s/article/Antivirus-Exclusions-For-Patch-Deployments?language=en_US
notes:
  - kind: note
    text: Also exclude any patch-specific services, such as the Windows Update service or Adobe Updater.
  - kind: note
    text: The agent processes listed are the most used ones. Any file in the agent folders can be used (for example by asset tasks or Application Control), so Ivanti advises allowing the whole agent folder.
exclusions:
  - path: '%ProgramData%\Ivanti\Security Controls'
    type: Folder
    description: ''
    justification: ''
    condition: Console
    status: current
    source: ''
  - path: '%ProgramData%\LANDESK\Shavlik Protect'
    type: Folder
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Security Controls'
    type: Folder
    description: ''
    justification: Customizable location
    condition: Console
    status: current
    source: ''
  - path: '%ProgramFiles%\LANDESK\Shavlik Protect Agent'
    type: Folder
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\LANDESK\Shavlik Protect Agent'
    type: Folder
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: '%SystemRoot%\ProPatches'
    type: Folder
    description: ''
    justification: Customizable location. Include all subfolders.
    condition: Agentless deployments
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Security Controls\ST.Protect.exe'
    type: Process
    description: ''
    justification: ''
    condition: Console
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Security Controls\ST.ServiceHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Console
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Security Controls\ST.TaskHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Console
    status: current
    source: ''
  - path: '%ProgramFiles%\Ivanti\Security Controls\ST.TaskScheduler.exe'
    type: Process
    description: ''
    justification: ''
    condition: Console
    status: current
    source: ''
  - path: CL5.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: CL564.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: CL5Arm64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, ARM machines only
    status: current
    source: ''
  - path: DeploymentTool.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: SafeReboot.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: SafeReboot64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: SafeRebootArm64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, ARM machines only
    status: current
    source: ''
  - path: ST.Agent.UI.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STAgent.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STAgentCtl.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STAgentUpdater.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STDeploy.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STDeploy64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STDeployArm64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, ARM machines only
    status: current
    source: ''
  - path: STDispatch.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STDownloader.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments (distribution servers) and Security Controls Agent
    status: current
    source: ''
  - path: STPatch.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STPlatformUpdater.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, and Security Controls Agent during install
    status: current
    source: ''
  - path: STPlatformUpdater64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, and Security Controls Agent during install
    status: current
    source: ''
  - path: STPlatformUpdaterArm64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, ARM machines only
    status: current
    source: ''
  - path: STPluginHost.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STRemoteCommand.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STRemoteCommand64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STRemoteCommandarm64.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments, ARM machines only
    status: current
    source: ''
  - path: STSchedEx.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STScheduleview.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
  - path: STTelemetryReporter.exe
    type: Process
    description: ''
    justification: ''
    condition: Security Controls Agent
    status: current
    source: ''
  - path: STTestPatch.exe
    type: Process
    description: ''
    justification: ''
    condition: Agentless deployments
    status: current
    source: ''
tags: []
---

Ivanti Security Controls console, agentless patch deployments and agent.
