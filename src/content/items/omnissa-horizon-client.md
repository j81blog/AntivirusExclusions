---
vendor: omnissa
title: Omnissa Horizon Client
order: 5
sources:
  - label: Antivirus executable exclusion list for Omnissa Horizon (2082045)
    url: https://kb.omnissa.com/s/article/2082045
notes:
  - kind: note
    text: Paths are for fresh installs of the Omnissa-branded releases. In-place upgrades from older versions keep the VMware folder names.
exclusions:
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-url-filtering-plugin-x86.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-url-filtering-plugin.dll'
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\VMware\VMware Horizon View Client'
    type: Folder
    description: ''
    justification: ''
    condition: Before the x64 client
    status: legacy
  - path: '%ProgramFiles(x86)%\VMware\VMware Horizon View Client\ClientService'
    type: Folder
    description: ''
    justification: ''
    condition: Before the x64 client
    status: legacy
  - path: '%ProgramFiles(x86)%\VMware\VMware Horizon View Client\DCT'
    type: Folder
    description: ''
    justification: ''
    condition: Before the x64 client
    status: legacy
  - path: '%ProgramFiles(x86)%\VMware\VMware Horizon View Client\x64'
    type: Folder
    description: ''
    justification: ''
    condition: Before the x64 client
    status: legacy
  - path: '%ProgramFiles(x86)%\VMware\VMware Horizon View Client\x64\cef'
    type: Folder
    description: ''
    justification: ''
    condition: Before the x64 client
    status: legacy
  - path: '%ProgramFiles%\Common Files\Omnissa\DeviceRedirectionCommon\ftnlping.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\DeviceRedirectionCommon\ftnlsv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\diagutil32.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\diagutil64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\ftscanmgrhv.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\ScannerRedirection\scan.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Client\hznsprrdpwks.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Common Files\Omnissa\SerialPortRedirection\Client\scan64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\cef\HTML5VideoPlayer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\ClientService\horizon_client_service.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\DCT\ws_diag.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-appstub.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-client-next.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-client.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-print-helper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-print-previewer.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-print-redir-client.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-print-redir-utility.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-url-protocol-launch-helper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\horizon-usbdloader.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles%\Omnissa\Omnissa Horizon Client\sdrclientworker.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Common Files\Omnissa\EUCUSB\DriverCache\vnetlib64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Common Files\Omnissa\EUCUSB\horizon-eucusbarbitrator64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%ProgramFiles(x86)%\Common Files\Omnissa\EUCUSB\vnetlib64.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Omnissa Horizon Client
