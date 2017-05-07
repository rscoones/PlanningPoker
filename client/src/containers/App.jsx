import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from 'app/components/NavBar/App.jsx';
import Home from './Home/App.jsx';
import Poker from './Poker/App.jsx';
import Pokers from './Pokers/App.jsx';

const styles = {
  container: {
    margin: 10
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={styles.container}>
          <Route exact path="/" component={Home}/>
          <Route path="/pokers/:id" component={Pokers}/>
          <Route path="/pokers" exact component={Pokers}/>
          <Route path="/poker/:id" component={Poker}/>
        </div>
      </div>
    </Router>
  )
}

export default App
