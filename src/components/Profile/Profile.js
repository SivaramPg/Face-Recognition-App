import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { name, email, entries } = this.props.user;

    return (
      <div
        className="br4 ma5 pa4 shadow-5 bg--white-025 db"
        style={{ height: 400 }}
      >
        <div className="fl w-50 pa4 db">
          <img
            className="center ba br-100 bw2 ma3 pa2 db shadow-5 bg-light-pink"
            style={{ width: 200, height: 200 }}
            src="http://i.imgur.com/oAUldaP.jpg"
            alt="Profile Pic"
          />
        </div>
        <div className="center fl w-50 db ma4 pa5 bg-white br4 shadow-5 grow">
          <p>
            <span className="f3">NAME:</span> {name}{" "}
          </p>
          <p>
            <span className="f3">EMAIL:</span> {email}{" "}
          </p>
          <p>
            <span className="f3"> ENTRIES: </span>
            {entries}
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
