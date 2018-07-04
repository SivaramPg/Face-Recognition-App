import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { name, email, entries} = this.props.user;
    return(
      <div className = "ba br4 mh5 shadow-5 bg--white-025 db" style = {{ height: 300 }} >
        <div className = "fl w-third dib">
          <img className = "center ba bw2 ma5 pa1 " style = {{width: 200, height: 200}} src = "http://i.imgur.com/oAUldaP.jpg" alt = "Profile Pic" />
        </div>
        <div className = "center fl w-two-thirds db ma5">
          <h1><span>NAME:</span> {name} </h1>
          <p> {email} </p>          
          <p> 
            {entries} 
          </p>          
        </div>
      </div>
    );
  }
}

export default Profile;