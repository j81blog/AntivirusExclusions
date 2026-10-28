---
vendor: microsoft
title: Microsoft Windows Server Failover Clustering
order: 21
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
  - path: '%SystemRoot%\Cluster'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: <Cluster service account profile>\Local Settings\Temp
    type: Folder
    description: Temp folder of the Cluster service account
    justification: For example \cliusr\Local Settings\Temp.
    condition: ''
    status: current
  - path: '%SystemRoot%\Cluster\clussvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
  - path: '%SystemRoot%\Cluster\rhs.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
tags: []
---

Av exclusions for Microsoft Windows Server Failover Clustering
