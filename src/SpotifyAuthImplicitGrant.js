//Authorization request using Implicit Grant approach. Codecademy project guidelines suggest this, but Spotify 
//recommends against using it due to potential for security issues.


const spotifyAuthImplicitGrant = async () => {
    var client_id = '954d475f59ed4224ac3b1c9ee5230229';
    var redirect_uri = 'http://localhost:3000/';

    //var state = generateRandomString(16);

    //localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    //url += '&state=' + encodeURIComponent(state);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                //'Authorization' : `Bearer ${sessionStorage.getItem('accessToken')}`,
                'Authorization': `Bearer BQBewgTxIrR-cs4sFSuah0mcAtJrgXlNyX_3hb2JtWGavV1BXtRnep5GIq7W37FbuQ4fMjaWaRX4U2knFaGV5Vs23ubENgTkEq_CljrXQxq4iXmsdaI`,
            }
        });
        const data = response; //await response.json();
        //return data;
        console.log(data);
        console.log(url);
    } catch(error) {
        console.log(error);
    };
}

spotifyAuthImplicitGrant();
//console.log(url);