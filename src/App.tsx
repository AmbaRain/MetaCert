import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';
import CertificateVault from './components/CertificateVault';
import { Wallet, LogOut } from 'lucide-react';

function App() {
  const { address, status } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Wallet Selection Header */}
      <div className="absolute top-4 right-4 z-50">
        {status === 'connected' ? (
          <button
            onClick={() => disconnect()}
            className="flex items-center space-x-2 bg-red-900/30 border border-red-800 text-red-400 px-4 py-2 rounded-lg hover:bg-red-900/40 transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </button>
        ) : (
          <div className="flex space-x-2">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect({ connector })}
                className="flex items-center space-x-2 bg-purple-900/30 border border-purple-800 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-900/40 transition-all text-sm font-medium shadow-lg shadow-purple-500/10"
              >
                <Wallet className="w-4 h-4" />
                <span>Connect {connector.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <CertificateVault />
    </div>
  );
}

export default App;
