import React, { useState, useEffect } from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './App.css';
import spotifyApiCall from './SpotifyAPICall';
import spotifyGetUsername from './SpotifyGetUsername';
//import { sampleTracksArray } from './SampleTracksArray'; Putting this in place may be a waste of time. Just figure out the API work

/*
Must do items:
-Add a button to sync playlist with Spotify
-Add aria labels for accessibility
-Properly construct error message of some kind when user tries to add a track already on the playlist
*/

function App() {
  
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [input, setInput] = useState('');
  const [editedPlaylistName, setEditedPlaylistName] = useState('');
  const [savedPlaylistName, setSavedPlaylistName] = useState('');
  const [editing, setEditing] = useState(false);
  const [tracksToDelete, setTracksToDelete] = useState([]);
  const [apiReturn, setApiReturn] = useState([]);
  const [userAuthorized, setUserAuthorized] =  useState(false);
  const [usernameID, setUsernameID] = useState(null);
  const [userAccessToken, setUserAccessToken] = useState(null);
  //I think there will be an issue of needing to reset the value of 'input' to an empty string after form is submitted. It needs to equal only what is typed in input field
  


  //Handling a manually typed entry to add to the playlist and adding it to the playlist
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  //Needs to be deleted at some point
  /*const handleFormSubmit = (e) => {
    e.preventDefault();
    if (playlistTracks.includes(input) == false) {
      setPlaylistTracks((prev) => [input, ...prev]);
      setInput('');
    } else {//useEffect will be important here, because this message will need to react to {input} changing
      //alert(`${input} is already on your playlist and cannot be added again.`)
      document.getElementById('test-header').innerHTML = `${input} is already on your playlist.`;
      //setTimeout(() => document.getElementById('test-header').style.display = 'none', 3000);//This only works on the first render? Because useEffect is needed?
    }
    
  }*/

  //Handling calling Spotify's API with a search term
  const handleFormSubmitAPI = async (e) => {
    e.preventDefault();
    const spotifyApiReturn = await spotifyApiCall(input);
    setApiReturn(spotifyApiReturn);
  }

  //Handling calling Spotify's API after authorization in order to get the username ID
  const handleGetUsernameID = async () => {
    const userName = await spotifyGetUsername(userAccessToken);
    setUsernameID(userName);
  }

  //Handling adding a song result to the playlist and preventing a song from being added twice
  const handleAddToPlaylistClick = (e) => {
    if (playlistTracks.find(track => track.id == e.target.getAttribute('idtrack')) == undefined) {
      setPlaylistTracks((prev) => [{id: e.target.getAttribute('idtrack'), nameTrack: e.target.getAttribute('nametrack'), nameAlbum: e.target.getAttribute('namealbum'), nameArtist: e.target.getAttribute('nameartist'), imgAlbum: e.target.getAttribute('imgalbum'), uriTrack: e.target.getAttribute('uritrack')}, ...prev]);
    };
  }

  //Handling naming and renaming the playlist
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

  //Handling deletions of tracks on the playlist
  
  const handleSelectionForDeletion = (e) => {
    if(!tracksToDelete.includes(e.target.id) /*tracksToDelete.find(track => track) == undefined*/ ) {
      setTracksToDelete((prev) => [...prev, e.target.id /*e.target.id*/]);
    } else {
      setTracksToDelete((prev) => prev.filter(track => e.target.id != track));
    };
  }

  const handleAbandonDelete = () => {
    setTracksToDelete([]);
  }

  //Need to check each value in the ...prev array and include it in the new array if it is not a value in tracksToDelete
  const handleDeletion = () => {
    setPlaylistTracks((prev) => prev.filter((track => tracksToDelete.find(trackToDelete => trackToDelete == track.id) == undefined  /*!tracksToDelete.includes(track)*/))
    /*setPlaylistTracks((prev) => {
      for (let i of prev) {
        if (tracksToDelete.includes(!i)) {

        };
      }*/
    );
      //return ['test', ...prev];
    //);
    setTracksToDelete([]);
  }

  const numOfTracksToDelete = tracksToDelete.length;

  //This is functioning properly, but do i have to use useEffet to change the color of the delete button for each track?
  
  useEffect(() => {
    
    for (const track of playlistTracks) {
      if (tracksToDelete.includes(track.id) == true) {
        document.getElementById(track.id).style.backgroundColor = 'red';
      } else {
        document.getElementById(track.id).style.backgroundColor = 'black';
      }
    };
    if (playlistTracks.length >= 0 && tracksToDelete.length == 0) {
      document.getElementById('delete-songs-div').style.display = 'none';
    } else if (playlistTracks.length > 0 && tracksToDelete.length != 0) {
      document.getElementById('delete-songs-div').style.display = 'flex';
    };
  }, [tracksToDelete])

  useEffect(() => {
    if (playlistTracks.length > 0 && savedPlaylistName) {
      document.getElementById('test-header').style.display = 'block';
    } else {
      document.getElementById('test-header').style.display = 'none';
    };
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const authAccessToken = params.get('access_token');
    setUserAccessToken(authAccessToken);
    
    if (authAccessToken) { //This probably isn't necessary. Just have some logic for if userAccessToken exists?
      setUserAuthorized(true);
      /*const userName = spotifyGetUsername(userAccessToken);
      setUsernameID(userName);*/
    }
  })

  //Use useEffect to get spotifyGetUsername, and store it in state - ALONG WITH EXPIRATION DATE FUNCTIONALITY

  /*
  useEffect(() => {
    //grab the access  token from the # in the url, store it in state, use that state to call Spotify API to get  users user_id

    if (userAuthorized == true) {
      //use imported API call to get spotify username of authorized user_id
      const userID = spotifyGetUsername(userAccessToken);
      setUsernameID(userID);
    }
  }, [userAuthorized])
  */

  /*
  let jsxMain;
  if (userAuthorized == false) {
    jsxMain = <button>Log In to Spotify to Create Playlist</button> 
  } else {
    (
      <main className="Main">
          <LeftColumn handleInputChange={handleInputChange} stateInput={input} handleFormSubmitAPI={handleFormSubmitAPI} apiReturn={apiReturn} handleAddToPlaylistClick={handleAddToPlaylistClick}/>
          <RightColumn stateSavedPlaylistName={savedPlaylistName} handleEditedPlaylistNameChange={handleEditedPlaylistNameChange} handlePlaylistNameFormSubmit={handlePlaylistNameFormSubmit} statePlaylistTracks={playlistTracks} truthyEditing={truthyEditing} stateEditing={editing} handleSelectionForDeletion={handleSelectionForDeletion} numOfTracksToDelete={numOfTracksToDelete} handleDeletion={handleDeletion} handleAbandonDelete={handleAbandonDelete} />
      </main>
    );
  }
  */
  /*
  PRESERVED MAIN ELEMENT
  <main className="Main">
        <LeftColumn handleInputChange={handleInputChange} stateInput={input} handleFormSubmitAPI={handleFormSubmitAPI} apiReturn={apiReturn} handleAddToPlaylistClick={handleAddToPlaylistClick}/>
        <RightColumn stateSavedPlaylistName={savedPlaylistName} handleEditedPlaylistNameChange={handleEditedPlaylistNameChange} handlePlaylistNameFormSubmit={handlePlaylistNameFormSubmit} statePlaylistTracks={playlistTracks} truthyEditing={truthyEditing} stateEditing={editing} handleSelectionForDeletion={handleSelectionForDeletion} numOfTracksToDelete={numOfTracksToDelete} handleDeletion={handleDeletion} handleAbandonDelete={handleAbandonDelete} />
  </main>
  */

  return (
    <div className="App">
      <header>
        <Header statePlaylistTracks={playlistTracks} statePlaylistName={savedPlaylistName} stateUsername={usernameID} stateUserAuthorized={userAuthorized} handleGetUsernameID={handleGetUsernameID} stateUserAccessToken={userAccessToken} funcGetUsername={spotifyGetUsername}/>
      </header>
      <main className="Main">
        <LeftColumn handleInputChange={handleInputChange} stateInput={input} handleFormSubmitAPI={handleFormSubmitAPI} apiReturn={apiReturn} handleAddToPlaylistClick={handleAddToPlaylistClick}/>
        <RightColumn stateSavedPlaylistName={savedPlaylistName} handleEditedPlaylistNameChange={handleEditedPlaylistNameChange} handlePlaylistNameFormSubmit={handlePlaylistNameFormSubmit} statePlaylistTracks={playlistTracks} truthyEditing={truthyEditing} stateEditing={editing} handleSelectionForDeletion={handleSelectionForDeletion} numOfTracksToDelete={numOfTracksToDelete} handleDeletion={handleDeletion} handleAbandonDelete={handleAbandonDelete} />
      </main>
    </div>
  );
}

export default App;
