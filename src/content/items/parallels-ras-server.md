---
vendor: parallels
title: Parallels RAS Server
order: 2
lastReviewed: 2026-10-28
related:
  - parallels-ras-client
sources:
  - label: 'KB Parallels: Antivirus exclusions'
    url: https://kb.parallels.com/en/123235
notes:
  - kind: note
    text: Parallels advises scanning the excluded locations with scheduled scans and monitoring new files created in them.
exclusions:
  - path: '%ProgramFiles(x86)%\Parallels\ApplicationServer'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramData%\Parallels\RASLogs'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Parallels\ApplicationServer\x64\SCardCertLogonHooker.dll'
    type: File
    description: ''
    justification: Exploit Mitigation and Activity Monitoring exclusion
    condition: Sophos only
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Parallels\ApplicationServer\x64\SCardHooker64.exe'
    type: File / Process
    description: ''
    justification: Exploit Mitigation and Activity Monitoring exclusion, and process exclusion
    condition: Sophos only
    status: current
    source: ''
  - path: '%windir%\System32\Memshell.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\lsass.exe'
    type: Process
    description: ''
    justification: ''
    condition: Sophos only
    status: current
    source: ''
tags: []
---

Parallels RAS servers.
