import React from 'react';

export const Form = (props) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">{props.children}</form>
      </main>
    </article>
  );
};

export const FieldSet = (props) => {
  return (
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      {props.children}
    </fieldset>
  );
};

export const Name = ({ onNameChange }) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="name">
        Name
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="text"
        name="name"
        id="name"
        onChange={onNameChange}
      />
    </div>
  );
};

export const Email = ({ onEmailChange }) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" htmlFor="email-address">
        Email
      </label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="email"
        name="email-address"
        id="email-address"
        onChange={onEmailChange}
      />
    </div>
  );
};

export const Password = ({ onPasswordChange }) => {
  return (
    <div className="mv3">
      <label className="db fw6 lh-copy f6" htmlFor="password">
        Password
      </label>
      <input
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        type="password"
        name="password"
        id="password"
        onChange={onPasswordChange}
      />
    </div>
  );
};

export const SignInButton = ({ onSubmitSignIn }) => {
  return (
    <div className="">
      <input
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="button"
        value="Sign in"
        onClick={onSubmitSignIn}
      />
    </div>
  );
};

export const RegisterButton = ({ onSubmitSignIn }) => {
  return (
    <div className="">
      <input
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        type="button"
        value="Register"
        onClick={onSubmitSignIn}
      />
    </div>
  );
};

export const RegisterLink = ({ onRouteChange }) => {
  return (
    <div className="lh-copy mt3">
      <p
        onClick={() => onRouteChange('register')}
        className="f6 link dim black db pointer"
      >
        Register
      </p>
    </div>
  );
};
