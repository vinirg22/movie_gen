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
  $.get("/api/movie/:" + searchText, function() {}).then(function(res) {
    for (var i = 0; i < 10; i++) {
      // add poster element to page
      $(`<div class="col-md-3">
               <img  class="moviePoster" data-id="${res.results[i].id}" width="300px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
               </div >`).appendTo("#movies");
    }
  });
}
var genreArr = [];
const favArr = [];
$(document).on("click", ".moviePoster", function() {
  genreArr = $(this).attr("data-stuff");
  favArr.push("data-id");
  console.log(genreArr);
  console.log(favArr);
});

// $(".moviePoster").on("click", (e) => {
//   e.preventDefault();
//   alert("hello");
//   genreArr = $(this).attr("data-stuff");
//   favArr.push("data-id");
// });

// function movieSelected(id) {
//   sessionStorage.setItem("movie-id", id);
//   window.location = "movie.handlebars";
//   return false;
// }
