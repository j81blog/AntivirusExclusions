---
vendor: citrix
title: Citrix Workspace Environment Management Infrastructure Service
order: 19
lastReviewed: 2026-10-28
related:
  - citrix-workspace-environment-management-infrastructure-service-agent
  - microsoft-sql-server-database-engine
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: Older versions only, no longer listed in the 2026 Citrix tech paper
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Broker Service Configuration Utility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Broker Service.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Database Management Utility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

WEM infrastructure servers (older versions).
