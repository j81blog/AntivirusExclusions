---
vendor: microsoft
title: Microsoft Windows
order: 15
lastReviewed: 2026-10-28
related:
  - microsoft-windows-group-policy
  - microsoft-windows-security-files
  - microsoft-windows-update
  - microsoft-windows-user-profile
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Citrix Guidelines for Antivirus Software Configuration (CTX127030)
    url: https://support.citrix.com/external/article/CTX127030/citrix-guidelines-for-antivirus-software.html
notes: []
exclusions:
  - path: C:\system32\GroupPolicy\registry.pol
    type: File
    description: ''
    justification: Wrong path; see the Microsoft Windows Group Policy item for the correct entries
    condition: ''
    status: legacy
    source: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - path: C:\Users\Public\NTUser.pol
    type: File
    description: ''
    justification: Wrong path; see the Microsoft Windows Group Policy item for the correct entries
    condition: ''
    status: legacy
    source: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - path: C:\Windows\System32\svchost.exe
    type: File
    description: System process
    justification: Can cause system instability if scanned/blocked. No vendor source. A broad exclusion for a shared system process, not recommended
    condition: ''
    status: legacy
    source: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - path: C:\SoftwareDistribution\Datastore
    type: Folder
    description: ''
    justification: Wrong path; see the Microsoft Windows Update item for the correct entries
    condition: ''
    status: legacy
    source: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - path: '%SystemRoot%\System32\spool'
    type: Folder
    description: Print spooler folder
    justification: Citrix recommendation (CTX127030) to improve print performance.
    condition: ''
    status: current
    source: https://support.citrix.com/external/article/CTX127030/citrix-guidelines-for-antivirus-software.html
  - path: '%SystemDrive%\pagefile.sys'
    type: File
    description: Page file
    justification: Citrix recommendation (CTX127030). Adjust when the page file is on another drive.
    condition: ''
    status: current
    source: https://support.citrix.com/external/article/CTX127030/citrix-guidelines-for-antivirus-software.html
tags: []
---

General Windows files: page file and print spooler.
