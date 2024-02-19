//import React from 'react';

//Write code an execute it within a VS Code terminal before associating it with the App component
//it will be written eventually as a useEffect function with [input] as the dependency array
const urlForTerminalSetup = "grant_type=client_credentials&client_id=954d475f59ed4224ac3b1c9ee5230229&client_secret=5ce1374838084874a5e8e3fdfa7aff6d"

const accessToken = "BQBcoGO0jamfVxEwnoW2SuyNTLNw_ddJknPHQ9k4EiFKE_E9pjWETXX4Stq2N84BHUMxaBJhd72ojLciZgF_GgYF8QeBVOiOjOWUPvOz7rnnV1GiXIQ"

//Beg of test

async function spotifyGetAccessToken() {
    const accessTokenURL = 'https://accounts.spotify.com/api/token';
    const client_id = '954d475f59ed4224ac3b1c9ee5230229';
    const client_secret = '5ce1374838084874a5e8e3fdfa7aff6d';
    //const artistKey = '4AF9rlxnZLtau1tmBTzqaj';
    try {
        const response = await fetch(accessTokenURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        //console.log(data);
        //return data.access_token;
        sessionStorage.setItem('accessToken', data.access_token);
        return {
            accessToken: data.access_token,
            expiryTime: Date.now() + data.expires_in
        }
        /*console.log({
            accessToken: data.access_token,
            expiryTime: Date.now() + data.expires_in
        });*/
    } catch (error) {
        console.log(error);
    };
}

//End of test

async function spotifyApiCall(searchTerm) {
    const callSpotifyTokenAndExpiry = await spotifyGetAccessToken();
    const retrievedAccessToken = callSpotifyTokenAndExpiry.accessToken;
    const apiURL = 'https://api.spotify.com/v1';
    const endpointSearch = "/search?q=";
    const typeTrack = '&type=track';
    const limit = '&limit=20'
    //const searchTerm = 'test';
    //const artistKey = '4AF9rlxnZLtau1tmBTzqaj';
    const finishedURL = `${apiURL}${endpointSearch}${searchTerm}${typeTrack}${limit}`;
    try {
        const response = await fetch(finishedURL, {
            //method: 'GET',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + retrievedAccessToken
            }
        });
        const data = await response.json();
        return data.tracks.items;
        //console.log(data.tracks.items);
    } catch (error) {
        console.log(error);
    };
}

//Beg of test
/*var client_id = '954d475f59ed4224ac3b1c9ee5230229';
var client_secret = '5ce1374838084874a5e8e3fdfa7aff6d';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});*/
//End of test


//To get song name, album name, artist name, id, and uri - assuming array is being mapped over w/"track" as the argument:
//album = track.album.name
//song name = track.name
//artist name = track.artists - an array of objects?
//id = track.id
//uri = track.uri


//This is finally working to log the .album object
/*const testFunc = async () => {
    const testArray = await spotifyApiCall('swiss army');
    console.log(testArray);
}
testFunc();*/

//spotifyGetAccessToken();
//spotifyApiCall();
export default spotifyApiCall;