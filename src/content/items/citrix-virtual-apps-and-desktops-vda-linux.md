---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (Linux)
order: 16
lastReviewed: 2026-10-28
related: []
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: /opt/Citrix/VDA/lib64/*
    type: File
    description: All files under this folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /opt/Citrix/VDA/sbin/*
    type: File
    description: All files under this folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /var/xdl/*.sh
    type: File
    description: Shell scripts under this folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /usr/lib/xorg/modules/input/ctxkeyboard_drv.so
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /usr/lib/xorg/modules/input/ctxmouse_drv.so
    type: File
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /opt/Citrix/VDA/bin/*
    type: Process
    description: All executables under this folder
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /usr/lib/systemd/system/ctx*
    type: Process
    description: Services with the ctx prefix
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: /usr/lib/systemd/system/ad_join.service
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Linux Virtual Delivery Agent.
