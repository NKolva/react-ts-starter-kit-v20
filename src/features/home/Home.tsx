import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from 'src/app/rootStore';

import { fetchPosts, isLoadingPostsSelector, postsDataSelector } from 'src/store/app';

import './home.scss';

type LanguageType = 'en' | 'ua';

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation();

  const postsData = useSelector(postsDataSelector);
  console.log('postsData', postsData);
  const isLoadingPosts = useSelector(isLoadingPostsSelector);
  console.log('isLoadingPosts', isLoadingPosts);

  const onChangeLanguage = useCallback(
    (value: LanguageType) => () => {
      i18n.changeLanguage(value);
    },
    [i18n]
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__header">
        <h4 className="home__header__title">{t('home:welcome_message')}</h4>
        <button className="home__header__button" onClick={onChangeLanguage('en')}>
          EN
        </button>
        <button className="home__header__button" onClick={onChangeLanguage('ua')}>
          UA
        </button>
      </div>
    </div>
  );
};
