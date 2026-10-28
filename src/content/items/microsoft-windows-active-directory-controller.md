---
vendor: microsoft
title: Microsoft Windows Active Directory Controller
order: 16
sources:
  - label: Microsoft
    url: https://support.microsoft.com/en-us/help/822158/virus-scanning-recommendations-for-enterprise-computers-that-are-running
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '%SystemRoot%\NTDS\Edb.chk'
    type: File
    description: NTDS Working folder
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Working Directory'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Edb*.jrs'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\EDB*.log'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Ntds.dit'
    type: File
    description: Main NTDS database files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Database File'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Ntds.pat'
    type: File
    description: Main NTDS database files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Database File'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Ntds*.pat'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Res*.log'
    type: File
    description: Active Directory transaction log files
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\Database Log Files Path'
    condition: ''
    status: current
  - path: '%SystemRoot%\NTDS\Temp.edb'
    type: File
    description: NTDS Working folder
    justification: 'The location of these files is specified in the following registry subkey: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NTDS\Parameters\DSA Working Directory'
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\DHCP'
    type: File / Folder
    description: ''
    justification: Optionally only allow *.mdb, *.pat, *.log, *.chk, *.edb in (sub) folders
    condition: DHCP Server role
    status: current
  - path: '%SystemRoot%\System32\DNS'
    type: File / Folder
    description: ''
    justification: Optionally only allow *.log, *.dns, *.scc, BOOT in (sub) folders
    condition: DNS Server role
    status: current
  - path: '%SystemRoot%\SYSVOL\Domain'
    type: File / Folder
    description: SYSVOL replica set root (FRS)
    justification: 'Exclude these files in this folder and all subfolders: *.adm, *.admx, *.adml, Registry.pol, Registry.tmp, *.aas, *.inf, Scripts.ini, *.ins, Oscfilter.ini. The SysVol value in HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Netlogon\Parameters specifies the location.'
    condition: Only when FRS is used for SYSVOL replication
    status: current
  - path: '%SystemRoot%\SYSVOL_DFSR\Domain'
    type: File / Folder
    description: SYSVOL replica set root (DFSR)
    justification: 'Exclude these files in this folder and all subfolders: *.adm, *.admx, *.adml, Registry.pol, Registry.tmp, *.aas, *.inf, Scripts.ini, *.ins, Oscfilter.ini. The SysVol value in HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\Netlogon\Parameters specifies the location.'
    condition: Only when DFSR is used for SYSVOL replication
    status: current
  - path: '%SystemDrive%\System Volume Information\DFSR'
    type: File / Folder
    description: DFSR database and working folder
    justification: 'Exclude these files: $db_normal$, FileIDTable_*, SimilarityTable_*, *.XML, $db_dirty$, $db_clean$, $db_lost$, Dfsr.db, *.frx, *.log, Fsr*.jrs, Fsr.chk, Tmp.edb. The location is set in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID\Replica Set Configuration File.'
    condition: Only when DFSR is used
    status: current
  - path: '%SystemRoot%\System32\lsass.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\ntfrs.exe'
    type: Process
    description: ''
    justification: ''
    condition: Only when FRS is used for SYSVOL replication
    status: current
  - path: '%SystemRoot%\System32\dfsr.exe'
    type: Process
    description: ''
    justification: ''
    condition: Only when DFSR is used
    status: current
  - path: '%SystemRoot%\System32\dfsrs.exe'
    type: Process
    description: ''
    justification: ''
    condition: Only when DFSR is used
    status: current
  - path: '%SystemRoot%\System32\dns.exe'
    type: Process
    description: ''
    justification: ''
    condition: DNS Server role
    status: current
tags: []
---

Av exclusions for Microsoft Windows Active Directory Controller
