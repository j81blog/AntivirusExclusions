---
vendor: liquidware
title: Liquidware ProfileUnity Client
order: 2
lastReviewed: 2026-10-28
related:
  - liquidware-flexapp-one
  - liquidware-profileunity-console
sources:
  - label: Antivirus Exclusion List for ProfileUnity Program Files and Directories
    url: https://support.liquidware.com/hc/en-us/articles/44957009957901-Antivirus-Exclusion-List-for-ProfileUnity-Program-Files-and-Directories
notes:
  - kind: note
    text: Applies to ProfileUnity 6.8.5 and later. Start with the program folder and filter drivers; that alone fixes most logon problems.
  - kind: note
    text: Filter driver names can change after a hotfix. Check the active drivers in C:\Windows\System32\drivers\cb*.sys.
  - kind: note
    text: Do not reuse the old Liquidware Defender example that excluded C:\Program Files\*, C:\Windows\System32\* and SysWOW64. It turns off scanning for most of the operating system.
exclusions:
  - path: '%SystemRoot%\System32\drivers\cbfilter20.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.5 and 6.8.6
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbfilter22.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.7 and 6.8.7 R2
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbfilter24.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.9.5 and 6.8.7 R2 hotfix releases
    status: current
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbprocess20.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.5 and 6.8.6
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbprocess22.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.7 and 6.8.7 R2
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbprocess24.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.9.5 and 6.8.7 R2 hotfix releases
    status: current
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbregistry20.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.5 and 6.8.6
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbregistry22.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.7 and 6.8.7 R2
    status: legacy
    source: ''
  - path: '%SystemRoot%\System32\drivers\cbregistry24.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.9.5 and 6.8.7 R2 hotfix releases
    status: current
    source: ''
  - path: \\profileserver\profiles\%username%\Portability
    type: File / Folder
    description: User home portability
    justification: Exclude recursively, including *.7z, *.lou, *.lbr, *.vhd, *.vhdx and *.manifest files.
    condition: ''
    status: current
    source: ''
  - path: \\server\share\DIA_APPS
    type: File / Folder
    description: DIA application share
    justification: Exclude the *.vhd and *.vhdx files.
    condition: ''
    status: current
    source: ''
  - path: '%ProgramData%\Liquidware'
    type: Folder
    description: System temp folder
    justification: Exclude recursively.
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\ProfileUnity'
    type: Folder
    description: Client installation folder
    justification: Exclude recursively.
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\Temp\ProfileUnity'
    type: Folder
    description: System temp folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%TEMP%\ProfileUnity'
    type: Folder
    description: User temp folder
    justification: Can be redirected to a fixed path such as C:\PUTemp with the ProfileUnity ADM/ADMX template.
    condition: ''
    status: current
    source: ''
  - path: '%UserProfile%\ProfileUnity'
    type: Folder
    description: User local portability manifest
    justification: Exclude recursively.
    condition: ''
    status: current
    source: ''
  - path: C:\DiskShadowData
    type: Folder
    description: FlexApp block-level cache
    justification: ''
    condition: SMB cache mode or cloud
    status: current
    source: ''
  - path: C:\F
    type: Folder
    description: FlexApp package mount folder
    justification: Exclude recursively.
    condition: Version 6.9.5
    status: current
    source: ''
  - path: C:\FA1
    type: Folder
    description: FlexApp One package, difference disk and mount point
    justification: Exclude recursively.
    condition: Version 6.9.5
    status: current
    source: ''
  - path: C:\FADIA-T
    type: Folder
    description: FlexApp mount folder
    justification: Exclude recursively.
    condition: Version 6.8.7 and earlier
    status: legacy
    source: ''
  - path: C:\ProfileDiskMounts
    type: Folder
    description: ProfileDisk mount folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: C:\Users\ProfileDisk
    type: Folder
    description: ProfileDisk mount folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\System32\vds.exe'
    type: Process
    description: Virtual Disk service
    justification: Add to the Defender trusted programs list.
    condition: Microsoft Defender with Citrix VDA 7.1.4 and later
    status: current
    source: ''
  - path: \\<domainname>\netlogon\profileunity\7z\x64\7z.exe
    type: Process
    description: Deployment share
    justification: Default deployment path; check Administration > ProfileUnity Tools > Deployment Path.
    condition: ''
    status: current
    source: ''
  - path: \\<domainname>\netlogon\profileunity\7z\x86\7z.exe
    type: Process
    description: Deployment share
    justification: Default deployment path; check Administration > ProfileUnity Tools > Deployment Path.
    condition: ''
    status: current
    source: ''
  - path: \\<domainname>\netlogon\profileunity\LwL.ProfileUnity.Client.Logoff.exe
    type: Process
    description: Deployment share
    justification: Default deployment path; check Administration > ProfileUnity Tools > Deployment Path.
    condition: ''
    status: current
    source: ''
  - path: \\<domainname>\netlogon\profileunity\LwL.ProfileUnity.Client.Startup.exe
    type: Process
    description: Deployment share
    justification: Default deployment path; check Administration > ProfileUnity Tools > Deployment Path.
    condition: ''
    status: current
    source: ''
  - path: \\<domainname>\netlogon\profileunity\LwL.ProfileUnity.Client.Startup.Update.exe
    type: Process
    description: Deployment share
    justification: Default deployment path; check Administration > ProfileUnity Tools > Deployment Path.
    condition: ''
    status: current
    source: ''
tags: []
---

ProfileUnity client on every managed desktop or session host.
