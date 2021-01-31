import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider as BumbagProvider } from 'bumbag';
import CreateListPage from './pages/CreateListPage'
import ListPage from './pages/ListPage'

function App() {
  return (
    <BumbagProvider>
      <Router>
        <Switch>
          <Route path='/list/:listId'>
            <ListPage />
          </Route>
          <Route path='/'>
            <CreateListPage />
          </Route>
        </Switch>
      </Router>
    </BumbagProvider>
  );
}

export default App;
