---
vendor: omnissa
title: Omnissa Horizon Agent
order: 4
lastReviewed: 2026-10-28
related:
  - omnissa-app-volumes-agent
  - omnissa-dynamic-environment-manager-agent
  - omnissa-horizon-client
  - omnissa-horizon-connection-server
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes:
  - kind: note
    text: With nested clients (a Horizon Client inside a virtual desktop), also add the Horizon Client exclusions.
  - kind: note
    text: Paths are for fresh installs of the Omnissa-branded releases. In-place upgrades from older versions keep the VMware folder names.
exclusions:
  - path: '%ProgramFiles%\Common Files\Omnissa\Remote Experience\x64\usbRedirectionServer.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\bin\tsdrvdisvc.dll'
    type: File
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\tsdrvdisvc.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\UrlRedirection\horizon-url-filtering-plugin-x64.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\UrlRedirection\horizon-url-filtering-plugin.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\UrlRedirection\horizon-url-protocol-intercept.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\UrlRedirection\x64\horizon-url-protocol-intercept.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\DeviceRedirectionCommon\ftnlping.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\DeviceRedirectionCommon\ftnlsv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\diagutil32.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\diagutil64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\ftscansvchv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\scanmd.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\scanner.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Agent\hznsprrdctl.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Agent\hznsprrdp.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Agent\hznsprrdpsrv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Agent\hznsprrdpUI.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\Omnissa\Teradici PCoIP Server\x64\pcoip_server_win32.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Common Files\VMware\Teradici PCoIP Server\pcoip_server_win32.exe'
    type: Process
    description: PCoIP
    justification: ''
    condition: PCoIP software before 2106
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Common Files\VMware\VMware-svi-ga.exe'
    type: Process
    description: Linked clone agent
    justification: ''
    condition: Horizon 7
    status: legacy
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\bin\SecurityGateway.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\bin\ws_scripthost.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\bin\wsnm.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\bin\wsnm_jms.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\Blast\VMBlastS.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon Agents\Horizon Agent\Blast\VMBlastW.exe'
    type: Process
    description: ''
    justification: ''
    condition: Horizon Cloud (Horizon Agent installer default path)
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\UrlRedirection\horizon-url-protocol-launch-helper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\ws_scripthost.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\wsnm_jms.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\bin\wssm.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\Blast\VMBlastS.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\Blast\VMBlastW.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\DCT\hzdct.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Agent\DCT\ws_diag.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Omnissa\Horizon\Instant Clone Agent\omnissa-ic-ga.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\VMware\VMware View\Agent\bin\VMWVvpsvc.exe'
    type: Process
    description: VMware Persona
    justification: ''
    condition: Horizon 7
    status: legacy
    source: ''
  - path: '%ProgramFiles(x86)%\Common Files\Omnissa\DeviceRedirectionCommon\ftnlping.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Horizon Agent on virtual desktops and RDS hosts.
