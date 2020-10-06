import React from 'react';

import Main from './Main.js'
//import Folder from './Folder.js'
import { Route, Link } from 'react-router-dom';
import dummyStore from './dummy-store.js'

class App extends React.Component {

  state = {
    notes: [1, 2],
    folders: []
  }

  // renderNoteRoute() {

  // }

  renderMainRoute() {
    const { notes, folders } = this.state
    this.state = dummyStore.map(() => <Main />)
    return (this.state)
  }




  render() {
    return (
      <div className="App">
        <h1 className="header">Noteful</h1>
        <main className="main">
          {this.renderMainRoute}
        </main>

      </div>

    );
  }

}

export default App;
