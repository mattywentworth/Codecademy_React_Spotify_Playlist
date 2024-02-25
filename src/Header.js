import React from 'react'
import styles from './Header.module.css';

export default function Header( {statePlaylistName, statePlaylistTracks, stateUsername, stateUserAuthorized, handleGetUsernameID, stateUserAccessToken, funcGetUsername, handleCreatePlaylist, stateSetAuthExpired, stateAuthTimeRemaining} ) {

    var client_id = '954d475f59ed4224ac3b1c9ee5230229';
    var redirect_uri = 'http://localhost:3000';

    //var state = generateRandomString(16);

    //localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    //url += '&state=' + encodeURIComponent(state);

    
    //MUST UPDATE HOW AUTHORIZATION IS HANDLED
    //Create a state of Authorized = true or false.
    //Authorized will default to false and will update based on expiration value?
    //When user Authorization occurs, there needs to be an expiration time set, equal to Date.now  + value from api reutrn (60 minutes)
    //When Date.now == expiration, prompt user to re-authorize the app?
    //When Date.now == expiration minus 5 minutes, prompt user to save playlist before being required to re-authorize

    const handleAuth = () => {
        if (window.location.hash) {
        } else {
            window.location = url;
            //document.getElementById("main-main").style.display = 'flex';
        };
    }

    let authMessage;
    if (stateAuthTimeRemaining >= 1) {
        authMessage = <p>Account reauthorization required in: {stateAuthTimeRemaining} minutes</p>
    } else if (stateAuthTimeRemaining == null || stateAuthTimeRemaining < 1) {
        authMessage = <p></p>
    }

    /*
    PRESERVE ORIGINAL BUTTON
    <button onClick={handleAuth} className={styles.button} id="test-header">Save Playlist to Spotify</button>
    */

    /*const handleGetUsernameID = async () => {
        const userName = await spotifyGetUsername(stateUserAccessToken);
        funcGetUsername(userName);
      }
    */

    let button;
    if (stateUserAuthorized == false) {
        button = <button onClick={handleAuth} className={styles.buttonAuth} id="test-header">Authorize Account + Build Playlist</button>
    } else if (stateUserAuthorized == true && statePlaylistTracks.length > 0 && statePlaylistName) {
        button = <button onClick={handleCreatePlaylist} className={styles.buttonSave} id="test-header">Save Playlist to Spotify</button>
    }

    return (
        <div className={styles.divWrapper}>
            <div className={styles.divLeft}>                
            </div>
            <div className={styles.divCenter}>
                <h1>Spotify Playlist Generator</h1>
            </div>
            <div className={styles.divRight}>
                {button}
                <p id="auth-alert"></p>
            </div>
        </div>
    );
}