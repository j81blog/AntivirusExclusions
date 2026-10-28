---
vendor: microsoft
title: Microsoft Office Outlook
order: 9
lastReviewed: 2026-10-28
related:
  - microsoft-fslogix
  - microsoft-office-onedrive
sources:
  - label: Outlook antivirus planning considerations
    url: https://learn.microsoft.com/en-us/microsoft-365-apps/outlook/configuration/plan-outlook-deployment#outlook-security-considerations
notes: []
exclusions:
  - path: '%appdata%\Microsoft\Outlook\*.srs'
    type: File
    description: ''
    justification: send/receive settings files
    condition: ''
    status: current
    source: ''
  - path: '%appdata%\Microsoft\Outlook\<profile name>.xml'
    type: File
    description: ''
    justification: Navigation pane settings file (Directory may be different)
    condition: ''
    status: current
    source: ''
  - path: '%appdata%\Microsoft\Outlook\outlprnt'
    type: File
    description: ''
    justification: Print styles
    condition: ''
    status: current
    source: ''
  - path: '%localappdata%\Microsoft\Outlook\Offline Address Books\<guid>\*.oab'
    type: File
    description: ''
    justification: Outlook address book files (Directory may be different)
    condition: ''
    status: current
    source: ''
  - path: '*.ost'
    type: File / Extension
    description: ''
    justification: If not configured, corruption can occur.
    condition: ''
    status: current
    source: ''
  - path: '*.pst'
    type: File / Extension
    description: ''
    justification: If not configured, corruption can occur.
    condition: ''
    status: current
    source: ''
tags: []
---

Outlook data files on desktops and session hosts.
