---
title: Trend Micro
order: 5
sources:
  - label: Trend Micro Guidelines
    url: https://success.trendmicro.com/en-US/solution/KA-0004049
  - label: 'Trend Micro: Best practices for VDI in Apex One / OfficeScan'
    url: https://success.trendmicro.com/en-US/solution/KA-0001486
---

These are exclusions and guidelines specific for Trend Micro products

Trend Micro recommends these settings for Apex One / OfficeScan in VDI environments (KA-0001486):
<ul>
<li>Use the Virtual Desktop Support plug-in, so clients do not scan or update at the same time</li>
<li>Create golden images after installing Virtual Desktop Support on the Apex One server</li>
<li>Disable the Firewall Service and Sample Submission on the agent</li>
<li>Use Smart Scan as the scan method</li>
<li>Disable the digital signature cache and enable the on-demand cache</li>
<li>Disable Scheduled Scan when Virtual Desktop Support is not used</li>
<li>For non-persistent desktops, recreate the golden image with current pattern files within 14 days</li>
</ul>
