import React, { Component, PropTypes } from 'react';

import ListContainer from './ListContainer';
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
        <ListContainer />
        <Footer />
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.node
// };

export default App;
