import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StarknetConfig, publicProvider } from '@starknet-react/core';
import { mainnet } from '@starknet-react/chains';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
    >
      <App />
    </StarknetConfig>
  </React.StrictMode>
);
