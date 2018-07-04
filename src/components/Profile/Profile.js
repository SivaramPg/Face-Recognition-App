import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { name, email, entries} = this.props.user;
    return(
      <div className = "br4  shadow-5 bg--white-025 db" style = {{ height: 'auto' }} >
        <div className = "fl w-50 pa2 db">
          <img className = "center ba br-100 bw2 ma2 pa2 db " style = {{width: 200, height: 200}} src = "http://i.imgur.com/oAUldaP.jpg" alt = "Profile Pic" />
        </div>
        <div className = "center fl w-50 db pa2">
          <h1><span className = "f5">NAME:</span> {name} </h1>
          <p><span className = "f5">EMAIL:</span> {email} </p>          
          <p>
            <span className = "f5">ENTRIES:</span> 
            {entries} 
          </p>          
        </div>
      </div>
    );
  }
}

export default Profile;