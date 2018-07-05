import React from "react";
import {
  Form,
  FieldSet,
  Name,
  Email,
  Password,
  RegisterButton
} from "../Form/Form.js";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitSignIn = () => {
    fetch(" https://still-coast-12669.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
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
    return (
      <Form>
        <legend className="f1 fw6 ph0 mh0">Register</legend>
        <FieldSet>
          <Name onNameChange={this.onNameChange} />
          <Email onEmailChange={this.onEmailChange} />
          <Password onPasswordChange={this.onPasswordChange} />
        </FieldSet>
        <RegisterButton onSubmitSignIn={this.onSubmitSignIn} />
      </Form>
    );
  }
}

export default Register;
