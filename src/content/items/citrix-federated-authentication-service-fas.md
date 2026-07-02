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
  - path: '%windir%\ServiceProfiles\NetworkService\AppData\Local\FasDatabase'
    type: Folder
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Federated Authentication Service\Citrix.Authentication.FederatedAuthenticationService.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Federated Authentication Service\FasAdminConsole.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Federated Authentication Service (FAS)
