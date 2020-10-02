import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import IndexPage from './views/IndexPage';
import CreatePage from './views/CreatePage';
import DetailPage from './views/DetailPage';
import EditPage from './views/EditPage';


function App() {
  return (
    <div >
      <Router>
        <IndexPage path="/" />
        <CreatePage path="/create" />
        <DetailPage path="/:id" />
        <EditPage path = "/:id/edit" />

      </Router>
    </div>
  );
}

export default App;
