import React from 'react';
import { useAccount } from '@starknet-react/core';

function App() {
  const { status } = useAccount();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Starknet Provider Test</h1>
      <p className="text-xl">Status: <span className="text-purple-400 font-mono">{status}</span></p>
    </div>
  );
}

export default App;
