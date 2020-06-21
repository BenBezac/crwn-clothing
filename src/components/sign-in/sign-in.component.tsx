import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormInput from '../form/form-input/form-input.component';

import CustomButton from '../form/custom-button/custom.button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const { t } = useTranslation('connexion');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            resetState();
        } catch (err) {
            console.error(err);
        }
    };

    const resetState = () => {
        setEmail('');
        setPassword('');
    };

    const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;
        }
    };

    return (
        <div className="sign-in">
            <h2 className="title">{t('sign-in.has-already-an-account')}</h2>
            <span>{t('sign-in.sign-in-with-email-and-password')}</span>

            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    required
                    label={t('sign-in.email')}
                    handleChange={handleChange}
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    required
                    label={t('sign-in.password')}
                    handleChange={handleChange}
                />
                <div className="buttons">
                    <CustomButton type="submit">
                        {t('sign-in.submit-form')}
                    </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={(event) => signInWithGoogle(event)}
                        isGoogleSignIn
                    >
                        {t('sign-in.with-google')}
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
