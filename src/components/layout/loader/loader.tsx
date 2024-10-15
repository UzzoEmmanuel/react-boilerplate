import React from 'react';
import { LoaderProps } from '../../../types/components/layout/loader.types';

export const Loader: React.FC<LoaderProps> = ({ title }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-primary bg-white'>
      {title}
    </div>
  );
};
