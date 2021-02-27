import React from 'react';
import { Route, Router } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </div>
  );
}

export default App;
