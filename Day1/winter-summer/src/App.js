import React from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from './components/Loader';

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  render() {
    const { lat, errorMessage } = this.state;
    return (
      <div>
        {lat ? <SeasonDisplay lat={lat} errorMessage={errorMessage} /> : <Loader />}
      </div>
    );
  }
}

export default App;
