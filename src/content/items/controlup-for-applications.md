---
vendor: controlup
title: ControlUp for Applications
order: 1
lastReviewed: 2026-10-28
related:
  - controlup-for-compliance
  - controlup-for-desktops
  - controlup-for-vdi
  - controlup-synthetic-monitoring
sources:
  - label: Anti-Virus Exclusions for ControlUp Products
    url: https://support.controlup.com/docs/av-exclusions-for-controlup
notes: []
exclusions:
  - path: '%ProgramData%\ControlUp\EdgeDX\Modules\appdx'
    type: Folder
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\ControlUp\Modules\appdx\AppDXhelper.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

ControlUp application monitoring module on endpoints.
