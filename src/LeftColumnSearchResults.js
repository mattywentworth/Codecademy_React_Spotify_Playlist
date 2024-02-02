import React from 'react';
import styles from './LeftColumnSearchResults.module.css';

export default function LeftColumnSearchResults( {apiReturn} ) {

    const returnStatement = () => {
        {apiReturn.map((trackObject) => {
            return (
                <div>
                    <h4>{trackObject.name}</h4>
                    <h5>{trackObject.artists[0].name}</h5>
                    <h6>{trackObject.album.name}</h6>
                </div>
            );
        })}
    }

    return (
        <div className={styles.divWrapper}>
            <p>test beg</p>
            {apiReturn.map((track) => {
                return (
                    <div>
                        <h4>Track: {track.name}</h4>
                        <h5>Artist: {track.artists[0].name}</h5>
                        <h6>Album: {track.album.name}</h6>
                        <img src={track.album.images[1].url}/>
                    </div>
                )
            })}
            <p>test end</p>
        </div>
    );
}