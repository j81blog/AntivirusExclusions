---
vendor: microsoft
title: Microsoft Windows Server Hyper-V
order: 24
lastReviewed: 2026-10-28
related:
  - microsoft-windows-server-failover-clustering
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - label: Recommended antivirus exclusions for Hyper-V hosts
    url: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
notes:
  - kind: note
    text: Also exclude custom VM configuration, virtual hard disk and Hyper-V Replica folders, and SMB 3.0 shares that hold VM files. The memory state (*.bin) and configuration (*.xml) files only need exclusion inside VM folders.
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products.
exclusions:
  - path: '*.avhd'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.avhdx'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.iso'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.rct'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vhd'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vhdx'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vmcx'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vmrs'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vsv'
    type: File / Extension
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '*.vhds'
    type: File / Extension
    description: VHD Set file
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '*.vhdpmem'
    type: File / Extension
    description: Virtual PMEM VHD file
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '*.mrt'
    type: File / Extension
    description: Modified Region Table file
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '*.vmgs'
    type: File / Extension
    description: VM Guest State file
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '%ProgramData%\Microsoft\Windows\Hyper-V'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '%ProgramFiles%\Hyper-V'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '%SystemDrive%\ProgramData\Microsoft\Windows\Hyper-V\Snapshots'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '%Public%\Documents\Hyper-V\Virtual Hard Disks'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: C:\ClusterStorage
    type: Folder
    description: Cluster Shared Volumes
    justification: ''
    condition: Only when Cluster Shared Volumes are used
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '%SystemRoot%\System32\Vmms.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '%SystemRoot%\System32\Vmwp.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#hyper-v-exclusions
  - path: '%SystemRoot%\System32\Vmsp.exe'
    type: Process
    description: ''
    justification: ''
    condition: Windows Server 2016 and later
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
  - path: '%SystemRoot%\System32\Vmcompute.exe'
    type: Process
    description: ''
    justification: ''
    condition: Windows Server 2019 and later
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/windows-server/virtualization/antivirus-exclusions-for-hyper-v-hosts
tags: []
---

Hyper-V hosts and file servers that store virtual machine files.
