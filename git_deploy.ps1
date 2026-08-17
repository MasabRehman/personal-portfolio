$git = 'C:\Program Files\Git\cmd\git.exe'
$gh = 'C:\Program Files\GitHub CLI\gh.exe'

Write-Host "Configuring Git..."
& $git config --global user.name "Masab Rehman"
& $git config --global user.email "masabbhatti567@gmail.com"

Write-Host "Initializing repository..."
& $git init -b main

Write-Host "Staging files..."
& $git add .

Write-Host "Committing changes..."
& $git commit -m "Personal Portfolio for Masab Rehman"

Write-Host "Creating GitHub repository and pushing..."
& $gh repo create personal-portfolio --public --source=. --remote=origin --push
