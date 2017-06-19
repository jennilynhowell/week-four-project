(function(){
  'use strict';

  const urlTrack = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';
  // const urlPlaylist = 'https://api.soundcloud.com/playlists?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';

  let domHeader = document.querySelector('.page-header');
  let searchPlayDiv = document.querySelector('.search-play-div');
  let searchForm = document.querySelector('.track-search');
  let searchInput = document.getElementById('searchInput');
  let trackPlay = document.querySelector('.track-play');
  let trackListDiv = document.querySelector('.track-list');
  let recommends = document.querySelector('.recommends');

  //capture str entered in search field and perform fetch to get some song suggestions back

  searchForm.addEventListener('submit', fetchSearch);

  function fetchSearch (e){
    e.preventDefault();
    var searchParam = searchInput.value;
    console.log(searchParam);
    searchParam = '&q=' + searchParam;

    fetch(urlTrack + searchParam).then(function(res) {
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
  }

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
  let trackListData = document.createElement('ul');
  trackListData.setAttribute('class', 'list-inline list-unstyled');
  trackListData.appendChild(trackListDiv);

  let artworkDiv = document.createElement('li');
  artworkDiv.setAttribute('id', 'artworkDiv');
  let titleDiv = document.createElement('li');
  titleDiv.setAttribute('id', 'titleDiv');
  let artistDiv = document.createElement('li');
  artistDiv.setAttribute('id', 'artistDiv');
  let genreDiv = document.createElement('li');
  genreDiv.setAttribute('id', 'genreDiv');

  trackListData.appendChild(artworkDiv);
  trackListData.appendChild(titleDiv);
  trackListData.appendChild(artistDiv);
  trackListData.appendChild(genreDiv);

  let artworkImg = document.createElement('div');
  artworkDiv.appendChild(artworkImg);
  if (artwork) {
    artworkImg.innerHTML = `<img src="${artwork}">`;
  };


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
