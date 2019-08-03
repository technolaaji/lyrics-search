import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';
class App extends React.Component {
  render(){
    return (
      <Provider>
      <Router>
        <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/lyrics/track/:id' component={Lyrics} />
          </Switch>
        </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
  
}

export default App;
