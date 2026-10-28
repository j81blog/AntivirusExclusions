---
vendor: microsoft
title: Microsoft Configuration Manager Client
order: 3
lastReviewed: 2026-10-28
related:
  - microsoft-configuration-manager-site-server
sources:
  - label: Recommended antivirus exclusions for Configuration Manager
    url: https://learn.microsoft.com/en-us/troubleshoot/mem/configmgr/endpoint-protection/recommended-antivirus-exclusions
notes:
  - kind: note
    text: These are real-time protection exclusions. Process exclusions are only needed when your antivirus treats the Configuration Manager executables as high risk.
exclusions:
  - path: '%SystemRoot%\CCM\*.sdf'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Policy Platform\authorityDb\*.sdf'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\ServiceData'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\ScriptStore'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\Logs'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\temp'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCMCache'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCMSetup'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\Setup\Scripts'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\SMSTSPostUpgrade'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\Ccmexec.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\Ccmrepair.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\ScClient.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\CcmAADBroker.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\RemCtrl\CmRcService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCMSetup\Ccmsetup.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\CCMSetup\autoupgrade\Ccmsetup\*.exe'
    type: Process
    description: ''
    justification: From version 1910 the file name is Ccmsetup.<Packageid>.<PackageVersion>.exe.
    condition: ''
    status: current
    source: ''
tags: []
---

Configuration Manager client on managed machines, including VDI images.
