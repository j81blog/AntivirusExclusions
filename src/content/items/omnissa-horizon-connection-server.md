---
vendor: omnissa
title: Omnissa Horizon Connection Server
order: 6
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes:
  - kind: note
    text: These exclusions also apply to replica servers.
  - kind: note
    text: Paths are for fresh installs of the Omnissa-branded releases. In-place upgrades from older versions keep the VMware folder names.
exclusions:
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\podDirSvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\securitygateway.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_ConnectionServer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_crlservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_dbconfigservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_dctservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_MessageBusService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_scripthost.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_tomcatservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\ws_tunnelservice.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Horizon\Server\bin\wsnm.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\VMware\VMware View\Server\appblastgateway\nssm.exe'
    type: Process
    description: ''
    justification: ''
    condition: Security Server (removed in Horizon 8)
    status: legacy
  - path: '%ProgramFiles%\VMware\VMware View\Server\bin\SecurityGateway.exe'
    type: Process
    description: ''
    justification: ''
    condition: Security Server (removed in Horizon 8)
    status: legacy
  - path: '%ProgramFiles%\VMware\VMware View\Server\bin\ws_SecurityServer.exe'
    type: Process
    description: ''
    justification: ''
    condition: Security Server (removed in Horizon 8)
    status: legacy
  - path: '%ProgramFiles%\VMware\VMware View\Server\bin\ws_TunnelService.exe'
    type: Process
    description: ''
    justification: ''
    condition: Security Server (removed in Horizon 8)
    status: legacy
  - path: '%ProgramFiles%\VMware\VMware View\Server\bin\wsnm.exe'
    type: Process
    description: ''
    justification: ''
    condition: Security Server (removed in Horizon 8)
    status: legacy
tags: []
---

Av exclusions for Omnissa Horizon Connection Server
