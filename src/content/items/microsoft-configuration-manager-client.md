---
vendor: microsoft
title: Microsoft Configuration Manager Client
order: 3
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
  - path: '%ProgramFiles%\Microsoft Policy Platform\authorityDb\*.sdf'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\ServiceData'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\ScriptStore'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\Logs'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\temp'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCMCache'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCMSetup'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\Setup\Scripts'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\SMSTSPostUpgrade'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\Ccmexec.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\Ccmrepair.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\ScClient.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\CcmAADBroker.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCM\RemCtrl\CmRcService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCMSetup\Ccmsetup.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\CCMSetup\autoupgrade\Ccmsetup\*.exe'
    type: Process
    description: ''
    justification: From version 1910 the file name is Ccmsetup.<Packageid>.<PackageVersion>.exe.
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Configuration Manager Client
