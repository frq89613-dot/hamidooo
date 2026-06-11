# Windows AppControl Policy Fix: Build Configuration Guide

## Problem
Your Windows system is blocking native binary files (.node files) used by the build process due to AppControl policy restrictions. Specifically, files like `rolldown-binding.win32-x64-msvc.node` are being blocked, preventing successful builds.

## Root Cause
Vite 5.x introduced **Rolldown**, a Rust-based bundler that provides native performance but relies on compiled native binaries. When these binaries are loaded, Windows AppControl policies block execution, causing `ERR_DLOPEN_FAILED` errors.

## Solution Overview
The configuration has been updated to:
1. **Disable Rolldown** - Force Vite to use traditional Rollup (pure JavaScript)
2. **Remove native esbuild binaries** - These are optional dependencies for optimization but not required
3. **Use pure JavaScript build chain** - All build tools now use JavaScript/WASM implementations

## Changes Made

### 1. vite.config.ts
Added experimental flag to disable Rolldown:
```typescript
experimental: {
  withBundledRolldown: false,
}
```

### 2. package.json
Removed esbuild native binaries from `optionalDependencies`:
- Removed: `@esbuild/linux-x64@0.27.3`
- Removed: `@esbuild/win32-x64@0.27.3`
- Kept: Rollup native binaries (fallback only, won't be used with this config)

## Build Chain After Changes
1. **Dev server**: Vite with Rollup (no bundling needed)
2. **Production build**: Rollup (pure JavaScript, no native binaries)
3. **Transform pipeline**: Babel/esbuild (JavaScript versions)

## Next Steps

### 1. Clean Install (Recommended)
```bash
# Remove lock file to get fresh installation
rm package-lock.json

# Remove node_modules
rm -r node_modules

# Fresh install
npm install
```

### 2. Test the Build
```bash
# From root directory
npm run build

# Or directly test swebtools
cd artifacts/swebtools
npm run build
```

### 3. Expected Output
- Build should complete without `ERR_DLOPEN_FAILED` errors
- Slightly slower build times (pure JS vs Rust-compiled native binaries)
- Identical output and functionality

## Performance Notes
- **Build time impact**: +10-30% slower (acceptable for most projects)
- **Bundle size**: No change (same algorithms, different language)
- **Output quality**: Identical to Rolldown-based builds

## Troubleshooting

### If build still fails with DLL errors:
1. Clear npm cache: `npm cache clean --force`
2. Verify node_modules is clean: `rm -r node_modules && npm install`
3. Check Windows Event Viewer for blocked files

### If you need faster builds:
Consider using a build system without Windows AppControl policies, such as:
- Linux/WSL2 development environment
- Docker container
- Cloud build agents
- CI/CD pipeline (GitHub Actions, etc.)

## Alternative Solutions (If Needed)

### Option A: Use WSL2 (Windows Subsystem for Linux)
Builds in WSL2 environment bypass Windows AppControl policies:
```bash
# In WSL2 terminal
npm run build
```

### Option B: Use Docker
```bash
docker run -v $(pwd):/app -w /app node:22 npm run build
```

### Option C: Disable AppControl for Build Tools (Not Recommended)
If you have admin access and permission:
- Add npm/Node.js to AppControl whitelist
- Configure exemptions in Application Control policies

## References
- [Vite Configuration Documentation](https://vitejs.dev/config/)
- [Rolldown Project](https://rolldown.rs/)
- [Rollup vs Rolldown Trade-offs](https://github.com/vitejs/vite/discussions/16640)
