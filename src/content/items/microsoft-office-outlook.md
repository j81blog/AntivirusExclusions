---
vendor: microsoft
title: Microsoft Office Outlook
order: 6
sources: []
notes: []
exclusions:
  - path: '%appdata%\Microsoft\Outlook\*.srs'
    type: File
    description: ''
    justification: send/receive settings files
  - path: '%appdata%\Microsoft\Outlook\<profile name>.xml'
    type: File
    description: ''
    justification: Navigation pane settings file (Directory may be different)
  - path: '%appdata%\Microsoft\Outlook\outlprnt'
    type: File
    description: ''
    justification: Print styles
  - path: '%localappdata%\Microsoft\Outlook\Offline Address Books\<guid>\*.oab'
    type: File
    description: ''
    justification: Outlook address book files (Directory may be different)
  - path: '*.ost'
    type: File / Extension
    description: ''
    justification: If not configured, corruption can occur.
  - path: '*.pst'
    type: File / Extension
    description: ''
    justification: If not configured, corruption can occur.
tags: []
---

Av exclusions for Microsoft Office Outlook
