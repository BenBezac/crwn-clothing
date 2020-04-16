import React from "react";
import { useTranslation } from "react-i18next";
import './Homepage.scss';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{t('hats')}</h1>
            <span className="subtitle">{t('shop-now')}</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{t('jackets')}</h1>
            <span className="subtitle">{t('shop-now')}</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{t('sneakers')}</h1>
            <span className="subtitle">{t('shop-now')}</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{t('women')}</h1>
            <span className="subtitle">{t('shop-now')}</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">{t('men')}</h1>
            <span className="subtitle">{t('shop-now')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
