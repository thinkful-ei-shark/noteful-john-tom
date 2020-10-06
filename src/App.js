import React from 'react';

import Main from './Main.js'
//import Folder from './Folder.js'
import { Route, Link } from 'react-router-dom';
import dummyStore from './dummy-store.js'

class App extends React.Component {

  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
  }
  // renderNoteRoute() {

  // }

  renderMainRoute() {
    this.state = dummyStore.map((item) => <Main product={item} />)
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
