---
vendor: ivanti
title: Ivanti User Workspace Manager File Director
order: 7
lastReviewed: 2026-10-28
related:
  - ivanti-user-workspace-manager-application-control
  - ivanti-user-workspace-manager-environment-manager
  - ivanti-user-workspace-manager-insight
  - ivanti-user-workspace-manager-management-center-communications-agent
  - ivanti-user-workspace-manager-performance-manager
sources:
  - label: Recommended Anti-Virus and User Workspace Manager (AppSense) Exclusions
    url: https://hub.ivanti.com/s/article/Recommended-Anti-Virus-and-AppSense-Exclusions?language=en_US
notes:
  - kind: note
    text: 'Ivanti prefers, in this order: adding the UWM signing certificate as a trusted vendor, the full executable path, or the executable name only.'
  - kind: note
    text: Do not exclude the File Director folder or other File Director managed locations. It is the offline cache of user data and needs the same scanning as the rest of the user profile.
exclusions:
  - path: '%ProgramFiles%\AppSense\DataNow\Agent\DataNow_Service.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

UWM File Director agent on endpoints.
