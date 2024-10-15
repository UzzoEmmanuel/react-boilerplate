import { TFunction } from 'i18next';

export const getHeroContents = (t: TFunction) => ({
  title: t('welcomeTitle'),
  text: t('welcomeText'),
});
