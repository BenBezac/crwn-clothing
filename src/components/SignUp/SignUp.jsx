import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignUp.scss';

class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { t } = this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert(t('sign-up.password-dont-match'));
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (err) {
            console.error(err);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { t } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">{t('sign-up.not-having-account')}</h2>
                <span>{t('sign-up.sign-up-with-email-and-password')}</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        required
                        label={t('sign-up.display-name')}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        required
                        label={t('sign-up.email')}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        required
                        label={t('sign-up.password')}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                        label={t('sign-up.confirm-password')}
                        handleChange={this.handleChange}
                    />
                    <CustomButton type="submit">
                        {t('sign-up.submit-form')}
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default withTranslation()(SignUp);
