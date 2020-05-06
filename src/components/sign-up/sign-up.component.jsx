import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInputComponent from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button';

import './sign-up.styles.scss';

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
                    <FormInputComponent
                        type="text"
                        name="displayName"
                        value={displayName}
                        required
                        label={t('sign-up.display-name')}
                        handleChange={this.handleChange}
                    />
                    <FormInputComponent
                        type="email"
                        name="email"
                        value={email}
                        required
                        label={t('sign-up.email')}
                        handleChange={this.handleChange}
                    />
                    <FormInputComponent
                        type="password"
                        name="password"
                        value={password}
                        required
                        label={t('sign-up.password')}
                        handleChange={this.handleChange}
                    />
                    <FormInputComponent
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
