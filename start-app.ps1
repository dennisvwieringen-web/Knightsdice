$port = 4173
$url = "http://localhost:$port"
$node = "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

Write-Host "Knight's Dice start op $url"
Write-Host "Laat dit venster open zolang je speelt."
Write-Host "Open daarna de URL in Chrome/Edge en kies Installeren."

& $node ".\start-server.js"
