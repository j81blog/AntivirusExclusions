---
vendor: microsoft
title: Microsoft Intune Win32
order: 4
sources: []
notes:
  - kind: note
    text: On a 64- bit system, by default, the installation directory will exist in "%ProgramFiles(x86)%" instead of "%ProgramFiles%" on 32-bit systems.
exclusions:
  - path: '%ProgramFiles(x86)%\Microsoft Intune Management Extension\Content'
    type: Folder
    description: ''
    justification: ''
  - path: '%SystemRoot%\IMECache'
    type: Folder
    description: ''
    justification: ''
tags: []
---

Av exclusions for Microsoft Intune Win32
