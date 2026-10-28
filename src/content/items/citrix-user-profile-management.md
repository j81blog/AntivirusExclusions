---
vendor: citrix
title: Citrix User Profile Management
order: 13
sources:
  - label: 'Article: Citrix Guidelines for Antivirus Software Configuration for Citrix Profile Management'
    url: https://support.citrix.com/s/article/CTX220622-citrix-guidelines-for-antivirus-software-configuration-for-citrix-profile-management
  - label: Tech Zone Article
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices
notes: []
exclusions:
  - path: '%ProgramFiles%\Citrix\User Profile Manager\Driver\upmjit.sys'
    type: File
    description: User Profile Manager driver
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\User Profile Manager'
    type: Folder
    description: User Profile Manager install path
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Citrix\User Profile Manager\UserProfileManager.exe'
    type: Process
    description: User Profile Manager executable
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Citrix User Profile Management
