---
vendor: citrix
title: Citrix Federated Authentication Service (FAS)
order: 3
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\Federated Authentication Service'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%windir%\ServiceProfiles\NetworkService\AppData\Local\FasDatabase'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Federated Authentication Service\Citrix.Authentication.FederatedAuthenticationService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\Federated Authentication Service\FasAdminConsole.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix Federated Authentication Service (FAS)
