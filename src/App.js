import React from 'react';

import NoteList from './NoteList.js'
//import Folder from './Folder.js'
import { Route, Link } from 'react-router-dom';
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




  render() {
    // console.log(this.state.notes)
    return (
      <div className="App">
        <h1 className="header">Noteful</h1>
        <main className="main">
          <NoteList notes={this.state.notes}/>
        </main>

      </div>

    );
  }

}

export default App;
