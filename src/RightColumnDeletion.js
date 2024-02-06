import React, { useEffect } from 'react';
import styles from './RightColumnDeletion.module.css';

//set display to none
//create functions to handle a click on yes or no
//if yes - remove songs from state array and reset display to none after the click
//if no - deselect all songs and set display back to hidden

export default function RightColumnDeletion( {numOfTracksToDelete, handleDeletion, handleAbandonDelete} ) {

    let trackDeletionMessage;
    if (numOfTracksToDelete == 1) {
        trackDeletionMessage = 'Delete 1 track?';
    } else {
        trackDeletionMessage = `Delete ${numOfTracksToDelete} tracks?`;
    }

    return (
        <div className={styles.divWrapper} id="delete-songs-div">
            <h3>{trackDeletionMessage}</h3>
            <button className={styles.button} onClick={handleDeletion}>Yes</button>
            <button className={styles.button} onClick={handleAbandonDelete}>No</button>
        </div>
    )
}