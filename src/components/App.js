import React, { Component, PropTypes } from 'react';

import CardsContainer from './CardsContainer';
import Icon from './Icon';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="/">
            <Icon name="portfolio" />
          </a>
          <p>
            Hi there, I'm Haishan. Welcome to my portfolio.
          </p>
        </div>
        <CardsContainer />
        <Footer />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.node
// };

export default App;
