---
vendor: citrix
title: Citrix User Profile Management
order: 10
sources:
  - label: 'Article: Citrix Guidelines for Antivirus Software Configuration for Citrix Profile Management'
    url: https://support.citrix.com/s/article/CTX220622-citrix-guidelines-for-antivirus-software-configuration-for-citrix-profile-management
  - label: Tech Zone Article
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices
notes: []
exclusions:
  - path: C:\Program Files\Citrix\User Profile Manager
    type: Folder
    description: User Profile Manager install path
    justification: ''
  - path: '%ProgramFiles%\Citrix\User Profile Manager\UserProfileManager.exe'
    type: Process
    description: User Profile Manager executable
    justification: ''
  - path: C:\Program Files\Citrix\User Profile Manager\Driver\upmjit.sys
    type: File
    description: User Profile Manager driver
    justification: ''
tags: []
---

Av exclusions for Citrix User Profile Management
