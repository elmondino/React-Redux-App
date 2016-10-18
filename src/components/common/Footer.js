import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="alignMiddle">
      <Link to="/sdwew2" activeClassName="active">default 404 not found route</Link>
      {" | "}
      <a href="https://www.linkedin.com/in/elmonds-kreslins">LinkedIn Profile</a>
    </footer>
  );
};

// Footer.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Footer;
