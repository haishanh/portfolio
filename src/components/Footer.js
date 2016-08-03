import React from 'react';

import Icon from './Icon';

const Footer = () => {

  return (
    <footer>
      <p>{/*
        <span>Made with </span>
        <span className="red">love</span>
        <span> by Haishan</span>
      */}
        footer placeholder
      </p>
      <a href='https://github.com/haishanh/moba-react'>
        <Icon name="github" />
      </a>
    </footer>
  );
}

// Footer.propTypes = {
//   name: PropTypes.string
// };

export default Footer;