import React, { useEffect, useHistory } from 'react';
import '@fontsource/lato';
import '@fontsource/cabin';
import HomePage from './Components/HomePage';
import './Styles/App.css'
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {

  //This allows the view to be at the top of window when loading a new page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <div className='app'>
        <Route>
          {/* // maxWidth on Container is set to false to stop MaterialUI from auto-enforcing a max-width */}
          <Switch>
            <Route
              exact
              path="/"
              render={() => <HomePage className='root' />}
            />
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;