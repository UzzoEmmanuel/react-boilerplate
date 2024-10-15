import { TFunction } from 'i18next';

export const getFooterContents = (t: TFunction) => ({
  title: t('welcomeTitle'),
  text: t('welcomeText'),
});
