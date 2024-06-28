[CmdletBinding()]
[OutputType()]
param (
    [string]$sshHost = "${env:SSHHost}",

    [int]$Port = 22,

    [string]$SSHUsername = "${env:SSHUsername}",

    [string]$SSHPassword = "${env:SSHPassword}",

    [string]$sshPath = "${env:SSHPath}",

    [string]$outputPath = "output"
)

$exitCode = 0

if (-Not ([String]::IsNullOrEmpty("${env:GITHUB_WORKSPACE}")) -and (Test-Path -Path "${env:GITHUB_WORKSPACE}" -ErrorAction SilentlyContinue)) {
    Write-Host "GITHUB_WORKSPACE..: ${env:GITHUB_WORKSPACE}"
    Write-Host "GITHUB_RUN_NUMBER.: ${env:GITHUB_RUN_NUMBER}"
    Write-Host "GITHUB Branch.....: ${env:GITHUB_REF_NAME}"
    $projectRoot = "${env:GITHUB_WORKSPACE}"
    $securePassword = ConvertTo-SecureString $SSHPassword -AsPlainText -Force
    $sshCredential = New-Object System.Management.Automation.PSCredential ($SSHUsername, $securePassword)
} else {
    Write-Host "Local run"
    $projectRoot = ( Resolve-Path -Path ( Split-Path -Parent -Path $PSScriptRoot ) ).Path
    if ($null -ne ${Env:SSHUsername} -and $null -ne ${Env:SSHPassword}) {
        Write-Host "Using SSH credentials from environment"
        $securePassword = ConvertTo-SecureString $SSHPassword -AsPlainText -Force
        $sshCredential = New-Object System.Management.Automation.PSCredential ($SSHUsername, $securePassword)
        Write-Host "Credentials set"
    } else {
        $sshCredential = Get-Credential -Message "Enter SSH credentials"
    }
    if ($null -ne ${Env:SSHHost}) {
        Write-Host "Using SSH Host from environment"
        $sshHost = ${Env:SSHHost}
    } else {
        $sshHost = Read-Host -Prompt "Enter SSH Host"
    }
    if ($null -ne ${Env:SSHPath}) {
        Write-Host "Using SSH Path from environment"
        $sshPath = ${Env:SSHPath}
    } else {
        $sshPath = Read-Host -Prompt "Enter SSH Path"
    }
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

$FilesPath = [System.IO.Path]::Combine($projectRoot, $outputPath)

Write-Host "Creating output directory and content"
& "$PSSCriptRoot\Set-AVEHTMLCode.ps1" -ProjectRoot $projectRoot -OutputPath $FilesPath
Write-Host "Output directory and content created"

if (Test-Path -Path $FilesPath) {
    $files = Get-ChildItem -Path $FilesPath
    Write-Host "$($files.Count) Files to copy, connecting to host"
    $sshSession = New-SFTPSession -ComputerName $sshHost -Port $Port -Credential $sshCredential -Force

    if ($sshSession.Connected -eq $true) {
        Write-Host "Connected to host, copying files"

        ForEach ($file in $files) {
            Write-Host "Uploading file: $file"
            Set-SFTPItem -Session $sshSession.SessionID -Destination $sshPath -Path $file.FullName -Force
        }
        Write-Host "Files copied"

        Write-Host "Disconnecting"
        if (Remove-SFTPSession -SFTPSession $sshSession) {
            Write-Host "Disconnected"
        } else {
            Write-Host "Failed to disconnect"
        }
    } else {
        Write-Host "Failed to connect to host"
        $exitCode = 1
    }
} else {
    Write-Host "No files to copy"
}

try {
    Write-Host "Trying to clean up files in $FilesPath"
    Remove-Item -Path $FilesPath -Recurse -Force
    Write-Host "Files cleaned up"
} catch {
    Write-Warning "Failed to clean up files, $($_.Exception.Message)"
}

Write-Host "Exiting [$exitCode]"
exit $exitCode