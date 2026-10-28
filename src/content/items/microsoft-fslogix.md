---
vendor: microsoft
title: Microsoft FSLogix
order: 5
sources:
  - label: 'FSlogix: Configure Antivirus file and folder exclusions'
    url: https://learn.microsoft.com/en-us/fslogix/overview-prerequisites#configure-antivirus-file-and-folder-exclusions
notes:
  - kind: note
    text: Also exclude the FSLogix profile mount points (the VHD(X) attach points) from scanning during container attach and detach.
exclusions:
  - path: '%ProgramFiles%\FSLogix\Apps\frxccd.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\FSLogix\Apps\frxdrv.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\FSLogix\Apps\frxdrvvt.sys'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.VHDX
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHDX files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.VHD
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHD files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.lock
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHD files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.meta
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHD files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhd.metadata
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHD files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.lock
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHDX files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.meta
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHDX files
    status: current
  - path: \\<storageaccount.file.core.windows.net>\<share>\*\*.vhdx.metadata
    type: File / Extension
    description: ''
    justification: If Azure storage is used, change the value to the correct SA fqdn and share!
    condition: Only when using VHDX files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhd
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHD files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhd.lock
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHD files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhd.meta
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHD files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhd.metadata
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHD files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhdx
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHDX files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhdx.lock
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHDX files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhdx.meta
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHDX files
    status: current
  - path: \\Fileserver\Share\fslogixpath\*\*.vhdx.metadata
    type: File / Extension
    description: ''
    justification: ''
    condition: Only when using VHDX files
    status: current
  - path: '%SystemRoot%\TEMP\*\*.VHD'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\TEMP\*\*.VHDX'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%TEMP%\*\*.VHD'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%TEMP%\*\*.VHDX'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramData%\FSLogix\Cache\*'
    type: File / Folder
    description: ''
    justification: If you change the default cache or proxy location, adjust this path.
    condition: If CloudCache is enabled
    status: current
  - path: '%ProgramData%\FSLogix\Proxy\*'
    type: File / Folder
    description: ''
    justification: If you change the default cache or proxy location, adjust this path.
    condition: If CloudCache is enabled
    status: current
  - path: '%ProgramFiles%\FSLogix\Apps\frxccd.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: legacy
  - path: '%ProgramFiles%\FSLogix\Apps\frxccds.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\FSLogix\Apps\frxsvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\FSLogix\Apps'
    type: Folder
    description: FSLogix binaries and utilities
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramData%\FSLogix'
    type: Folder
    description: FSLogix configuration and logs
    justification: ''
    condition: ''
    status: current
  - path: '%UserProfile%\AppData\Local\FSLogix'
    type: Folder
    description: Per-user FSLogix local data
    justification: ''
    condition: ''
    status: current
  - path: HKLM\SOFTWARE\FSLogix
    type: Registry
    description: Profile registry keys
    justification: ''
    condition: ''
    status: current
  - path: HKLM\SOFTWARE\Policies\FSLogix
    type: Registry
    description: ODFC registry keys
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft FSLogix
