window.onload = function () {
  let genreNumber = localStorage.getItem("search");
  // alert("search text value is " + searchText);

  $.get("/api/movieGenre/" + genreNumber).then(function (res) {
    console.log(res);
    for (var i = 0; i < 6; i++) {
      $(`<div><img class="moviePoster" data-id="${res.results[i].id}" width="200px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
        </div>`).appendTo("#recMovies");
    }
  });
};

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

  $.get("/api/movieTitle/" + searchText).then(function (res) {
    console.log(res);
    for (var i = 0; i < 6; i++) {
      $(`<div><img class="moviePoster" data-id="${res.results[i].id}" width="200px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
          </div>`).appendTo("#searchMovies");
    }
  });

}
var genreArr = [];
const favArr = [];
$(document).on("click", ".moviePoster", function () {
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
