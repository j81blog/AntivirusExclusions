---
vendor: microsoft
title: Microsoft Windows Server DHCP
order: 19
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#dhcp-server-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '%SystemRoot%\System32\DHCP\*\*.mdb'
    type: File
    description: ''
    justification: The location is set by DatabasePath, DhcpLogFilePath and BackupDatabasePath in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DHCPServer\Parameters.
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\DHCP\*\*.pat'
    type: File
    description: ''
    justification: The location is set by DatabasePath, DhcpLogFilePath and BackupDatabasePath in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DHCPServer\Parameters.
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\DHCP\*\*.log'
    type: File
    description: ''
    justification: The location is set by DatabasePath, DhcpLogFilePath and BackupDatabasePath in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DHCPServer\Parameters.
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\DHCP\*\*.chk'
    type: File
    description: ''
    justification: The location is set by DatabasePath, DhcpLogFilePath and BackupDatabasePath in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DHCPServer\Parameters.
    condition: ''
    status: current
  - path: '%SystemRoot%\System32\DHCP\*\*.edb'
    type: File
    description: ''
    justification: The location is set by DatabasePath, DhcpLogFilePath and BackupDatabasePath in HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\DHCPServer\Parameters.
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Windows Server DHCP
