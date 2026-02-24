
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StarknetConfig, publicProvider, InjectedConnector } from '@starknet-react/core';
import { mainnet } from '@starknet-react/chains';

const connectors = [
  new InjectedConnector({ options: { id: "argentX" } }),
  new InjectedConnector({ options: { id: "braavos" } }),
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={connectors}
    >
      <App />
    </StarknetConfig>
  </React.StrictMode>
);
