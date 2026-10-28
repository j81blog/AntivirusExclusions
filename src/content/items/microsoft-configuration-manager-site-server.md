---
vendor: microsoft
title: Microsoft Configuration Manager Site Server and Site Systems
order: 4
lastReviewed: 2026-10-28
related:
  - microsoft-configuration-manager-client
  - microsoft-sql-server-database-engine
sources:
  - label: Recommended antivirus exclusions for Configuration Manager
    url: https://learn.microsoft.com/en-us/troubleshoot/mem/configmgr/endpoint-protection/recommended-antivirus-exclusions
notes:
  - kind: note
    text: For the site database server, also use the SQL Server items.
  - kind: note
    text: On management points, set antivirus to scan only incoming files (do not scan outgoing files).
exclusions:
  - path: '%ProgramFiles%\Microsoft Configuration Manager\Inboxes'
    type: Folder
    description: ''
    justification: ''
    condition: Site server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\Logs'
    type: Folder
    description: ''
    justification: ''
    condition: Site server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\EasySetupPayload'
    type: Folder
    description: ''
    justification: ''
    condition: Site server
    status: current
    source: ''
  - path: <ContentLib_drive>\SCCMContentLib
    type: Folder
    description: ''
    justification: Not on the site server when a remote content library is used.
    condition: Site server and distribution point
    status: current
    source: ''
  - path: '%ProgramFiles%\SMS_CCM\ServiceData'
    type: Folder
    description: ''
    justification: ''
    condition: Management point
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\MP\OUTBOXES'
    type: Folder
    description: ''
    justification: Or <Installation drive>\SMS\MP\OUTBOXES.
    condition: Management point
    status: current
    source: ''
  - path: '%ProgramFiles%\SMS_CCM\PolReqStaging\POL00000.pol'
    type: File
    description: ''
    justification: ''
    condition: Management point
    status: current
    source: ''
  - path: '%SystemRoot%\CCM\ServiceData'
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: <ContentLib_drive>\SMS_DP$
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: <ContentLib_drive>\SMSPKG<Drive_Letter>$
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: <ContentLib_drive>\SMSPKG
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: <ContentLib_drive>\SMSPKGSIG
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: <ContentLib_drive>\SMSSIG$
    type: Folder
    description: ''
    justification: ''
    condition: Distribution point
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\bin\x64\Smsexec.exe'
    type: Process
    description: ''
    justification: ''
    condition: Site server and site systems
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\bin\x64\Sitecomp.exe'
    type: Process
    description: ''
    justification: ''
    condition: Site server and site systems
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\bin\x64\Smswriter.exe'
    type: Process
    description: ''
    justification: ''
    condition: Site server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\bin\x64\Cmupdate.exe'
    type: Process
    description: ''
    justification: ''
    condition: Site server
    status: current
    source: ''
  - path: '%ProgramFiles%\Microsoft Configuration Manager\bin\x64\Smssqlbkup.exe'
    type: Process
    description: ''
    justification: ''
    condition: Site database server
    status: current
    source: ''
  - path: '%ProgramFiles%\SMS_CCM\Ccmexec.exe'
    type: Process
    description: ''
    justification: ''
    condition: Management point
    status: current
    source: ''
tags: []
---

Configuration Manager site servers, management points and distribution points.
