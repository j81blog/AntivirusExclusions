---
vendor: citrix
title: Citrix StoreFront
order: 9
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
  - path: '%ProgramFiles%\Citrix\Receiver StoreFront\Services\SubscriptionsStoreService\Citrix.DeliveryServices.SubscriptionsStore.ServiceHost.exe'
    type: Process
    description: ''
    justification: ''
  - path: '%ProgramFiles%\Citrix\Receiver StoreFront\Services\CredentialWallet\Citrix.DeliveryServices.CredentialWallet.ServiceHost.exe'
    type: Process
    description: ''
    justification: ''
tags: []
---

Av exclusions for Citrix StoreFront
