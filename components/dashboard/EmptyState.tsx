import React from 'react';
import { Button } from '@/components/ui/button';

export const EmptyState = () => {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
        <svg viewBox="0 0 100 100" className="text-gray-300">
          <rect x="10" y="20" width="30" height="60" fill="currentColor" opacity="0.3" />
          <rect x="45" y="35" width="10" height="45" fill="currentColor" opacity="0.3" />
          <rect x="60" y="10" width="30" height="70" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
      <p className="text-gray-600 mb-2">
        You don't have any stocks in your DEMAT yet. Get started
      </p>
      <p className="text-gray-600 mb-6">with absolutely free equity investments.</p>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
        Start investing
      </Button>
    </div>
  );
};