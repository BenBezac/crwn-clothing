import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import CustomButton from '../../../components/form/custom-button/custom.button.component';

const Error404Page: FC = () => {
    const { t } = useTranslation('error');
    const history = useHistory();

    return (
        <div className="homepage">
            <h1>{t('404.title')}</h1>
            <h3>{t('404.subtitle')}</h3>
            <CustomButton onClick={history.goBack}>{t('go-back')}</CustomButton>
        </div>
    );
};

export default Error404Page;
