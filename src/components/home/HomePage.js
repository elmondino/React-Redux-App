import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron alignMiddle">
        <h2>This App utilises React, Redux and React Router in ES6 for ultra-responsive web apps.</h2>
        <p>This application is based on <a href="https://www.pluralsight.com/courses/react-redux-react-router-es6">pluralsight.com</a> course: Building Applications with React and Redux in ES6 by Cory House</p>
        <p>Notice how quickly the pages load, as if it happens instantly!</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
