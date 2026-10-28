---
vendor: microsoft
title: Microsoft Internet Information Services
order: 6
sources:
  - label: Web Server exclusions
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#web-server-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '%SystemRoot%\inetpub\logs\logfiles\**.log'
    type: File
    description: ''
    justification: ''
    condition: IIS 7
    status: legacy
  - path: '%SystemRoot%\system32\inetsrv\config\*.config'
    type: File
    description: ''
    justification: ''
    condition: IIS 7
    status: legacy
  - path: '%SystemRoot%\system32\inetsrv\MBschema.xml'
    type: File
    description: ''
    justification: ''
    condition: IIS 6
    status: legacy
  - path: '%SystemRoot%\system32\inetsrv\MetaBase.xml'
    type: File
    description: ''
    justification: ''
    condition: IIS 6
    status: legacy
  - path: '%SystemDrive%\inetpub\logs'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemDrive%\inetpub\temp\ASP Compiled Templates'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemDrive%\inetpub\temp\IIS Temporary Compressed Files'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemDrive%\inetpub\wwwroot'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\IIS Temporary Compressed Files'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemDrive%\PHP5433\php-cgi.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\system32\inetsrv\w3wp.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\SysWOW64\inetsrv\w3wp.exe'
    type: Process
    description: ''
    justification: ''
    condition: x64 systems only
    status: current
tags: []
---

Av exclusions for Microsoft Internet Information Services
