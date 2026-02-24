import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StarknetConfig, argent, braavos, useInjectedConnectors } from '@starknet-react/core';
import { mainnet } from '@starknet-react/chains';
import { jsonRpcProvider } from '@starknet-react/core';

function Root() {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: 'always',
  });

  return (
    <React.StrictMode>
      <StarknetConfig
        chains={[mainnet]}
        provider={jsonRpcProvider({ rpc: () => ({ nodeUrl: 'https://starknet-mainnet.public.blastapi.io' }) })}
        connectors={connectors}
      >
        <App />
      </StarknetConfig>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
