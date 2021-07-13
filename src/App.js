import React, { Component } from "react";
// import Loader from "./assets/icons/loader.svg";
import "./App.scss";
import axios from "axios";
import { API_URL, API_KEY } from "./util";
import Loader from "./components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

let count = 5;

export default class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    axios
      .get(`${API_URL}?count=${count}&client_id=${API_KEY}`)
      .then((response) => {
        count = 15;
        this.setState({
          photos: response.data,
        });
      });
  }

  getPhotos = () => {
    axios
      .get(`${API_URL}?count=${count}&client_id=${API_KEY}`)
      .then((response) => {
        this.setState({
          photos: response.data,
        });
      });
  };

  addPhotos = () => {
    axios
      .get(`${API_URL}?count=${count}&client_id=${API_KEY}`)
      .then((response) => {
        console.log(response);
        const photosArray = this.state.photos;
        const fetchedPhotos = response.data;
        fetchedPhotos.forEach((photo) => {
          photosArray.push(photo);
        });
        console.log(photosArray);
        // photosArray.push(response.data);
        this.setState({
          photos: photosArray,
        });
      })
      .catch((error) => console.log(error));
  };

  // windowScrollHandler = () => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.offsetHeight - 1000
  //     ) {
  //       this.addPhotos();
  //     }
  //   });
  // };

  render() {
    const { photos } = this.state;
    return (
      <div className='App'>
        <h1 className='header'>INFINITE SCROLL</h1>

        <InfiniteScroll
          dataLength={photos.length}
          next={this.addPhotos}
          hasMore={true}
          loader={<Loader />}
          className='image-container'>
          {photos.map((image) => (
            <a href={image.links.html} key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                title={image.alt_description}
              />
            </a>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
