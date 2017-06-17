(function(){
  'use strict';

  const urlTrack = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';
  const urlPlaylist = 'https://api.soundcloud.com/playlists?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';

  let trackSearchQuery = 'Coldplay';
  let trackParams = '&q=' + trackSearchQuery;

  let playlistSearchQuery = '';
  let playlistParams = '&q=' + playlistSearchQuery

  let domHeader = document.querySelector('.page-header');
  let searchPlayDiv = document.querySelector('.search-play-div');
  let searchForm = document.querySelector('.track-search');
  let trackPlay = document.querySelector('.track-play');
  let trackInfoDiv = document.querySelector('.track-info');
  let recommends = document.querySelector('.recommends');

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Submitted!")
    let trackSearchEntry = e.target.value;
    console.log(trackSearchEntry);
  })




  fetch((urlTrack + trackParams)).then(function(res) {
    res.json().then(function(data){
      data.forEach(function(i){
        let title = i.title;
        let artist = i.user.username;
        let genre = i.genre;
        let artwork = i.artwork_url;
        console.log('TrackSearch: ', title, artist, genre, artwork);
        nowPlaying(title, artist, genre, artwork);
      });

    })

  })
  //
  // fetch((urlPlaylist + playlistParams)).then(function(res) {
  //   res.json().then(function(data){
  //     data.forEach(function(data){
  //       let title = data.title;
  //       let artist = data.user.username;
  //       let genre = data.genre;
  //       // console.log('PlaylistSearch: ', title, artist, genre);
  //     });
  //   })
  // })

function nowPlaying (title, artist, genre, artwork){
  let trackInfoData = document.createElement('ul');
  trackInfoData.setAttribute('class', 'list-inline list-unstyled');
  trackInfoDiv.appendChild(trackInfoData);

  let artworkDiv = document.createElement('li');
  artworkDiv.setAttribute('id', 'artworkDiv');
  let titleDiv = document.createElement('li');
  titleDiv.setAttribute('id', 'titleDiv');
  let artistDiv = document.createElement('li');
  artistDiv.setAttribute('id', 'artistDiv');
  let genreDiv = document.createElement('li');
  genreDiv.setAttribute('id', 'genreDiv');


  trackInfoData.appendChild(artworkDiv);
  trackInfoData.appendChild(titleDiv);
  trackInfoData.appendChild(artistDiv);
  trackInfoData.appendChild(genreDiv);

  let artworkImg = document.createElement('div');
  artworkDiv.appendChild(artworkImg);
  artworkImg.innerHTML = `<img src="${artwork}">`;

  let titleText = document.createElement('h4');
  titleDiv.appendChild(titleText);
  titleText.textContent = title;

  let artistText = document.createElement('h5');
  artistDiv.appendChild(artistText);
  artistText.textContent = artist;

  let genreText = document.createElement('p');
  genreDiv.appendChild(genreText);
  genreText.textContent = genre;


}




}());
