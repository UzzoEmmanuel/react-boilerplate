import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { Button } from '../../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';
import i18n from 'i18next';
import { i18nLangsEnabled, getFlagForLanguage } from '../../../config/i18nLangsEnabled';

const LanguageSelector = () => {
  const currentLanguage = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then();
  };

  return (
    <div className='mr-2 sm:mr-5 mt-2'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' className='bg-background hover:bg-primary'>
            {getFlagForLanguage(currentLanguage) && (
              <img
                src={getFlagForLanguage(currentLanguage)}
                alt={`${currentLanguage} Flag`}
                width='30'
                height='20'
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <ul className='list-none w-16 flex flex-col items-center p-2'>
            {i18nLangsEnabled.map((lang) => (
              <TooltipProvider key={lang.codeIso}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant='ghost'
                      className='cursor-pointer hover:bg-accent px-2 py-3 rounded-lg'
                      onClick={() => changeLanguage(lang.codeIso)}
                    >
                      <img
                        className='inline-block'
                        src={lang.flag}
                        alt={`${lang.name} Flag`}
                        width='30'
                        height='20'
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side='left'>
                    <p>{lang.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageSelector;
