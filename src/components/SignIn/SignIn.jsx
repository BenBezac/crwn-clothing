import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import FormInput from "../FormInput/FormInput";

import "./SignIn.scss";
import CustomButton from "../CustomButton/CustomButton";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
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
        <h2 className="title">{t("sign-in.has-already-an-account")}</h2>
        <span>{t("sign-in.sign-in-with-email-and-password")}</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            label={t("sign-in.email")}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            label={t("sign-in.password")}
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">{t("sign-in.submit-form")}</CustomButton>
        </form>
      </div>
    );
  }
}

export default withTranslation()(SignIn);
