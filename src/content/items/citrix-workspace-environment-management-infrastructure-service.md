---
vendor: citrix
title: Citrix Workspace Environment Management Infrastructure Service
order: 15
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Broker Service.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Broker Service Configuration Utility.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles(x86)%\Norskale\Norskale Infrastructure Services\Norskale Database Management Utility.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Workspace Environment Management Infrastructure Service
