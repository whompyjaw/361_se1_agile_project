import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './components/random/pages/Login'; // This is needed for the routes
import Navbar from './components/random/navbar/Navbar';
import Charity from './components/charity/charity';

// TODO: Need an App class instead of a function 
function App() {

  return (
    <Router>
      <Navbar/>
      {/* Route to index page */}
      <Route exact path="/" render={props => (
        <React.Fragment>
          <div className="App">
            <body>
              <h1> yooooooooooooooo! if you see this than your app loaded, dawg!</h1>
            </body> 
          </div>
        </React.Fragment>
      )} /> 

      {/* Route to login page */}
      <Route path="/login" component={Login} />
      <Route path="/charity" component={Charity} />

    </Router>
  );
}

export default App;
