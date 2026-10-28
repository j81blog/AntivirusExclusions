---
vendor: ivanti
title: Ivanti User Workspace Manager Insight
order: 8
lastReviewed: 2026-10-28
related:
  - ivanti-user-workspace-manager-application-control
  - ivanti-user-workspace-manager-environment-manager
  - ivanti-user-workspace-manager-file-director
  - ivanti-user-workspace-manager-management-center-communications-agent
  - ivanti-user-workspace-manager-performance-manager
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
exclusions:
  - path: '%ProgramFiles%\AppSense\Insight\InsightService.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

UWM Insight service on endpoints.
