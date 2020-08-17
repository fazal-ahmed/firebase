import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostNews from './component/Postnews/PostNews';


function App() {

  
  return (
    <React.Fragment>
    <Router>
      <Switch>
        <Route path="/">
          <PostNews/>
        </Route>
    </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
