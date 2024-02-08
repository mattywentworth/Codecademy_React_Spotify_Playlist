import React from 'react';
import styles from './LeftColumnSearchResults.module.css';

//Change the mapped JSX to be a ul with keys?
/*
return (
    <div className={styles.divWrapper}>
        {apiReturn.map((track) => {
            return (
                <div className={styles.track} key={track.id}>
                    <img src={track.album.images[1].url} className={styles.img}/>
                    <table>
                        <tr>
                            <td>Track:</td>
                            <td>{track.name}</td>
                        </tr>
                        <tr>
                            <td>Artist:</td>
                            <td>{track.artists[0].name}</td>
                        </tr>
                        <tr>
                            <td>Album:</td>
                            <td>{track.album.name}</td>
                        </tr>
                    </table>
                    <div className={styles.trackInfo}>
                        <h4>Track: {track.name}</h4>
                        <h5>Artist: {track.artists[0].name}</h5>
                        <h6>Album: {track.album.name}</h6>
                    </div>
                    <button onClick={handleAddToPlaylistClick} className={styles.addButton} name={track.name} nametrack={track.name} namealbum={track.album.name} nameartist={track.artists[0].name} imgalbum={track.album.images[1].url} idtrack={track.id}>+</button>
                </div>
            )
        })}
    </div>
);
*/

export default function LeftColumnSearchResults( {apiReturn, handleAddToPlaylistClick} ) {

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
            {apiReturn.map((track) => {
                return (
                    <div className={styles.track} key={track.id}>
                        <img src={track.album.images[1].url} className={styles.img}/>
                        <div className={styles.trackInfo}>
                            <table>
                                <tr>
                                    <td className={styles.ttitle}>Track:</td>
                                    <td className={styles.tdetail}>{track.name}</td>
                                </tr>
                                <tr>
                                    <td className={styles.ttitle}>Artist:</td>
                                    <td className={styles.tdetail}>{track.artists[0].name}</td>
                                </tr>
                                <tr>
                                    <td className={styles.ttitle}>Album:</td>
                                    <td className={styles.tdetail}>{track.album.name}</td>
                                </tr>
                            </table>
                        </div>
                        <button onClick={handleAddToPlaylistClick} className={styles.addButton} name={track.name} nametrack={track.name} namealbum={track.album.name} nameartist={track.artists[0].name} imgalbum={track.album.images[1].url} idtrack={track.id}>+</button>
                    </div>
                )
            })}
        </div>
    );
}