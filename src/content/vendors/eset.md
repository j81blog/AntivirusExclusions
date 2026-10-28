---
title: ESET
order: 4
sources:
  - label: recommended Settings Citrix Virtual Apps (SBC)
    url: https://support.eset.com/en/kb8062-recommended-settings-for-eset-server-security-installed-on-a-terminal-or-citrix-server
---

These are exclusions and guidelines specific for ESET products

ESET recommends these settings for ESET Server Security on terminal and Citrix servers (KB8062):
<ul>
<li>Disable the GUI, so the program window does not open at every logon (ESET PROTECT policy "Visibility - Silent mode", or <code>set ui ui gui-start-mode none</code> in ESET Shell)</li>
<li>Citrix servers only: in Real-time file system protection, turn off scanning of network drives, file open, file creation and removable media boot sector access</li>
<li>Citrix servers only: add the Citrix exclusions as performance exclusions. Add <code>\*</code> at the end of a folder path to exclude all of its contents</li>
</ul>
