import React from 'react';
import { FooterProps } from '../../../types/components/layout/footer.types';

export const Footer: React.FC<FooterProps> = ({ title, text }) => {
  return (
    <footer className='mt-10'>
      <div className='mx-auto w-full h-auto px-6 py-8 bg-primary'>
        <h1 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-white'>{title}</h1>
        <p className='mt-6 text-lg xl:text-xl leading-8 text-secondary'>{text}</p>
      </div>
    </footer>
  );
};
