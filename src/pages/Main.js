import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousels/MainCarousel';

class Main extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Carousel />
      </>
    );
  }
}

export default Main;