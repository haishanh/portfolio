import React from 'react';

const Footer = () => {

  return (
    <footer>
      <p>{/*
        <span>Made with </span>
        <span className="red">love</span>
        <span> by Haishan</span>
      */}
        <span>&#169; 2016 </span>
        <a href="http://hanhaishan.com">Haishan</a><br/>
        <span>Generated by </span>
        <a href="https://github.com/haishanh/portfolio">Portfolio</a>
      </p>
    </footer>
  );
}

// Footer.propTypes = {
//   name: PropTypes.string
// };

export default Footer;