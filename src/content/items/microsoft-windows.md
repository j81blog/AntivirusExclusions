---
vendor: microsoft
title: Microsoft Windows
order: 14
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
notes: []
exclusions:
  - path: Pagefile.sys
    type: Folder
    description: ''
    justification: ''
  - path: C:\System32\Spool
    type: Folder
    description: ''
    justification: ''
  - path: C:\SoftwareDistribution\Datastore
    type: Folder
    description: ''
    justification: ''
  - path: C:\Users\Public\NTUser.pol
    type: File
    description: ''
    justification: ''
  - path: C:\system32\GroupPolicy\registry.pol
    type: File
    description: ''
    justification: ''
  - path: C:\Windows\System32\svchost.exe
    type: File
    description: System process
    justification: Can cause system instability if scanned/blocked
tags: []
---

Av exclusions for Microsoft Windows
