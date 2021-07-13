import React, { Component } from "react";
import Loader from "./assets/icons/loader.svg";
import "./App.scss";
import axios from "axios";
import { API_URL, API_KEY, count } from "./util";
import Images from "./components/Images/Images";

export default class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    axios
      .get(`${API_URL}?count=${count}&client_id=${API_KEY}`)
      .then((response) => {
        this.setState({
          photos: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { photos } = this.state;
    return (
      <div className='App'>
        <h1 className='header'>INFINITE SCROLL</h1>

        {photos.length === 0 ? (
          <div className='loader' id='loader'>
            <img src={Loader} alt='loading' />
          </div>
        ) : (
          <Images images={this.state.photos} />
        )}
      </div>
    );
  }
}
