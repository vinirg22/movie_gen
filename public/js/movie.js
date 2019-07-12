
  $("#searchMovie").on("click", (event) => {
    event.preventDefault();

    let searchText = $("#searchText").val().trim();
    console.log(searchText);
    getMovies(searchText);

  });

  function getMovies(searchText) {
    console.log("movies");
    $.get("/api/movie/:" + searchText, function (data) {
    }).then(function (res) {
      console.log(res);
      //console.log(res.results[0].poster_path);
      // let newMovie = res.results[0].poster_path;
      // console.log(res.results[0].genre_ids);
      // console.log(res.results[0].id);
      // res.results[i].genre_ids
      let output = "";
      for (var i = 0; i < 10; i++) {
        output +=
          $(`<div class="col - md - 3">
               <img class="moviePoster" data-id="${res.results[i].id}" width="300px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
               </div >`).appendTo('#movies');
      }
    });
  }

  const favArr = [];
  var genreArr = [];
$(document).on("click", ".moviePoster", function () {
  $(".moviePoster").on("click", () => {
    genreArr = $(this).attr("data-stuff");
    console.log(genreArr);
    favArr.push("data-id");

  });
});

// var genreArr = [];
// const favArr = [];
// $(document).on(“click”, “.moviePoster”, function () {
//   genreArr = $(this).attr(“data-stuff”);
//   console.log(genreArr);
//   favArr.push(“data-id”);
// });