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

Write-Host "Project root......: $projectRoot"
Write-Host "Checking if Posh-SSH module is installed"
if (Get-Module -Name Posh-SSH -ListAvailable) {
    Write-Host "Posh-SSH module is already installed"
} else {
    Write-Host "Installing Posh-SSH module"
    Install-Module -Name Posh-SSH -Force -AllowClobber
    Write-Host "Posh-SSH module installed"
}
Import-Module Posh-SSH

if (Get-Module -Name Posh-SSH) {
    Write-Host "Posh-SSH module is already imported"
} else {
    Write-Host "Importing Posh-SSH module"
    Import-Module -Name Posh-SSH
}

$FilesPath = [System.IO.Path]::Combine($projectRoot, $OutputPath)

Write-Host "Creating output directory and content"
& "$PSSCriptRoot\Set-AVEHTMLCode.ps1" -ProjectRoot $projectRoot -OutputPath $FilesPath
Write-Host "Output directory and content created"

if (Test-Path -Path $FilesPath) {
    $files = Get-ChildItem -Path $FilesPath
    Write-Host "$($files.Count) Files to copy, connecting to host"
    $SSHSession = New-SFTPSession -ComputerName $SSHHost -Port $Port -Credential $Credential -Verbose

    if ($SSHSession.Connected -eq $true) {
        Write-Host "Connected to host, copying files"

        ForEach ($file in $files) {
            Write-Host "Uploading file: $file"
            Set-SFTPItem -Session $SSHSession.SessionID -Destination $SSHPath -Path $file.FullName -Force
        }
        Write-Host "Files copied"
        try {
            Write-Host "Trying to clean up files in $FilesPath"
            Remove-Item -Path $FilesPath -Recurse -Force
            Write-Host "Files cleaned up"
        } catch {
            Write-Warning "Failed to clean up files, $($_.Exception.Message)"
        }

        Write-Host "Disconnecting"
        if (Remove-SFTPSession -SFTPSession $SSHSession) {
            Write-Host "Disconnected"
        } else {
            Write-Host "Failed to disconnect"
        }
    } else {
        Write-Host "Failed to connect to host"
        Exit 1
    }
} else {
    Write-Host "No files to copy"
    Exit 0
}
