import React, { useState } from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './App.css';

function App() {
  
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [input, setInput] = useState('');
  const [editedPlaylistName, setEditedPlaylistName] = useState('');
  const [savedPlaylistName, setSavedPlaylistName] = useState('');
  const [editing, setEditing] = useState(false);
  //I think there will be an issue of needing to reset the value of 'input' to an empty string after form is submitted. It needs to equal only what is typed in input field
  //Add a button to sync playlist with Spotify


  const handleEditedPlaylistNameChange = (e) => {
    setEditedPlaylistName(e.target.value);
  }

  const truthyEditing = () => setEditing(true);

  const handlePlaylistNameFormSubmit = (e) => {
    e.preventDefault();
    setSavedPlaylistName(editedPlaylistName);
    if (editing == true) {
      setEditing(false);
    };
  }



  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPlaylistTracks((prev) => [input, ...prev]);
    setInput('');
  }
  
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="Main">
        <LeftColumn handleInputChange={handleInputChange} stateInput={input} handleFormSubmit={handleFormSubmit}/>
        <RightColumn stateSavedPlaylistName={savedPlaylistName} handleEditedPlaylistNameChange={handleEditedPlaylistNameChange} handlePlaylistNameFormSubmit={handlePlaylistNameFormSubmit} statePlaylistTracks={playlistTracks} truthyEditing={truthyEditing} stateEditing={editing}/>
      </main>
    </div>
  );
}

export default App;
