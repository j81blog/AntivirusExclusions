---
vendor: microsoft
title: Microsoft Windows Group Policy
order: 10
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus
notes:
  - kind: note
    text: Group Policy exclusions apply to Windows Server only. If you're using Microsoft Defender Antivirus, Group Policy exclusions are included in automatic server role exclusions.
exclusions:
  - path: '%AllUsersProfile%\NTUser.pol'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Machine\Registry.pol'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Machine\Registry.tmp'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\GroupPolicy\User\Registry.pol'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\GroupPolicy\User\Registry.tmp'
    type: File
    description: ''
    justification: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Registry.pol'
    type: File
    description: ''
    justification: Group Policy client settings file
tags: []
---

Av exclusions for Microsoft Windows Group Policy
