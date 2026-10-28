---
vendor: citrix
title: Citrix Virtual Apps and Desktops VDA (Linux)
order: 15
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes: []
exclusions:
  - path: /opt/Citrix/VDA/lib64/*
    type: File
    description: All files under this folder
    justification: ''
  - path: /opt/Citrix/VDA/sbin/*
    type: File
    description: All files under this folder
    justification: ''
  - path: /var/xdl/*.sh
    type: File
    description: Shell scripts under this folder
    justification: ''
  - path: /usr/lib/xorg/modules/input/ctxkeyboard_drv.so
    type: File
    description: ''
    justification: ''
  - path: /usr/lib/xorg/modules/input/ctxmouse_drv.so
    type: File
    description: ''
    justification: ''
  - path: /opt/Citrix/VDA/bin/*
    type: Process
    description: All executables under this folder
    justification: ''
  - path: /usr/lib/systemd/system/ctx*
    type: Process
    description: Services with the ctx prefix
    justification: ''
  - path: /usr/lib/systemd/system/ad_join.service
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix Virtual Apps and Desktops VDA (Linux)
