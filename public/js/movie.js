$("#searchMovie").on("click", event => {
  event.preventDefault();

  let searchText = $("#searchText")
    .val()
    .trim();
  console.log(searchText);
  getMovies(searchText);
});

function getMovies(searchText) {
  console.log("movies");
  // eslint-disable-next-line no-empty-function
  $.get("/api/movie/:" + searchText, function(data) {}).then(function(res) {
    console.log(res);
    console.log(res.results[0].poster_path);
    let newMovie = res.results[0].poster_path;
    let output = "";
    for (var i = 0; i < 10; i++) {
      output += $(`<div class="col - md - 3">
               <img width="300px" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
               </div >`).appendTo("#movies");
    }
  });
}
// function movieSelected(id) {
//   sessionStorage.setItem("movieId", id);
//   window.location = "movie.handlebars";
//   return false;
// }

// function getMovie() {
//   let movieId = sessionStorage.getItem("movieId");

//   unirest.get(`https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_KEY}&query=${searchId}`)
//     .then(response => {
//       console.log(response);
//       let movie = response.data;

//       let output =

//         $(`<div class="row">
//                     <div class="col-md-4">
//                         <img src="${movie.Poster}" class="thumbnail"></img>
//                     </div>
//                     <div class="col-dm-8">
//                         <h2>${movie.Title}</h2>
//                         <ul class="list group">
//                             <li class="list-group-item"><strong>Genre:</strong> $(movie.Genre)</li>
//                             <li class="list-group-item"><strong>Released:</strong> $(movie.Released)</li>
//                             <li class="list-group-item"><strong>Rated:</strong> $(movie.Rated)</li>
//                             <li class="list-group-item"><strong>Director:</strong> $(movie.Director)</li>
//                             <li class="list-group-item"><strong>Writer:</strong> $(movie.Writer)</li>
//                             <li class="list-group-item"><strong>Actors:</strong> $(movie.Actors)</li>
//                         </ul>
//                     </div>
//                 </div>`).appendTo("body");
//     })
// }

/* <h2>$(movie.Title)</h2>
<a onclick="movieSelected('${movie.imbID}')" class="btn btn-primary" href="#">Movie Details</a> */
