# Project Status: MetaCert - Certificate Vault

## Current State
- **Framework:** React 18.3.1 (Downgraded from 19 to support Starknet React peer dependencies).
- **Styling:** Tailwind CSS v4 (using `@theme` in `src/index.css`).
- **Starknet Integration:** `@starknet-react/core` v5.0.3 with `vite-plugin-top-level-await`.
- **Verified:** 
  - Basic React rendering is working.
  - Provider and Connectors (Argent/Braavos) are configured.
  - Full UI (CertificateVault) is restored and functional.
  - Wallet connection/disconnection logic is implemented.
  - Project builds successfully (`npm run build`).

## Files Created/Modified
1. `src/components/CertificateVault.tsx`: Integrated `useConnect`, `useDisconnect`, and wallet selection UI.
2. `src/main.tsx`: Configured with `StarknetConfig`, `publicProvider`, and `InjectedConnector`.
3. `src/App.tsx`: Restored `CertificateVault` as the main entry component.
4. `vite.config.ts`: Updated with `topLevelAwait` and `esnext` target for Starknet compatibility.
5. `src/index.css`: Configured with Tailwind v4 custom theme colors.

## Next Steps
1. **Live Testing:** Verify wallet connection in a browser with Argent/Braavos extensions.
2. **Contract Integration:** Replace mock data (timer, claim logic) with actual Starknet contract calls if ABI/Address are provided.
3. **Refine UI:** Add animations (e.g., using Framer Motion) for smoother transitions.

## Technical Notes
- **React 18:** Mandatory until Starknet React supports React 19.
- **Top Level Await:** Required for `starknet.js` v6+ in Vite.
- **Tailwind v4:** Uses CSS-first configuration; avoid `tailwind.config.js` for color extensions.
