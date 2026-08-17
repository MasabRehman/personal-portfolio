$env:PATH = "C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;$env:PATH"
$git = "C:\Program Files\Git\cmd\git.exe"

Set-Location -Path "d:\portfolio"
& $git add -A
& $git commit -m "Fix Vercel build: disable CI failure on CSS warning"
& $git push origin main
