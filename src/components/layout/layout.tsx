import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Loader } from './loader/loader';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { getHeaderContents } from '../../locales/contents/header/header.contents';
import { getFooterContents } from '../../locales/contents/footer/footer.contents';
import { getLoaderContents } from '../../locales/contents/loader/loader.contents';

export const Layout = () => {
  const { t } = useTranslation(['common']);
  const headerContents = getHeaderContents(t);
  const footerContents = getFooterContents(t);
  const loaderContents = getLoaderContents(t);

  return (
    <div className='flex flex-col min-h-screen'>
      <Suspense fallback={<Loader title={loaderContents.title} />}>
        <Header title={headerContents.title} text={headerContents.text} />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer title={footerContents.title} text={footerContents.text} />
      </Suspense>
    </div>
  );
};
