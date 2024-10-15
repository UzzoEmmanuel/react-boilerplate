import franceFlag from '../assets/images/flags/fr-fr.svg';
import gbFlag from '../assets/images/flags/en-gb.svg';

enum LanguageCode {
  FR_FR = 'fr-FR',
  EN_GB = 'en-GB',
}

type Language = {
  readonly name: string;
  readonly codeIso: LanguageCode;
  readonly flag: string;
};

export const i18nLangsEnabled: Array<Language> = [
  {
    name: 'Français (France)',
    codeIso: LanguageCode.FR_FR,
    flag: franceFlag,
  },
  {
    name: 'English (United Kingdom)',
    codeIso: LanguageCode.EN_GB,
    flag: gbFlag,
  },
];

export const getFlagForLanguage = (language: string) => {
  const languageData = i18nLangsEnabled.find((lang) => lang.codeIso === language);
  return languageData ? languageData.flag : franceFlag;
};
