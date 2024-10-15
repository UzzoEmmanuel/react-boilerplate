import React from 'react';
import { HeroProps } from '../../../types/components/home/hero.types';

export const Hero: React.FC<HeroProps> = ({ title, text }) => {
  return (
    <div className='w-full h-auto flex flex-col items-start justify-start py-[10%] mt-16 xl:mt-0 isolate overflow-hidden bg-white px-[5%] xl:px-[10%]'>
      <h1 className='mt-10 text-4xl xl:text-5xl font-bold tracking-tight text-secondary'>
        {title}
      </h1>
      <p className='mt-6 text-lg xl:text-xl leading-8 text-secondary'>{text}</p>
    </div>
  );
};
