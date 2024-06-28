[CmdletBinding()]
[OutputType()]
param ()

$SSHHost = "${env:SSHHost}"
$Port = '22'
$SSHUsername = "${env:SSHUsername}"
$SSHPassword = "${env:SSHPassword}"
$SSHPath = "${env:SSHPath}"
$OutputPath = "output"


if (-Not ([String]::IsNullOrEmpty("${env:GITHUB_WORKSPACE}")) -and (Test-Path -Path "${env:GITHUB_WORKSPACE}" -ErrorAction SilentlyContinue)) {
    Write-Host "GITHUB_WORKSPACE..: ${env:GITHUB_WORKSPACE}"
    Write-Host "GITHUB_RUN_NUMBER.: ${env:GITHUB_RUN_NUMBER}"
    Write-Host "GITHUB Branch.....: ${env:GITHUB_REF_NAME}"
    $projectRoot = "${env:GITHUB_WORKSPACE}"
    $securePassword = ConvertTo-SecureString $SSHPassword -AsPlainText -Force
    $Credential = New-Object System.Management.Automation.PSCredential ($SSHUsername, $securePassword)
} else {
    Write-Host "Local run"
    $projectRoot = ( Resolve-Path -Path ( Split-Path -Parent -Path $PSScriptRoot ) ).Path
    $Credential = Get-Credential -Message "Enter SSH credentials"
    $SSHHost = Read-Host -Prompt "Enter SSH Host"
    $SSHPath = Read-Host -Prompt "Enter SSH Path"
}

Write-Host "Project root: $projectRoot"
Write-Host "Checking if Posh-SSH module is installed"
if (Get-Module -Name Posh-SSH -ListAvailable) {
    Write-Host "Posh-SSH module is already installed"
} else {
    Install-Module -Name Posh-SSH -Force -AllowClobber
}
Import-Module Posh-SSH

if (Get-Module -Name Posh-SSH) {
    Write-Host "Posh-SSH module is imported"
} else {
    Import-Module -Name Posh-SSH
}

$FilesPath = [System.IO.Path]::Combine($projectRoot, $OutputPath)

Write-Host "Connecting to host"
$SSHSession = New-SFTPSession -ComputerName $SSHHost -Port $Port -Credential $Credential

if ($SSHSession.Connected -eq $true) {
    Write-Host "Connected to host, copying files"
    $files = Get-ChildItem -Path $FilesPath

    ForEach ($file in $files) {
        Write-Host "Uploading file: $file"
        Set-SFTPItem -Session $SSHSession.SessionID -Destination $SSHPath -Path $file.FullName -Force
    }
    Write-Host "Files copied"

    Write-Host "Disconnecting"
    if (Remove-SFTPSession -SFTPSession $SSHSession) {
        Write-Host "Disconnected"
    } else {
        Write-Host "Failed to disconnect"

} else {
    Write-Host "Failed to connect to host"
    Exit 1
}