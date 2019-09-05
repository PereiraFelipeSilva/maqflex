import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/Carousels/MainCarousel';

class Main extends React.Component {

  render() {
    return (
      <>
        <Header />
        <MainCarousel />
      </>
    );
  }
}

export default Main;