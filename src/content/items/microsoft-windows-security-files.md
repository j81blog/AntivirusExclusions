---
vendor: microsoft
title: Microsoft Windows Security files
order: 11
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus
notes:
  - kind: note
    text: If these files are not excluded, antivirus software might prevent appropriate access to these files, and security databases can become corrupted. Scanning these files can prevent the files from being used or might prevent a security policy from being applied to the files. These files should not be scanned because antivirus software might not correctly treat them as proprietary database files. These are the recommended exclusions. There might be other file types that are not included in this article that should be excluded.
exclusions:
  - path: '%SystemRoot%\Security\Database\*.edb'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.sdb'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.log'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.chk'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.jrs'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.xml'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.csv'
    type: File
    description: Windows Security files
    justification: ''
  - path: '%SystemRoot%\Security\Database\*.cmtx'
    type: File
    description: Windows Security files
    justification: ''
tags: []
---

Av exclusions for Microsoft Windows Security files
