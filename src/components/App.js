import React, { Component, PropTypes } from 'react';

import ListContainer from './ListContainer';
import Icon from './Icon';
import Search from './Search';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="/">
            <Icon name="doba" />
          </a>
          <div className="search-wrapper">
            <Search />
          </div>
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
