# Spotify Playlist Creator


## Description
This project was a part of Codecademy's Full-Stack Career Path coursework. The purpose was to build on prior HTML, CSS, and JS coursework while practicing recent lessons on React.


## Features

Primary Requirements
- Search field that makes a GET request to Spotify's API
- Results section that displays the search results
- Name field to name the playlist
- Playlist section to list the songs the user has added to their new playlist
- Ability to delete songs already added to the playlist
- Save button that makes a PUSH request to save the playlist in the user's Spotify account

Additional Features I May Implement
- Save the name of the playlist and rename the playlist before saving the playlist
- Select multiple songs to delete
- Select all songs to delete
- Stats to display things like the number of songs added and most prevalent artist


## Technologies

- React
- HTML
- CSS

## Criticism

I kept in mind the programming pattern of having presentational components and container components, so I think I properly constructed all of the presentational components to react to state rather than controlling it. But I may have been able to better structure container components. This may be a simple enough project that it's ok that I handled all hooks (in this case, only useState and useEffect) in the App component, but I'd probably need to approach it differently with a more complex project.

I thought it would be a good idea to create a few simple initial components with simple CSS to get a rough outline of the app. Then I layered additional components and functionality within the simple design. I'm satisfied enough with the product, but I think I'd be better off thinking through the requirements and making a sketch of an app before writing the code in order to reduce the likelihood of complicated refactoring.

## Challenges While Building

A concept I've learned about but haven't practiced or use much is using the logical not operator. Not being well-acquainted with how to put this to use in different situations, I struggled a lot when building out the functionality to delete tracks from the playlist. I comfortably created and updated state for the tracks on the playlist and the tracks that were selected to be deleted from the playlist, but it took me an inordinate amount of time to discover how to filter the ...prev playlist state to only include tracks not in the tracksToDelete state array. I was structuring the .filter callback to be "track => tracksToDelete.includes(!track)," even though the logic of it didn't feel quite right. Eventually I got the delete function "working" in the sense that it wasn't returning an error, but it was deleting every track on the playlist rather than only the tracks selected to delete. Then I decided to Google "javascript array doesnotinclude," knowing there isn't a .doesNotInclude() method, and immediately got what I was looking for - include the logical not at the beginning of the filter condition.

This project was a good reminder that I need to read more about promises, async functions, and handling API requests. Those are all things I can figure out, but I'd like to rely less on copying, pasting, and tweaking existing code and being able to more quickly understand what's going on and write the code myself (especially API requests with fetch, headers, try/catch statements). While I was struggling to get the details from Spotify to render properly in the app, there was a long period where I overlooked simple sytax missing from my JSX that was preventing the array from being mapped over properly.

It took me a while to figure out how to properly use the event target when clicking to add a song to the playlist and translate all the necessary sond details into the list of songs on the playlist. The "add" button I created to add a song to the playlist had all the necessary song details in custom attributes, and I eventually found out that reading them as extensions of e.target(eg, e.target.namesong), doesn't work. When I used e.target.getAttribute('namesong') in order to add the song details to the playlistTracks state, it worked as needed. I'm not sure if getAttribute is actually a requirement, or if there's something else I was missing.

The modular approach to CSS files for each component with React made sense. But I neglected to consider that there would be "components" within components with styling that could be modular as well. For example, I had buttons in 2 different components, and I modified the styling of the buttons mulitple times. Instead of having a single button css module or top-level button styling, I styled the buttons individually in each component's CSS module. That added a lot of time bouncing between module files tweaking borders, background colors, font sizes, etc.

