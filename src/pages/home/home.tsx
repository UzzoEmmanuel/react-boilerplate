import { useTranslation } from 'react-i18next';
import { Hero } from '../../components/containers/home/hero';
import { getHeroContents } from '../../locales/contents/home/hero.contents';

const Home = () => {
  const { t } = useTranslation(['common']);
  const heroContents = getHeroContents(t);

  return (
    <div className='mx-auto flex flex-col items-center justify-between'>
      <Hero title={heroContents.title} text={heroContents.text} />
    </div>
  );
};

export default Home;
