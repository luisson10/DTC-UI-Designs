import React from 'react';
import AutorenewIcon from '@mui/icons-material/AutorenewOutlined';
export function StateBadge() {
  return <span className="inline-flex items-center px-3 py-1 rounded text-sm font-medium min-w-[100px] justify-center bg-[#f2ba42] text-white">
      <AutorenewIcon className="w-2.5 h-2.5 mr-2 animate-spin" />
      Running...
    </span>;
}