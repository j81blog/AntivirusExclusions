---
vendor: citrix
title: Citrix Workspace Environment Management Infrastructure Service Agent
order: 20
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
  - kind: note
    text: Older versions of the agent can be installed in %ProgramFiles(x86)%\Norskale\Norskale Agent Host. Make sure to check the installation directory before configuring antivirus exclusions.
exclusions:
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent'
    type: Folder
    description: ''
    justification: ''
    condition: On 64-bit OS
    status: current
  - path: '%ProgramFiles%\Citrix\Workspace Environment Management Agent'
    type: Folder
    description: ''
    justification: ''
    condition: 32-bit OS only
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\Agent Log Parser.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\AgentCacheUtility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\AgentGroupPolicyUtility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\AppInfoViewer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\AppsMgmtUtil.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\Citrix.Wem.Agent.EnrollmentUtility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\Citrix.Wem.Agent.LogonService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\Citrix.Wem.Agent.Service.exe'
    type: Process
    description: ''
    justification: ''
    condition: On-prem 1909+ /Cloud 1903+
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\Norskale Agent Host Service.exe'
    type: Process
    description: ''
    justification: ''
    condition: Up to on-prem 1909+/ Up to cloud 1903+
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\PrnsMgmtUtil.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMAppCmd.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMAppCmdDbg.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMAppHide.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMCmdAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMMaintMsg.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMRSAV.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Citrix\Workspace Environment Management Agent\VUEMUIAgent.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Workspace Environment Management Infrastructure Service Agent
