---
vendor: citrix
title: Citrix StoreFront
order: 11
lastReviewed: 2026-10-28
related:
  - microsoft-internet-information-services
sources:
  - label: 'Tech Paper: Endpoint Security, Antivirus, and Antimalware Best Practices'
    url: https://community.citrix.com/tech-zone/build/tech-papers/antivirus-best-practices/
notes:
  - kind: note
    text: Also configure the IIS Exclusions
exclusions:
  - path: '%SystemRoot%\ServiceProfiles\NetworkService\AppData\Roaming\Citrix\SubscriptionsStore\**\PersistentDictionary.edb'
    type: File
    description: ''
    justification: Path can be different per server
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Receiver StoreFront\Services\CredentialWallet\Citrix.DeliveryServices.CredentialWallet.ServiceHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
  - path: '%ProgramFiles%\Citrix\Receiver StoreFront\Services\SubscriptionsStoreService\Citrix.DeliveryServices.SubscriptionsStore.ServiceHost.exe'
    type: Process
    description: ''
    justification: ''
    condition: ''
    status: current
    source: ''
tags: []
---

Store servers that present apps and desktops to users.
