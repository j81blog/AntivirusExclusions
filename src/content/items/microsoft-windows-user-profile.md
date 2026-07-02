---
vendor: microsoft
title: Microsoft Windows User Profile
order: 13
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus
notes: []
exclusions:
  - path: '%UserProfile%\NTUser.dat*'
    type: File
    description: ''
    justification: ''
tags: []
---

Av exclusions for Microsoft Windows User Profile
