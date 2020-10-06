import React from 'react';

import NoteList from './NoteList.js'
import FolderList from './FolderList.js'
import { Route, Link, Switch } from 'react-router-dom';
import dummyStore from './dummy-store.js';

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

  // renderMainRoute() {
  //  const dummyStoreArray = Object.keys(dummyStore)
  //   console.log(dummyStoreArray)
  //   const { notes, folders } = this.state
  //   const mappedDummy = dummyStoreArray.map(() => <NoteList key={dummyStoreArray.id} />)
  //   return (mappedDummy)
  // }

  // renderFolderList(){

  // }

  // renderNoteList(){

  // }


  render() {
    // console.log(this.state.notes)
    return (
      <div className="App">
        <h1 className="header">Noteful</h1>
        <main className="main">

          <FolderList folders={this.state.folders} />
          <NoteList notes={this.state.notes} />

        </main>

      </div>

    );
  }

}

export default App;
