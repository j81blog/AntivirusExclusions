---
vendor: microsoft
title: Microsoft FSLogix
order: 2
sources:
  - label: 'FSlogix: Configure Antivirus file and folder exclusions'
    url: https://learn.microsoft.com/en-us/fslogix/overview-prerequisites#configure-antivirus-file-and-folder-exclusions
notes: []
exclusions:
  - path: '%ProgramFiles%\FSLogix\Apps\frxccd.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\FSLogix\Apps\frxccds.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\FSLogix\Apps\frxsvc.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%Programfiles%\FSLogix\Apps\frxdrv.sys'
    type: File
    description: ''
    justification: ''
  - path: '%Programfiles%\FSLogix\Apps\frxdrvvt.sys'
    type: File
    description: ''
    justification: ''
  - path: '%Programfiles%\FSLogix\Apps\frxccd.sys'
    type: File
    description: ''
    justification: ''
  - path: '%TEMP%\*\*.VHD'
    type: File / Extension
    description: ''
    justification: ''
  - path: '%TEMP%\*\*.VHDX'
    type: File / Extension
    description: ''
    justification: ''
  - path: '%SystemRoot%\TEMP\*.VHD'
    type: File / Extension
    description: ''
    justification: ''
  - path: '%SystemRoot%\TEMP\*.VHDX'
    type: File / Extension
    description: ''
    justification: ''
  - path: '%ProgramData%\FSLogix\Cache\*'
    type: File / Folder
    description: ''
    justification: If CloudCache is enabled
  - path: '%ProgramData%\FSLogix\Proxy\*'
    type: File / Folder
    description: ''
    justification: If CloudCache is enabled
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhd
    type: File / Extension
    description: ''
    justification: Only when using VHD files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhd.lock
    type: File / Extension
    description: ''
    justification: Only when using VHD files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhd.meta
    type: File / Extension
    description: ''
    justification: Only when using VHD files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhd.metadata
    type: File / Extension
    description: ''
    justification: Only when using VHD files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhdx
    type: File / Extension
    description: ''
    justification: Only when using VHDX files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhdx.lock
    type: File / Extension
    description: ''
    justification: Only when using VHDX files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhdx.meta
    type: File / Extension
    description: ''
    justification: Only when using VHDX files
  - path: \\Fileserver\Share\fsllogixpath\*\*.vhdx.metadata
    type: File / Extension
    description: ''
    justification: Only when using VHDX files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.VHD
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHD files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.lock
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHD files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.meta
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHD files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.metadata
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHD files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*.VHDX
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHDX files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.lock
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHDX files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.meta
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHDX files
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.metadata
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share! Only when using VHDX files
tags: []
---

Av exclusions for Microsoft FSLogix
