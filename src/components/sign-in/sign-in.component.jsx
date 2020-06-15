import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom.button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
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
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">{t('sign-in.has-already-an-account')}</h2>
                <span>{t('sign-in.sign-in-with-email-and-password')}</span>

                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        required
                        label={t('sign-in.email')}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        required
                        label={t('sign-in.password')}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            {t('sign-in.submit-form')}
                        </CustomButton>
                        <CustomButton
                            type="button"
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            {t('sign-in.with-google')}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default withTranslation()(SignIn);
