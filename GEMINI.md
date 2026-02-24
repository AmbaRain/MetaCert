# Project Status: MetaCert - Certificate Vault

## Current State
- **Framework:** React 18.3.1 (Downgraded from 19 to support Starknet React peer dependencies).
- **Styling:** Tailwind CSS v4 (using `@theme` in `src/index.css`).
- **Starknet Integration:** `@starknet-react/core` v5.0.3 with `vite-plugin-top-level-await`.
- **Verified:** Basic React rendering is working ("Hello World" test passed).
- **In Progress:** Testing Starknet Provider stability.

## Files Created/Modified
1. `src/components/CertificateVault.tsx`: The main UI component based on Figma (Dark mode, timer-based claim button).
2. `src/main.tsx`: Configured with `StarknetConfig` and `publicProvider`.
3. `src/App.tsx`: Currently a simplified test file to verify Starknet hook stability.
4. `vite.config.ts`: Updated with `topLevelAwait` and `esnext` target for Starknet compatibility.
5. `src/index.css`: Configured with Tailwind v4 custom theme colors (`bg-dark-bg`, etc.).

## Next Steps
1. **Verify Provider Rendering:** Confirm the "Starknet Provider Test" screen is visible.
2. **Restore Full UI:** Import and set up `CertificateVault.tsx` in `App.tsx`.
3. **Wallet Connect Logic:** Ensure `useInjectedConnectors` is working for Argent/Braavos.
4. **Contract Integration:** (Optional) Replace mock timer with actual contract call if ABI/Address are provided.

## Technical Notes
- **React 18:** Mandatory until Starknet React supports React 19.
- **Top Level Await:** Required for `starknet.js` v6+ in Vite.
- **Tailwind v4:** Uses CSS-first configuration; avoid `tailwind.config.js` for color extensions.
