---
vendor: microsoft
title: Microsoft Windows Server Failover Clustering
order: 21
lastReviewed: 2026-10-28
related:
  - microsoft-sql-server-database-engine
  - microsoft-windows-server-file-and-storage-services
  - microsoft-windows-server-hyper-v
sources:
  - label: Antivirus software that is not cluster-aware may cause problems with Cluster Services
    url: https://learn.microsoft.com/en-us/troubleshoot/windows-server/high-availability/not-cluster-aware-antivirus-software-cause-issue
notes:
  - kind: note
    text: Use cluster-aware antivirus software. Only disabling the antivirus is not enough, because its filter driver stays loaded.
exclusions:
  - path: <Quorum drive>:\Cluster
    type: Folder
    description: Cluster folder on the quorum disk
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\Cluster'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: <Cluster service account profile>\Local Settings\Temp
    type: Folder
    description: Temp folder of the Cluster service account
    justification: For example \cliusr\Local Settings\Temp.
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\Cluster\clussvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%SystemRoot%\Cluster\rhs.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Cluster nodes running the Failover Clustering feature.
