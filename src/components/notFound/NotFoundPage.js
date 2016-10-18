import React from 'react';
import {Link} from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="jumbotron alignMiddle">
        <h2>Sorry we were not able to locate the page</h2>
        <p>Default 404 Page error</p>
        <Link to="/" className="btn btn-default btn-lg">Return Home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
