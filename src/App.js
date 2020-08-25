import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import HomeVideo from './video/reef-md-13s-compressed.mp4';

export default class App extends Component {
  state = {
    // loading: true
  };

  // componentDidMount() {
  //   if (this.video) {
  //     this.video.addEventListener("loadeddata", () => {
  //       this.setState({ loading: false });
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.video) {
  //     this.video.removeEventListener("loadeddata", () => {
  //     });
  //   }
  // }

  render () {
    return (
      <Router>
        <div clasName="App">
          <CustomNavbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <CustomFooter/>
          <div className="contain">
            <video 
              ref={ref => (this.video = ref)} 
              autoPlay 
              loop 
              muted 
              style={{
                  position: "fixed",
                  width: "auto",
                  left: 0,
                  bottom: 0,
                  zIndex: -2,
                  poster: "assets/reef.jpg",
                  objectFit: "cover",
                  opacity: 0.4,
                  // opacity: this.state.loading ? 0 : 0.4,
                  // transition: "opacity, 2s ease-in-out"
                }}
              >
                  <source src={HomeVideo} type="video/mp4"/>
            </video>
          </div>
        </div>
      </Router>
    );
  }
}