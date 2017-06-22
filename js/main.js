(function($){
  'use strict';

  const urlTrack = 'https://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f';

  //JQuery ajax req and dom writing
  let $searchResults = $('.search-results');

  $('.form-inline').on('submit', function(e){
    e.preventDefault();
    let searchParam = searchInput.value;
    searchParam = '&q=' + searchParam;
    $.ajax(urlTrack + searchParam).then(function(data){
      data.forEach(function(song){
        let title = song.title;
        let stream = (song.stream_url + '?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f');
        let artist = song.user.username;
        let genre = song.genre;
          if (!genre){
            genre = '(not provided)';
          };
        let artwork = song.artwork_url;
          if (!artwork){
            artwork = 'img/brown-bird.jpg'
          };

        //build dom
        $searchResults.append(`<ul class="list-unstyled song-block">
                                <li><img class="img-thumbnail" src="${artwork}"></li>

                                <li><a class="stream-song" href="${stream}">Title: ${title}</a></li>

                                <li>Artist: ${artist}</li>

                                <li>Genre: ${genre}</li>

                              </ul>
                              `)

        //play selected song and update headerArt div
        let $audio = $('audio');
        let $songBlock = $('.song-block');
        let $streamSong = $('.stream-song');

        $songBlock.on('click', function(e){
          e.preventDefault();
          let $currentSong = e.target.href;

          $audio.attr('src', $currentSong);

        });

      })
    });

  })

}(jQuery));
