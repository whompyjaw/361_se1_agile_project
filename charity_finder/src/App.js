import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import Login from './components/random/pages/Login'; // This is needed for the routes
import Navbar from './components/random/navbar/Navbar';
import Charity from './components/charity/charity';
import Charity1 from './components/charity/charity1';
import Charity2 from './components/charity/charity2';
import CharitySearch from './components/charity/charitySearch';
import BeneficiarySearch from './components/beneficiary/pages/BeneficiaryPage';
import charityResultsSearch from './components/charity/charityResultsSearch';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        {/* Route to index page */}
        <Route exact path="/" render={props => (
          <React.Fragment>
            <div className="App">
              <body>
                <h1>Charity Finder</h1>
                <p>Find charities you can trust!</p>
                <h2>Charities Close to Their Goal</h2>
                <Link to='/charity'>Cats</Link>
                <div className="w3-light-grey">
                  <div className="w3-container w3-green" id="cat-status-bar">95%</div>
                </div>

                <Link to='/charity1'>Dogs</Link>
                <div className="w3-light-grey">
                  <div className="w3-container w3-red" id="dog-status-bar">88%</div>
                </div>

                <Link to='/charity2'>Koalas</Link>
                <div className="w3-light-grey">
                  <div className="w3-container w3-blue" id="koala-status-bar">75%</div>
                </div>
              </body> 
            </div>
          </React.Fragment>
        )} /> 

        {/* Route to login page */}
        <Route path="/login" component={Login} />
        <Route path="/charity" component={Charity} />
        <Route path="/charity1" component={Charity1} />
        <Route path="/charity2" component={Charity2} />
        <Route path="/charitySearch" component={CharitySearch} />
        <Route path="/beneficiary" component={BeneficiarySearch} />
        <Route path="/charityResultsSearch" component={charityResultsSearch} />

      </Router>
    );
  }
}

export default App;
