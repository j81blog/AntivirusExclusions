---
vendor: microsoft
title: Microsoft Windows Server File and Storage Services
order: 22
lastReviewed: 2026-10-28
related:
  - microsoft-windows-server-failover-clustering
sources:
  - label: Microsoft Defender Antivirus exclusions on Windows Server
    url: https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-exclusions-windows-server#file-and-storage-services-exclusions
notes:
  - kind: note
    text: Microsoft Defender Antivirus adds these exclusions automatically on Windows Server 2016 and later when the role is installed (default paths only). Add them manually for custom paths, Windows Server 2012 R2 or other antivirus products. These exclusions do not cover the Clustering role.
exclusions:
  - path: '%SystemDrive%\ClusterStorage'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%clusterserviceaccount%\Local Settings\Temp'
    type: Folder
    description: Temp folder of the cluster service account
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemDrive%\mscs'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Windows Server File and Storage Services role.
