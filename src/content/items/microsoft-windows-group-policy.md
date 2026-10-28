---
vendor: microsoft
title: Microsoft Windows Group Policy
order: 17
lastReviewed: 2026-10-28
related:
  - microsoft-windows
  - microsoft-windows-security-files
  - microsoft-windows-update
  - microsoft-windows-user-profile
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus built-in exclusions
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-overview#built-in-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus excludes these Group Policy files automatically (built-in exclusions, all Windows versions). Add them manually for other antivirus products.
exclusions:
  - path: '%AllUsersProfile%\NTUser.pol'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Machine\Registry.pol'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Machine\Registry.tmp'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\GroupPolicy\Registry.pol'
    type: File
    description: ''
    justification: Group Policy client settings file
    condition: ''
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\GroupPolicy\User\Registry.pol'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\GroupPolicy\User\Registry.tmp'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramData%\Microsoft\GroupPolicy\Users\<User SID>\NTUser.pol'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Group Policy files on all Windows machines.
