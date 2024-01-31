import React, { useState } from 'react';
import styles from './RightColumn.module.css';
import RightColumnList from './RightColumnList';
import RightColumnDeletion from './RightColumnDeletion';

//Figure out how to set "default" text of input field the saved playlist name when editing the saved playlist name

export default function RightColumn( {statePlaylistTracks, stateSavedPlaylistName, stateEditedPlaylistName, handleEditedPlaylistNameChange, handlePlaylistNameFormSubmit, truthyEditing, stateEditing, handleSelectionForDeletion, numOfTracksToDelete, handleDeletion, handleAbandonDelete} ) {

    let playlistHeading;

    const handlePlaylistEditClick = () => {
        truthyEditing();
    }

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
    
    return (
        <div className={styles.divWrapper}>
            {playlistHeading}
            <RightColumnList statePlaylistTracks={statePlaylistTracks} handleSelectionForDeletion={handleSelectionForDeletion}>
                <RightColumnDeletion numOfTracksToDelete={numOfTracksToDelete} handleDeletion={handleDeletion} handleAbandonDelete={handleAbandonDelete} />
            </RightColumnList >
        </div>
    );
}