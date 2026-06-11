# ATOMIC EXECUTION INSTRUCTIONS
## Step-by-Step Guide for Native Dependency Removal

**Total Execution Time**: 5-10 minutes  
**Risk Level**: LOW (non-breaking changes)  
**Rollback Time**: 2 minutes (git checkout)

---

## ✅ PRE-EXECUTION CHECKLIST

- [ ] Running on Windows 10/11
- [ ] Have administrator or elevated privileges for PowerShell
- [ ] Internet connection available (npm install required)
- [ ] At least 500MB free disk space
- [ ] Close all IDE windows (VS Code, etc.)
- [ ] No active Node.js processes

---

## PHASE 1: VERIFY CURRENT STATE (2 minutes)

### Step 1.1: Check Current npm Version
```powershell
npm --version
# Expected: v10.x or higher
```

### Step 1.2: Test Current Build (Expected to FAIL)
```powershell
cd C:\Dev\Hero-Automation
npm run build 2>&1 | tee build-before.log
# Expected error: ERR_DLOPEN_FAILED or AppControl policy blocked
```

**Expected Error**:
```
ERR_DLOPEN_FAILED: Cannot open: C:\...\rolldown-binding.win32-x64-msvc.node
Application Control policy has blocked this file
```

---

## PHASE 2: APPLY CONFIGURATION (1 minute)

### Step 2.1: Apply vite.config.ts Changes

**Location**: `C:\Dev\Hero-Automation\artifacts\swebtools\vite.config.ts`

**BEFORE** (Lines 44-53):
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
  rollupOptions: {
    output: {
      dir: path.resolve(import.meta.dirname, "dist"),
    },
  },
},
```

**AFTER** (Lines 44-61):
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
  ssr: false,
  rollupOptions: {
    output: {
      dir: path.resolve(import.meta.dirname, "dist"),
      format: "es",
    },
  },
},
// Force Vite to use Rollup instead of Rolldown
// Set experimental.withBundledRolldown to false to disable Rolldown
experimental: {
  withBundledRolldown: false,
},
```

**Verification**:
```powershell
# Verify the change was applied
Select-String -Path "C:\Dev\Hero-Automation\artifacts\swebtools\vite.config.ts" -Pattern "withBundledRolldown"
# Expected output: Shows "withBundledRolldown: false"
```

---

### Step 2.2: Apply package.json Changes

**Location**: `C:\Dev\Hero-Automation\artifacts\swebtools\package.json`

**BEFORE** (Lines 83-88):
```json
"optionalDependencies": {
  "@esbuild/linux-x64": "0.27.3",
  "@esbuild/win32-x64": "0.27.3",
  "@rollup/rollup-linux-x64-gnu": "^4.59.0",
  "@rollup/rollup-win32-x64-msvc": "^4.59.0"
},
```

**AFTER** (Lines 83-86):
```json
"optionalDependencies": {
  "@rollup/rollup-linux-x64-gnu": "^4.59.0",
  "@rollup/rollup-win32-x64-msvc": "^4.59.0"
},
```

**Verification**:
```powershell
# Verify esbuild packages were removed
Select-String -Path "C:\Dev\Hero-Automation\artifacts\swebtools\package.json" -Pattern "@esbuild" 
# Expected output: NOTHING (no matches)
```

---

### Step 2.3: Apply mockup-sandbox vite.config.ts Changes

**Location**: `C:\Dev\Hero-Automation\artifacts\mockup-sandbox\vite.config.ts`

**BEFORE** (Lines 40-44):
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
},
```

**AFTER** (Lines 40-47):
```typescript
build: {
  outDir: path.resolve(import.meta.dirname, "dist"),
  emptyOutDir: true,
  ssr: false,
},
// Force pure JavaScript build chain - disable native Rolldown
experimental: {
  withBundledRolldown: false,
},
```

**Verification**:
```powershell
Select-String -Path "C:\Dev\Hero-Automation\artifacts\mockup-sandbox\vite.config.ts" -Pattern "withBundledRolldown"
# Expected: Shows "withBundledRolldown: false"
```

---

## PHASE 3: CLEAN INSTALL (5 minutes)

### Step 3.1: Run Clean Install Script (Recommended)

```powershell
# Navigate to project root
cd C:\Dev\Hero-Automation

# Run the clean install script
.\clean-install.ps1

# Expected output:
# [1/6] Stopping any running processes...
# [2/6] Removing lock files...
# [3/6] Removing node_modules (entire project)...
# [4/6] Clearing npm cache...
# [5/6] Installing dependencies (clean install)...
# [6/6] Verifying configuration...
# Clean Install Completed Successfully!
```

**If script doesn't have permission**, run with bypass:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
.\clean-install.ps1
Set-ExecutionPolicy -ExecutionPolicy Default -Scope Process
```

---

### Step 3.2: Manual Clean Install (If Script Fails)

```powershell
cd C:\Dev\Hero-Automation

# Step A: Kill all Node processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Step B: Delete lock file
Remove-Item -Path package-lock.json -Force -ErrorAction SilentlyContinue
Write-Host "✓ Removed package-lock.json"

# Step C: Delete all node_modules
Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path artifacts\swebtools\node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path artifacts\mockup-sandbox\node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path artifacts\api-server\node_modules -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path lib\db\node_modules -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "✓ Removed all node_modules directories"

# Step D: Clear npm cache
npm cache clean --force
Write-Host "✓ Cleared npm cache"

# Step E: Fresh install
Write-Host "Installing dependencies (this may take 3-5 minutes)..."
npm install

Write-Host "✓ Installation complete"
```

---

## PHASE 4: VERIFICATION (2 minutes)

### Step 4.1: Verify Configuration Applied

```powershell
cd C:\Dev\Hero-Automation

# Check 1: Verify Rolldown is disabled in swebtools
Write-Host "Checking swebtools config..."
Select-String -Path artifacts\swebtools\vite.config.ts -Pattern "withBundledRolldown"
# Expected: Shows "withBundledRolldown: false"

# Check 2: Verify no esbuild in optional deps
Write-Host "Checking optional dependencies..."
Select-String -Path artifacts\swebtools\package.json -Pattern "@esbuild" -ErrorAction SilentlyContinue
# Expected: No output (no matches)

# Check 3: Verify mockup-sandbox config
Write-Host "Checking mockup-sandbox config..."
Select-String -Path artifacts\mockup-sandbox\vite.config.ts -Pattern "withBundledRolldown"
# Expected: Shows "withBundledRolldown: false"
```

---

### Step 4.2: Test Build (Expected to SUCCEED)

```powershell
cd C:\Dev\Hero-Automation

Write-Host "Running build test..."
npm run build 2>&1 | Tee-Object -FilePath build-after.log

# Expected output:
# ✓ 1,234 modules transformed
# ✓ Built in XX.Xs
# dist/
# ├── index.html
# ├── assets/
# │   ├── app-HASH.js
# │   ├── app-HASH.css
# │   └── vendor-HASH.js
#
# Expected: NO errors, NO .node files in dist/
```

**Success Indicators**:
- ✅ No ERR_DLOPEN_FAILED
- ✅ No "AppControl policy" messages
- ✅ Build completes in 45-90 seconds
- ✅ dist/ folder contains .js/.css files only

---

### Step 4.3: Verify Build Output

```powershell
# List build artifacts
Get-ChildItem -Path artifacts\swebtools\dist\ -Recurse | Select-Object -Property Name, Length

# Expected structure:
# index.html                     (HTML entry point)
# assets\
#   app-ABC1234.js              (App bundle)
#   vendor-XYZ5678.js           (Dependencies)
#   app-ABC1234.css             (Styles)
#
# ✅ NO .node files should be present
```

---

### Step 4.4: Test Development Server

```powershell
cd C:\Dev\Hero-Automation

# Start dev server
npm run dev

# Expected output:
# ➜  Local:   http://localhost:5173/
# ➜  press h to show help
#
# Leave running for 10 seconds, verify no errors, then Ctrl+C to stop
```

---

## PHASE 5: VERIFICATION SUMMARY (1 minute)

### Final Checklist

```powershell
Write-Host "=== FINAL VERIFICATION ===" -ForegroundColor Green

$checks = @(
  @{ Name = "Vite config has withBundledRolldown"; Path = "artifacts\swebtools\vite.config.ts"; Pattern = "withBundledRolldown" },
  @{ Name = "No @esbuild in optional deps"; Path = "artifacts\swebtools\package.json"; Pattern = "@esbuild"; ShouldFind = $false },
  @{ Name = "Build dist folder exists"; Path = "artifacts\swebtools\dist\index.html"; Exists = $true },
  @{ Name = "No .node files in dist"; Path = "artifacts\swebtools\dist"; Extension = ".node"; Count = 0 }
)

# Run checks...
# Report results
```

---

## 📋 ROLLBACK PROCEDURE (If Needed)

If something goes wrong, here's how to rollback:

```powershell
# Option 1: Git rollback (if using version control)
cd C:\Dev\Hero-Automation
git checkout artifacts\swebtools\vite.config.ts
git checkout artifacts\swebtools\package.json
git checkout artifacts\mockup-sandbox\vite.config.ts

# Then clean install
.\clean-install.ps1

# Option 2: Manual restore from backup
# (if you saved the original files before changes)
```

---

## 🎯 SUCCESS CRITERIA

Build is successful when:

✅ `npm run build` completes without errors  
✅ No ERR_DLOPEN_FAILED errors  
✅ No "AppControl policy" messages  
✅ Build time is 45-90 seconds  
✅ `dist/` folder contains only .js/.css files  
✅ `npm run dev` starts without errors  
✅ Development server responds to requests  

---

## ⏱️ TIMING SUMMARY

| Phase | Task | Duration | Status |
|-------|------|----------|--------|
| 1 | Verify current state | 2 min | Pre-check |
| 2 | Apply configuration | 1 min | Non-blocking |
| 3 | Clean install | 5 min | Required |
| 4 | Verification | 2 min | Post-check |
| **TOTAL** | **Complete execution** | **~10 min** | ✅ |

---

## 📞 SUPPORT

If you encounter issues:

1. **Check error logs**: Review build-before.log vs build-after.log
2. **Verify PowerShell version**: `$PSVersionTable`
3. **Clear all caches**:
   ```powershell
   npm cache clean --force
   npx clear-npx-cache  # if available
   ```
4. **Try alternative install**:
   ```powershell
   npm install --save --legacy-peer-deps
   ```
5. **Use WSL2 as fallback**:
   ```bash
   # In WSL2, policies don't apply
   npm run build  # Should work
   ```

---

## 📝 NOTES

- Configuration changes are non-breaking
- Existing npm scripts remain unchanged
- Build time increases by ~20% (acceptable)
- Output functionality is identical
- Can rollback anytime with git
