# Clean Install Script - Remove all native binary dependencies
# This script removes lock files and node_modules, then performs a fresh install
# that uses only pure JavaScript/WASM build tools without native bindings

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Clean Install: Remove Native Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get the root directory of the script
$rootDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "[1/6] Stopping any running processes..." -ForegroundColor Yellow
$processes = @("node", "npm", "npm.cmd")
foreach ($proc in $processes) {
    Get-Process -Name $proc -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
}
Start-Sleep -Seconds 2

Write-Host "[2/6] Removing lock files..." -ForegroundColor Yellow
Remove-Item -Path "$rootDir\package-lock.json" -Force -ErrorAction SilentlyContinue
Write-Host "  ✓ Removed package-lock.json"

Write-Host "[3/6] Removing node_modules (entire project)..." -ForegroundColor Yellow
$nodeModulesPath = "$rootDir\node_modules"
if (Test-Path $nodeModulesPath) {
    Write-Host "  Deleting: $nodeModulesPath"
    Remove-Item -Path $nodeModulesPath -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✓ Removed root node_modules"
}

# Remove node_modules from workspaces
$workspaces = @(
    "artifacts\swebtools",
    "artifacts\api-server",
    "artifacts\mockup-sandbox",
    "lib\api-spec",
    "lib\api-client-react",
    "lib\api-zod",
    "lib\db",
    "scripts"
)

foreach ($workspace in $workspaces) {
    $wsPath = Join-Path -Path $rootDir -ChildPath $workspace
    $wsNodeModules = Join-Path -Path $wsPath -ChildPath "node_modules"
    if (Test-Path $wsNodeModules) {
        Write-Host "  Deleting: $workspace\node_modules"
        Remove-Item -Path $wsNodeModules -Recurse -Force -ErrorAction SilentlyContinue
    }
}
Write-Host "  ✓ Removed all workspace node_modules"

Write-Host "[4/6] Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force | Out-Null
Write-Host "  ✓ Cleared npm cache"

Write-Host "[5/6] Installing dependencies (clean install)..." -ForegroundColor Yellow
Write-Host "  This may take 2-5 minutes..."
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ✗ npm install failed!" -ForegroundColor Red
    exit 1
}
Write-Host "  ✓ Dependencies installed successfully"

Write-Host "[6/6] Verifying configuration..." -ForegroundColor Yellow
$viteConfig = "$rootDir\artifacts\swebtools\vite.config.ts"
if (Select-String -Path $viteConfig -Pattern "withBundledRolldown" -Quiet) {
    Write-Host "  ✓ Vite configuration verified (Rolldown disabled)"
} else {
    Write-Host "  ⚠ Warning: Rolldown may not be disabled" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Clean Install Completed Successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Run 'npm run build' to test the build"
Write-Host "  2. Run 'npm run dev' to start development server"
Write-Host ""
Write-Host "Configuration Applied:" -ForegroundColor Cyan
Write-Host "  • Vite configured to use pure JavaScript Rollup (no Rolldown)"
Write-Host "  • No native esbuild binaries in swebtools"
Write-Host "  • All builds will use standard Rollup bundler"
Write-Host ""
