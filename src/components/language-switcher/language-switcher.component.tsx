import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: FC = () => {
    const { i18n } = useTranslation();

    const onLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng).then((result) => console.log(result));
    };
    const availableLanguages: Array<string> = ['fr', 'en'];
    const currentLanguage = availableLanguages.includes(i18n.language)
        ? i18n.language
        : i18n.languages.slice(-1)[0];

    console.log(currentLanguage, availableLanguages);
    return (
        <div className="language-switcher">
            <div>{currentLanguage.toUpperCase()}</div>
            <div className="language-switcher-content">
                {availableLanguages
                    .filter((lng) => lng !== currentLanguage)
                    .map((lng) => (
                        <div key={lng} onClick={() => onLanguageChange(lng)}>
                            {lng.toUpperCase()}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
