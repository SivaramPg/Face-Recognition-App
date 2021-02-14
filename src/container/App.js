import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../components/navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank/Rank';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Profile from '../components/Profile/Profile';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
      line_linked: {
        shadow: {
          enable: true,
          color: '#3CA9D1',
          blur: 5,
        },
      },
    },
  },
};

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  demographicData: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    return data.outputs[0].data.regions.map((region) => {
      const clarifaiFace = region.region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      };
    });
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  //Trying to add demographic data of image containing single face
  demographicData = (responseObject) => {
    const age =
      responseObject.outputs[0].data.regions[0].data.face.age_appearance
        .concepts[0].name;
    const gender =
      responseObject.outputs[0].data.regions[0].data.face.gender_appearance
        .concepts[0].name;
    const culture =
      responseObject.outputs[0].data.regions[0].data.face
        .multicultural_appearance.concepts[0].name;
    console.log(age);
    return {
      age: age,
      gender: gender,
      culture: culture,
    };
  };

  setDemoData = (data) => {
    this.setState({ demographicData: data });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onEnter = (event) => {
    if (event.key === 'Enter') {
      this.onButtonSubmit();
    }
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://faceapp.sivarampg.com/api/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('https://faceapp.sivarampg.com/api/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
        this.setDemoData(this.demographicData(response));
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const {
      isSignedIn,
      route,
      user,
      box,
      imageUrl,
      demographicData,
    } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          route={route}
        />
        {route === 'home' || route === 'profile' ? (
          route === 'home' ? (
            <div>
              <Logo />
              <Rank name={user.name} entries={user.entries} />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onEnter={this.onEnter}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition
                box={box}
                imageUrl={imageUrl}
                demographicData={demographicData}
              />
            </div>
          ) : (
            <Profile user={user} />
          )
        ) : route === 'signin' ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
