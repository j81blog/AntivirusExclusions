---
vendor: liquidware
title: Liquidware ProfileUnity Console
order: 3
lastReviewed: 2026-10-28
related:
  - liquidware-flexapp-one
  - liquidware-profileunity-client
sources:
  - label: Antivirus Exclusion List for ProfileUnity Program Files and Directories
    url: https://support.liquidware.com/hc/en-us/articles/44957009957901-Antivirus-Exclusion-List-for-ProfileUnity-Program-Files-and-Directories
notes:
  - kind: note
    text: Only needed when antivirus runs on the ProfileUnity console server itself.
exclusions:
  - path: '%ProgramFiles%\MongoDB'
    type: Folder
    description: ''
    justification: Exclude recursively.
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles(x86)%\Liquidware Labs\ProfileUnity'
    type: Folder
    description: ''
    justification: Exclude recursively.
    condition: ''
    status: current
    source: ''
tags: []
---

ProfileUnity management console server.
