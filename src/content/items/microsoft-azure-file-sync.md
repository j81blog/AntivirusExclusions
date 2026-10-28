---
vendor: microsoft
title: Microsoft Azure File Sync Agent
order: 2
lastReviewed: 2026-10-28
related: []
sources:
  - label: 'Troubleshoot Azure File Sync cloud tiering: process exclusions'
    url: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - label: 'Plan an Azure File Sync deployment: antivirus'
    url: https://learn.microsoft.com/en-us/azure/storage/file-sync/file-sync-planning#antivirus
notes:
  - kind: note
    text: Configure the antivirus to skip files with the FILE_ATTRIBUTE_RECALL_ON_DATA_ACCESS attribute (tiered files). Otherwise scans recall them from Azure and cause egress charges.
exclusions:
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\AfsAutoUpdater.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\FileSyncSvc.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\MAAgent\MonAgentLauncher.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\MAAgent\MonAgentHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\MAAgent\MonAgentManager.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\MAAgent\MonAgentCore.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
  - path: '%ProgramFiles%\Azure\StorageSyncAgent\MAAgent\Extensions\XSyncMonitoringExtension\AzureStorageSyncMonitor.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/files/file-sync/file-sync-troubleshoot-cloud-tiering#process-exclusions-for-azure-file-sync
tags: []
---

Azure File Sync agent on Windows file servers.
