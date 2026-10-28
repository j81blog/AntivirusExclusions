---
vendor: controlup
title: ControlUp Synthetic Monitoring
order: 5
sources:
  - label: Anti-Virus Exclusions for ControlUp Products
    url: https://support.controlup.com/docs/av-exclusions-for-controlup
notes: []
exclusions:
  - path: '%ProgramFiles%\Scoutbees Custom Hive'
    type: Folder
    description: ''
    justification: ''
    condition: Only when Synthetic Monitoring (formerly Scoutbees) is used
    status: current
tags: []
---

Av exclusions for ControlUp Synthetic Monitoring
