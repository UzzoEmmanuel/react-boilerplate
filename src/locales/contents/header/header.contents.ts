import { TFunction } from 'i18next';

export const getHeaderContents = (t: TFunction) => ({
  title: t('welcomeTitle'),
  text: t('welcomeText'),
});
