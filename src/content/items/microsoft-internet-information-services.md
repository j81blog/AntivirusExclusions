---
vendor: microsoft
title: Microsoft Internet Information Services
order: 3
sources:
  - label: Web Server exclusions
    url: https://learn.microsoft.com/en-us/defender-endpoint/configure-server-exclusions-microsoft-defender-antivirus#web-server-exclusions
notes: []
exclusions:
  - path: '%SystemRoot%\IIS Temporary Compressed Files'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemDrive%\inetpub\temp\IIS Temporary Compressed Files'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemDrive%\inetpub\temp\ASP Compiled Templates'
    type: Folder
    description: ''
    justification: ''
  - path: '%systemDrive%\inetpub\logs'
    type: Folder
    description: ''
    justification: ''
  - path: '%systemDrive%\inetpub\wwwroot'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\SysWOW64\inetsrv\w3wp.exe'
    type: Process
    description: ''
    justification: x64 systems only
  - path: '%SystemRoot%\system32\inetsrv\w3wp.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemDrive%\PHP5433\php-cgi.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%SystemRoot%\inetpub\logs\logfiles\**.log'
    type: File
    description: ''
    justification: IIS 7
  - path: '%SystemRoot%\system32\inetsrv\MetaBase.xml'
    type: File
    description: ''
    justification: IIS 6
  - path: '%SystemRoot%\system32\inetsrv\MBschema.xml'
    type: File
    description: ''
    justification: IIS 6
  - path: '%SystemRoot%\system32\inetsrv\config\*.config'
    type: File
    description: ''
    justification: IIS 7
tags: []
---

Av exclusions for Microsoft Internet Information Services
