---
vendor: microsoft
title: Microsoft AppV v5
order: 1
sources:
  - label: App-V 5 and Security Software (Anti-Virus, Application Protection, and Software Inventory) Guidelines
    url: https://learn.microsoft.com/en-us/archive/technet-wiki/34034.app-v-5-and-security-software-anti-virus-application-protection-and-software-inventory-guidelines
notes: []
exclusions:
  - path: '%ProgramData%\App-V'
    type: Folder
    description: ''
    justification: If no persistent cache
  - path: <CustomDrive>:\<CustomPath>
    type: Folder
    description: ''
    justification: Only if persistent disk (Directory may be different)
tags: []
---

Av exclusions for Microsoft AppV v5
