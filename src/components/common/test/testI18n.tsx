import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const TestI18n = () => {
  const { t, i18n } = useTranslation();
  const [resourceStore, setResourceStore] = useState({});

  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Loaded namespaces:', i18n.loadNamespaces);
    console.log('Is initialized:', i18n.isInitialized);
    console.log('Resource store:', i18n.services.resourceStore.data);
    setResourceStore(i18n.services.resourceStore.data);

    // Log when language changes
    const changeLanguage = i18n.changeLanguage;
    i18n.changeLanguage = (lng) => {
      console.log('Changing language to:', lng);
      return changeLanguage(lng);
    };

    return () => {
      i18n.changeLanguage = changeLanguage;
    };
  }, [i18n]);

  return (
    <div>
      <h1>Test i18n</h1>
      <p>Current language: {i18n.language}</p>
      <p>Is initialized: {i18n.isInitialized ? 'Yes' : 'No'}</p>
      <p>Translation of &apos;welcomeTitle&apos;: {t('welcomeTitle')}</p>
      <p>Translation of &apos;welcomeText&apos;: {t('welcomeText')}</p>
      <button onClick={() => i18n.changeLanguage('en-GB')}>English</button>
      <button onClick={() => i18n.changeLanguage('fr-FR')}>Français</button>
      <h2>Resource Store:</h2>
      <pre>{JSON.stringify(resourceStore, null, 2)}</pre>
    </div>
  );
};
