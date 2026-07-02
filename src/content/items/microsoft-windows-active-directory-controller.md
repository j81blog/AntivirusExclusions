---
vendor: microsoft
title: Microsoft Windows Active Directory Controller
order: 9
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus
notes: []
exclusions:
  - path: '%SystemRoot%\SYSVOL"'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\SYSVOL"'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\SYSVOL"'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\SYSVOL"'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\NTDS\Ntds.dit"'
    type: File
    description: Main NTDS database files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Database File'
  - path: '%SystemRoot%\NTDS\Ntds.pat"'
    type: File
    description: Main NTDS database files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Database File'
  - path: '%SystemRoot%\NTDS\EDB*.log"'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
  - path: '%SystemRoot%\NTDS\Res*.log"'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
  - path: '%SystemRoot%\NTDS\Edb*.jrs"'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
  - path: '%SystemRoot%\NTDS\Ntds.pat"'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
  - path: '%SystemRoot%\NTDS\Temp.edb"'
    type: File
    description: NTDS Working folder
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Working Directory'
  - path: '%SystemRoot%\NTDS\Edb.chk"'
    type: File
    description: NTDS Working folder
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Working Directory'
  - path: '%systemroot%\System32\DHCP'
    type: File / Folder
    description: ''
    justification: Optionally only allow *.mdb, *.pat, *.log, *.chk, *.edb in (sub) folders
  - path: '%systemroot%\System32\DNS'
    type: File / Folder
    description: ''
    justification: Optionally only allow *.log, *.dns, BOOT in (sub) folders
tags: []
---

Av exclusions for Microsoft Windows Active Directory Controller
