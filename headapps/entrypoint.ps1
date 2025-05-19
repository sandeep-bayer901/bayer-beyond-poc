try {
    npm install
    npm run start
}
catch {
    Write-Warning $Error[0]
    ping -t localhost
}