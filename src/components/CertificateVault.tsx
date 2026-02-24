import React, { useState, useEffect } from 'react';
import { useAccount, useContract } from '@starknet-react/core';
import { Clock, Shield, Award, CheckCircle } from 'lucide-react';
import type { Abi } from 'starknet';

const CertificateVault: React.FC = () => {
  const { status } = useAccount();
  
  // Mock contract configuration
  const contractAddress = "0x0000000000000000000000000000000000000000"; // Placeholder
  const abi: Abi = []; // Placeholder ABI
  
  useContract({
    abi,
    address: contractAddress,
  });

  // Timer state: seconds remaining until claim is available
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Mock 1 hour
  const [isClaimable, setIsClaimable] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsClaimable(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClaim = async () => {
    if (!isClaimable) return;
    console.log("Claiming certificate...");
    // Integration logic with contract call would go here
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-6 text-white">
      <div className="max-w-md w-full bg-dark-surface border border-dark-border rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-dark-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-900/30 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Certificate Vault</h2>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'connected' ? 'bg-green-900/20 text-green-400 border border-green-800' : 'bg-red-900/20 text-red-400 border border-red-800'}`}>
            {status === 'connected' ? 'Connected' : 'Disconnected'}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col items-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
            <div className="relative bg-dark-surface border-2 border-purple-500/20 w-40 h-40 rounded-full flex items-center justify-center">
              <Award className="w-20 h-20 text-purple-500" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Unlocking In</p>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <span className="text-4xl font-mono font-bold text-white tabular-nums">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="bg-dark-bg/50 border border-dark-border p-4 rounded-xl flex items-center justify-between">
              <span className="text-gray-400 text-sm">Issuer</span>
              <span className="text-sm font-medium">MetaCert Protocol</span>
            </div>
            
            <div className="bg-dark-bg/50 border border-dark-border p-4 rounded-xl flex items-center justify-between">
              <span className="text-gray-400 text-sm">Status</span>
              <span className="text-sm font-medium flex items-center">
                {isClaimable ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Ready to Claim
                  </>
                ) : (
                  'Pending Unlock'
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Footer/Action Section */}
        <div className="p-6 bg-dark-bg/30 border-t border-dark-border">
          <button
            onClick={handleClaim}
            disabled={!isClaimable || status !== 'connected'}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center ${
              isClaimable && status === 'connected'
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
            }`}
          >
            {isClaimable ? 'Claim Certificate' : 'Wait for Unlock'}
          </button>
          {!isClaimable && status === 'connected' && (
            <p className="text-center mt-4 text-xs text-gray-500 italic">
              Verification process is still in progress...
            </p>
          )}
          {status !== 'connected' && (
            <p className="text-center mt-4 text-xs text-red-400 font-medium">
              Please connect your wallet to continue.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateVault;
