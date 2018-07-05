import React from "react";
import {
  Form,
  FieldSet,
  Email,
  Password,
  SignInButton,
  RegisterLink
} from "../Form/Form.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <Form>
        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
        <FieldSet>
          <Email onEmailChange={this.onEmailChange} />
          <Password onPasswordChange={this.onPasswordChange} />
        </FieldSet>
        <SignInButton onSubmitSignIn={this.onSubmitSignIn} />
        <RegisterLink onRouteChange={onRouteChange} />
      </Form>
    );
  }
}

export default SignIn;
