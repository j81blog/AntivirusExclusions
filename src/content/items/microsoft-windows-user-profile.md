---
vendor: microsoft
title: Microsoft Windows User Profile
order: 29
lastReviewed: 2026-10-28
related:
  - microsoft-windows
  - microsoft-windows-group-policy
  - microsoft-windows-security-files
  - microsoft-windows-update
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
notes: []
exclusions:
  - path: '%UserProfile%\NTUser.dat*'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

User profile registry files on all Windows machines.
