import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form/form-input/form-input.component';
import CustomButton from '../form/custom-button/custom.button.component';

const SignUp = () => {
    const { t } = useTranslation('connexion');

    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const resetState = () => {
        setEmail('');
        setDisplayName('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(t('sign-up.password-dont-match'));
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            if (!user) {
                throw new Error('user is null');
            }
            await createUserProfileDocument(user, { displayName });

            resetState();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'displayName':
                setDisplayName(value);
                break;

            case 'password':
                setPassword(value);
                break;

            case 'confirmPassword':
                setConfirmPassword(value);
                break;
        }
    };

    return (
        <div className="sign-up">
            <h2 className="title">{t('sign-up.not-having-account')}</h2>
            <span>{t('sign-up.sign-up-with-email-and-password')}</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    required
                    label={t('sign-up.display-name')}
                    handleChange={handleChange}
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    required
                    label={t('sign-up.email')}
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    required
                    label={t('sign-up.password')}
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    label={t('sign-up.confirm-password')}
                    handleChange={handleChange}
                />
                <CustomButton type="submit">
                    {t('sign-up.submit-form')}
                </CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
