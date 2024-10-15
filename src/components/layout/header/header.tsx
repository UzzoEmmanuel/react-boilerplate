import React from 'react';
import LanguageSelector from '../../common/buttons/languageSelector';
import { HeaderProps } from '../../../types/components/layout/header.types';

export const Header: React.FC<HeaderProps> = ({ title, text }) => {
  return (
    <header className='bg-white sticky top-0 z-40'>
      <div className='w-full h-auto flex flex-row items-center justify-between px-6 py-8 bg-primary'>
        <div className='w-full h-auto flex flex-col items-start justify-center'>
          <h1 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-white'>
            {title}
          </h1>
          <p className='mt-6 text-lg xl:text-xl leading-8 text-secondary'>{text}</p>
        </div>
        <div className='w-full h-auto flex flex-col items-end justify-center'>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};
