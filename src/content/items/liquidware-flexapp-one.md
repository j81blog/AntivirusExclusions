---
vendor: liquidware
title: Liquidware FlexApp One
order: 1
lastReviewed: 2026-10-28
related:
  - liquidware-profileunity-client
  - liquidware-profileunity-console
sources:
  - label: Exclusion list for Antivirus for FlexApp One files and directories
    url: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - label: Antivirus Exclusion List for ProfileUnity Program Files and Directories
    url: https://support.liquidware.com/hc/en-us/articles/44957009957901-Antivirus-Exclusion-List-for-ProfileUnity-Program-Files-and-Directories
notes:
  - kind: note
    text: Applies to FlexApp One 6.8.5 and later. The driver versions per release come from the ProfileUnity article.
exclusions:
  - path: '%SystemRoot%\System32\drivers\cbfilter20.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.5 and 6.8.6
    status: legacy
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\System32\drivers\cbfilter22.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.7 and 6.8.7 R2
    status: legacy
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\System32\drivers\cbfilter24.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.9.5 and 6.8.7 R2 hotfix releases
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\System32\drivers\cbregistry20.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.5 and 6.8.6
    status: legacy
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\System32\drivers\cbregistry22.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.8.7 and 6.8.7 R2
    status: legacy
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\System32\drivers\cbregistry24.sys'
    type: File
    description: Filter driver
    justification: ''
    condition: 6.9.5 and 6.8.7 R2 hotfix releases
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '*.vhdx'
    type: File / Extension
    description: FlexApp One shadow VHDX files
    justification: ''
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%ProgramData%\Liquidware\Flexapp\Shadows'
    type: Folder
    description: Shadow VHDX files
    justification: Exclude recursively.
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%ProgramFiles%\ProfileUnity\Flexapp'
    type: Folder
    description: ''
    justification: Exclude recursively.
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%SystemRoot%\Temp\ProfileUnity'
    type: Folder
    description: System temp folder (logs)
    justification: ''
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: '%TEMP%\ProfileUnity'
    type: Folder
    description: User temp folder (logs)
    justification: ''
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
  - path: <FlexApp One EXE package location>
    type: Folder
    description: Folder the FlexApp One package EXEs run from
    justification: Exclude recursively. Local when synced by client tools, or a file share with the register-from-network method.
    condition: ''
    status: current
    source: https://support.liquidware.com/hc/en-us/articles/13071453897229-Exclusion-list-for-Antivirus-for-FlexApp-One-files-and-directories
tags: []
---

FlexApp One application layering on endpoints.
