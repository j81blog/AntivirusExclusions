---
vendor: microsoft
title: Microsoft Windows Server FRS and DFSR
order: 23
lastReviewed: 2026-10-28
related:
  - microsoft-windows-active-directory-controller
  - microsoft-windows-server-dns
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#file-replication-service-frs-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus applies these as built-in exclusions. Add them manually for other antivirus products or when the files are in a custom location.
exclusions:
  - path: '%windir%\Ntfrs\jet\sys\*\edb.chk'
    type: File
    description: FRS working folder
    justification: The location is set by Working Directory in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NtFrs\Parameters.
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%windir%\Ntfrs\jet\*\Ntfrs.jdb'
    type: File
    description: FRS working folder
    justification: The location is set by Working Directory in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NtFrs\Parameters.
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%windir%\Ntfrs\jet\log\*\*.log'
    type: File
    description: FRS working folder
    justification: The location is set by Working Directory in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NtFrs\Parameters.
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%windir%\Ntfrs\*\Edb\*.log'
    type: File
    description: FRS database log files
    justification: The location is set by DB Log File Directory in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Ntfrs\Parameters.
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%SystemRoot%\Sysvol\*\Ntfrs_cmp*'
    type: Folder
    description: FRS staging folder
    justification: The location is set by Replica Set Stage in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NtFrs\Parameters\Replica Sets\GUID.
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%SystemRoot%\SYSVOL\domain\DO_NOT_REMOVE_NtFrs_PreInstall_Directory\*\Ntfrs*'
    type: Folder
    description: FRS preinstall folder
    justification: ''
    condition: Only when FRS is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\$db_normal$'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\FileIDTable_*'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\SimilarityTable_*'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\*.XML'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\$db_dirty$'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\$db_clean$'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\$db_lostl$'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\Dfsr.db'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\*.frx'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\*.log'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\Fsr*.jrs'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemDrive%\System Volume Information\DFSR\Tmp.edb'
    type: File
    description: DFSR database and working folder
    justification: The location is set by Replica Set Configuration File in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DFSR\Parameters\Replication Groups\GUID.
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemRoot%\System32\dfsr.exe'
    type: Process
    description: ''
    justification: ''
    condition: Only when DFSR is used
    status: current
    source: ''
  - path: '%SystemRoot%\System32\dfsrs.exe'
    type: Process
    description: ''
    justification: ''
    condition: Only when DFSR is used
    status: current
    source: ''
tags: []
---

File Replication Service and DFS Replication, for example for SYSVOL.
