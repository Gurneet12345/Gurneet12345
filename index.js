document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'YOUR_API_KEY';
    const jsonData = 
    {
       "page":1,
       "results":[
          {
             "adult":false,
             "backdrop_path":"/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
             "genre_ids":[
                35,
                10749
             ],
             "id":1072790,
             "original_language":"en",
             "original_title":"Anyone But You",
             "overview":"After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
             "popularity":2086.66,
             "poster_path":"/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
             "release_date":"2023-12-21",
             "title":"Anyone But You",
             "video":false,
             "vote_average":6.884,
             "vote_count":585
          },
          {
             "adult":false,
             "backdrop_path":"/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
             "genre_ids":[
                28,
                53,
                10752
             ],
             "id":969492,
             "original_language":"en",
             "original_title":"Land of Bad",
             "overview":"When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
             "popularity":1296.744,
             "poster_path":"/bIeEMMvfzgbMBtYaEWtxrFnt6Vo.jpg",
             "release_date":"2024-01-25",
             "title":"Land of Bad",
             "video":false,
             "vote_average":7.307,
             "vote_count":119
          },
          {
             "adult":false,
             "backdrop_path":"/meyhnvssZOPPjud4F1CjOb4snET.jpg",
             "genre_ids":[
                16,
                28,
                12,
                35,
                10751
             ],
             "id":940551,
             "original_language":"en",
             "original_title":"Migration",
             "overview":"After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
             "popularity":1044.512,
             "poster_path":"/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
             "release_date":"2023-12-06",
             "title":"Migration",
             "video":false,
             "vote_average":7.642,
             "vote_count":724
          },
          {
             "adult":false,
             "backdrop_path":"/criPrxkTggCra1jch49jsiSeXo1.jpg",
             "genre_ids":[
                878,
                12,
                28
             ],
             "id":609681,
             "original_language":"en",
             "original_title":"The Marvels",
             "overview":"Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
             "popularity":974.007,
             "poster_path":"/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
             "release_date":"2023-11-08",
             "title":"The Marvels",
             "video":false,
             "vote_average":6.3,
             "vote_count":1841
          },
          {
             "adult":false,
             "backdrop_path":"/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
             "genre_ids":[
                878,
                28,
                18
             ],
             "id":933131,
             "original_language":"ko",
             "original_title":"황야",
             "overview":"After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
             "popularity":930.495,
             "poster_path":"/24CL0ySodCF8bcm38xtBeHzHp7W.jpg",
             "release_date":"2024-01-25",
             "title":"Badland Hunters",
             "video":false,
             "vote_average":6.785,
             "vote_count":472
          },
          {
             "adult":false,
             "backdrop_path":"/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
             "genre_ids":[
                35,
                10751,
                14
             ],
             "id":787699,
             "original_language":"en",
             "original_title":"Wonka",
             "overview":"Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
             "popularity":882.598,
             "poster_path":"/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
             "release_date":"2023-12-06",
             "title":"Wonka",
             "video":false,
             "vote_average":7.221,
             "vote_count":2247
          },
          {
             "adult":false,
             "backdrop_path":"/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
             "genre_ids":[
                28,
                18
             ],
    }
]
};

    // Function to create a movie tile
    function createMovieTile(movie) {
        const movieTile = document.createElement('div');
        movieTile.classList.add('movie-tile');
        movieTile.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">
            <h3>${movie.title}</h3>
            <p>Released Year: ${movie.release_date}</p>
            <p>Description: ${movie.overview}</p>
            <p>Genre: ${movie.genre_ids.join(', ')}</p>
        `;
        return movieTile;
    }

    // Function to render movies in a section
    function renderMovies(sectionId, movies) {
        const moviesContainer = document.getElementById(sectionId + '-tiles');
        movies.forEach(movie => {
            const movieTile = createMovieTile(movie);
            moviesContainer.appendChild(movieTile);
        });
    }

    // Render movies in respective sections
    renderMovies('popular-movies', jsonData.results);
    renderMovies('top-rated-movies', jsonData.results);
    renderMovies('upcoming-movies', jsonData.results);
});
