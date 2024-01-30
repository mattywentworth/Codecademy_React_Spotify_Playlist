import React, { useState } from 'react';
import styles from './RightColumn.module.css';
import RightColumnList from './RightColumnList';

//Figure out how to set "default" text of input field the saved playlist name when editing the saved playlist name

export default function RightColumn( {statePlaylistTracks, stateSavedPlaylistName, stateEditedPlaylistName, handleEditedPlaylistNameChange, handlePlaylistNameFormSubmit, truthyEditing, stateEditing} ) {
    
    //const [editing, setEditing] = useState(false); Part of initial "editing" attempt
//FIGURE OUT A WAY TO PULL EDITING STATE OUT OF THIS COMPONENT AND PUT INTO APP COMPONENT AND PASS DOWN.
//NEED TO BE ABLE TO ADD A "IF EDITING == TRUE" statement to the formsubmit component

    let playlistHeading;

    //Cooming up with a way to handle edits to playlist name
    const handlePlaylistEditClick = () => {
        truthyEditing();
        /*playlistHeading = (
            <div>
                <h2>Change Name from {stateSavedPlaylistName} to:</h2>
                <form className={styles.playlistHeading}>
                    <input type="text" value={stateSavedPlaylistName}></input>
                    <button type="submit">Save Name</button>
                </form>
            </div>
        );*/
    }
//Initial functioning if/then
    /*if (stateSavedPlaylistName == '') {
        playlistHeading = (
            <div className={styles.playlistHeading}>
                <h2>Name Your Playlist</h2>
                <form onSubmit={handlePlaylistNameFormSubmit}>
                    <input type="text" onChange={handleEditedPlaylistNameChange}></input>
                    <button type="submit">Save Name</button>
                </form>
            </div>
        );
    } else {//This isn't working yet, because after onClick event, stateSavedPlaylistName still equals what it was prior too the click
        playlistHeading = (
            <div className={styles.playlistHeading}>
                <h2>{stateSavedPlaylistName}</h2>
                <p onClick={handlePlaylistEditClick}>✏️</p>
            </div>
        );
    }*/
//End of initial functioning if/then

    //Beginning of test
    if (stateEditing == false) {
        if (stateSavedPlaylistName == '') {
            playlistHeading = (
                <div className={styles.playlistHeading}>
                    <h2>Name Your Playlist</h2>
                    <form onSubmit={handlePlaylistNameFormSubmit}>
                        <input type="text" onChange={handleEditedPlaylistNameChange} value={stateEditedPlaylistName}></input>
                        <button type="submit">Save Name</button>
                    </form>
                </div>
            );
        } else {
            playlistHeading = (
                <div className={styles.playlistHeading}>
                    <h2>{stateSavedPlaylistName}</h2>
                    <p onClick={handlePlaylistEditClick}>✏️</p>
                </div>
            );
        }
    } else {
        playlistHeading = (
            <div className={styles.playlistHeading}>
                <h2>Rename Your Playlist</h2>
                <form onSubmit={handlePlaylistNameFormSubmit}>
                    <input type="text" onChange={handleEditedPlaylistNameChange} value={stateEditedPlaylistName}></input>
                    <button type="submit">Save Name</button>
                </form>
            </div>
        );
    }
    //End of test
    
    return (
        <div className={styles.divWrapper}>
            {playlistHeading}
            <RightColumnList statePlaylistTracks={statePlaylistTracks}/>
        </div>
    );
}