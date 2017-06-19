(function($){
  'use strict';

  const urlTrack = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';

  //JQuery ajax req and dom writing
  let $searchResults = $('.search-results');
  let title = '';
  let artist = '';
  let genre = '';
  let artwork = '';

  $('.form-inline').on('submit', function(e){
    e.preventDefault();
    let searchParam = searchInput.value;
    searchParam = '&q=' + searchParam;
    $.ajax(urlTrack + searchParam).then(function(data){
      data.forEach(function(song){
        let title = song.title;
        let stream = song.stream_url;
        let artist = song.user.username;
        let genre = song.genre;
        if (!genre){
          genre = '(not provided)';
        }
        let artwork = song.artwork_url;
        if (!artwork){
          artwork = 'img/bird.jpg'
        }

        $searchResults.append(`<ul class="list-unstyled song-block">
                                <li><img class="img-thumbnail" src="${artwork}"></li>

                                <li id="stream-song"><a href="${stream}">Title: ${title}</a></li>

                                <li>Artist: ${artist}</li>

                                <li>Genre: ${genre}</li>

                              </ul>
                              `)
      })
    });

  let $streamSong = $('stream-song');
  $streamSong.on('click', function(){
    console.log($streamSong);
    $('audio').attr('src', /*?????*/)
  })

  })



}(jQuery));
