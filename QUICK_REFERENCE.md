# QUICK REFERENCE CARD
## Native Dependency Removal - 10 Minute Fix

---

## 🚨 THE PROBLEM
```
ERR_DLOPEN_FAILED
Application Control policy has blocked this file
❌ BUILD FAILS
```

**Root Cause**: Rolldown native binaries blocked by Windows AppControl

---

## ✅ THE SOLUTION
Replace Rolldown (Rust) → Rollup (Pure JavaScript)

**3 Config Changes** | **1 Clean Install** | **Total: 10 minutes**

---

## 📋 ATOMIC STEPS

### STEP 1: Update vite.config.ts
**File**: `artifacts/swebtools/vite.config.ts`

```typescript
// Add this block before closing export:
experimental: {
  withBundledRolldown: false,  // ← THE KEY FIX
},

build: {
  ssr: false,
  rollupOptions: {
    output: {
      format: "es",
    },
  },
}
```

### STEP 2: Update package.json
**File**: `artifacts/swebtools/package.json`

```json
// REMOVE these lines:
"@esbuild/linux-x64": "0.27.3",
"@esbuild/win32-x64": "0.27.3",

// KEEP these (they're safe):
"@rollup/rollup-linux-x64-gnu": "^4.59.0",
"@rollup/rollup-win32-x64-msvc": "^4.59.0"
```

### STEP 3: Update mockup-sandbox vite.config.ts
**File**: `artifacts/mockup-sandbox/vite.config.ts`

Add same `experimental` block:
```typescript
experimental: {
  withBundledRolldown: false,
},
```

### STEP 4: Clean Install
**Run from project root**:
```powershell
.\clean-install.ps1
```

or manually:
```powershell
rm package-lock.json -Force
rm node_modules -Recurse -Force
npm cache clean --force
npm install
```

### STEP 5: Test Build
```powershell
npm run build
```

**Expected Output**:
```
✓ 1,234 modules transformed
✓ Built in 45.2s
✅ SUCCESS (no .node files)
```

---

## ✨ SUCCESS INDICATORS

✅ No ERR_DLOPEN_FAILED  
✅ No "AppControl policy" errors  
✅ Build completes (45-90 seconds)  
✅ dist/ contains .js/.css only  
✅ dev server starts without errors  

---

## 🔧 CONFIGURATION SUMMARY

| Component | Change | Status |
|-----------|--------|--------|
| Vite Config | Add experimental.withBundledRolldown = false | ✅ |
| Package.json | Remove @esbuild optional deps | ✅ |
| Mockup Config | Add same Rolldown disable | ✅ |
| Clean Install | Run clean-install.ps1 | ✅ |

---

## ⏱️ TIMING

| Phase | Time |
|-------|------|
| Config changes | 2 min |
| Clean install | 5 min |
| Build test | 2 min |
| **TOTAL** | **~10 min** |

---

## 📚 FULL GUIDES

**Need more details?**

1. **ATOMIC_EXECUTION_GUIDE.md** ← Start here (detailed steps)
2. **NATIVE_DEPENDENCIES_ANALYSIS.md** ← Technical deep dive
3. **BUILD_CONFIGURATION_GUIDE.md** ← Troubleshooting

---

## 🆘 QUICK TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Still getting ERR_DLOPEN_FAILED | Run clean-install.ps1 again |
| Build very slow (>3min) | Normal for pure JS; use WSL2 for faster |
| Module not found errors | `npm install` then try again |
| Can't run PowerShell script | Use manual steps above |

---

## 🔄 ROLLBACK (If Needed)

```powershell
git checkout .
.\clean-install.ps1
```

---

## 🎯 ONE-LINER SUMMARY

**Disable Rolldown → Use Rollup (Pure JS) → Build works on Windows with AppControl**

```
experimental: { withBundledRolldown: false }  ← That's it!
```

---

**READY? Start with ATOMIC_EXECUTION_GUIDE.md**
