var userTable = {};
var userTableArr = [];
var genreNumber;
window.onload = function() {
  //let genreNumber = localStorage.getItem("search");
  // alert("search text value is " + searchText);

  //Get the top 3 Genre from table
  $.get("/api/getTable/").then(function(res) {
    console.log(res);
    // takes table object and puts it into an array
    userTable = res;
    userTableArr.push(userTable.action);
    userTableArr.push(userTable.adventure);
    userTableArr.push(userTable.animation);
    userTableArr.push(userTable.comedy);
    userTableArr.push(userTable.crime);
    userTableArr.push(userTable.documentary);
    userTableArr.push(userTable.drama);
    userTableArr.push(userTable.family);
    userTableArr.push(userTable.fantasy);
    userTableArr.push(userTable.history);
    userTableArr.push(userTable.music);
    userTableArr.push(userTable.mystery);
    userTableArr.push(userTable.romance);
    userTableArr.push(userTable.sciencefiction);
    userTableArr.push(userTable.thriller);
    userTableArr.push(userTable.tvmovie);
    userTableArr.push(userTable.war);
    userTableArr.push(userTable.western);
    //console.log(userTableArr);
    var top3Genre = getMax(userTableArr);
    var top3GenreArr = [];
    top3GenreArr.push(indexToGenre(top3Genre[0][1]));
    top3GenreArr.push(indexToGenre(top3Genre[1][1]));
    top3GenreArr.push(indexToGenre(top3Genre[2][1]));
    //console.log(top3GenreArr);

    //var top3GenreIdArr = [];

    genreNumber =
      genreNameToId(top3GenreArr[0]) +
      ", " +
      genreNameToId(top3GenreArr[1]) +
      ", " +
      genreNameToId(top3GenreArr[2]);

    // load recommended movies
    $.get("/api/movieGenre/" + genreNumber).then(function(res) {
      console.log(res);
      for (var i = 0; i < 12; i++) {
        $(`<div><img class="moviePoster" data-id="${res.results[i].id}" width="200px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
          </div>`).appendTo("#recMovies");
      }
    });
  });
};
// function to find top 3 values in an array and return value and index
function getMax(array) {
  if (array.length < 3) {return array;}
  var max = [[array[0], 0], [array[1], 1], [array[2], 2]],
    i,
    j;

  for (i = 3; i < array.length; i++) {
    for (j = 0; j < max.length; j++) {
      if (array[i] > max[j][0]) {
        max[j] = [array[i], i];
        if (j < 2) {
          max.sort(function(a, b) {
            return a[0] - b[0];
          });
        }
        break;
      }
    }
  }
  return max;
}
// function to determine which genre the index is associated with
function indexToGenre(index) {
  let genre;
  switch (index) {
  case 0:
    genre = "action";
    break;
  case 1:
    genre = "adventure";
    break;
  case 2:
    genre = "animation";
    break;
  case 3:
    genre = "comedy";
    break;
  case 4:
    genre = "crime";
    break;
  case 5:
    genre = "documentary";
    break;
  case 6:
    genre = "drama";
    break;
  case 7:
    genre = "family";
    break;
  case 8:
    genre = "fantasy";
    break;
  case 9:
    genre = "history";
    break;
  case 10:
    genre = "horror";
    break;
  case 11:
    genre = "music";
    break;
  case 12:
    genre = "mystery";
    break;
  case 13:
    genre = "romance";
    break;
  case 14:
    genre = "sciencefiction";
    break;
  case 15:
    genre = "thriller";
    break;
  case 16:
    genre = "tvmovie";
    break;
  case 17:
    genre = "war";
    break;
  case 18:
    genre = "western";
    break;
  default:
    console.log("no matches for that index");
  }
  return genre;
}

var genreId = 0;
function genreNameToId(name) {
  switch (name) {
  case "action":
    genreId = 28;
    break;
  case "adventure":
    genreId = 12;
    break;
  case "animation":
    genreId = 16;
    break;
  case "comedy":
    genreId = 35;
    break;
  case "crime":
    genreId = 80;
    break;
  case "documentary":
    genreId = 99;
    break;
  case "drama":
    genreId = 18;
    break;
  case "family":
    genreId = 10751;
    break;
  case "fantasy":
    genreId = 14;
    break;
  case "history":
    genreId = 36;
    break;
  case "horror":
    genreId = 16;
    break;
  case "music":
    genreId = 10402;
    break;
  case "mystery":
    genreId = 9648;
    break;
  case "romance":
    genreId = 10749;
    break;
  case "science fiction":
    genreId = 878;
    break;
  case "tv movie":
    genreId = 10770;
    break;
  case "thriller":
    genreId = 53;
    break;
  case "war":
    genreId = 10752;
    break;
  case "western":
    genreId = 37;
    break;
  default:
    console.log("no matches for genre");
  }
  return genreId;
}

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

  $.get("/api/movieTitle/" + searchText).then(function(res) {
    console.log(res);
    for (var i = 0; i < 6; i++) {
      $(`<div><img class="moviePoster" data-id="${res.results[i].id}" width="200px" data-stuff="${res.results[i].genre_ids}" src="https://image.tmdb.org/t/p/w500${res.results[i].poster_path}"></img>
          </div>`).prependTo("#searchMovies");
    }
  });
}

$(document).on("click", ".moviePoster", function() {
  let genreList = $(this).attr("data-stuff");

  var genreArr = genreList.split(",").map(function(item) {
    return parseInt(item, 10);
  });
  var genreIdArr = [];
  for (let i = 0; i < genreArr.length; i++) {
    genreIdArr.push(genreIdToName(parseInt(genreArr[i])));
  }

  $.ajax({
    method: "PUT",
    url: "/api/moviescores",
    data: {
      genres: genreIdArr
    }
  }).then(function() {
    console.log("table should be updated");
  });
});

function genreIdToName(genreIdInput) {
  let genreId;
  switch (genreIdInput) {
  case 28:
    genreId = "action";
    break;
  case 12:
    genreId = "adventure";
    break;
  case 16:
    genreId = "animation";
    break;
  case 35:
    genreId = "comedy";
    break;
  case 80:
    genreId = "crime";
    break;
  case 99:
    genreId = "documentary";
    break;
  case 18:
    genreId = "drama";
    break;
  case 10751:
    genreId = "family";
    break;
  case 14:
    genreId = "fantasy";
    break;
  case 36:
    genreId = "history";
    break;
  case 27:
    genreId = "horror";
    break;
  case 10402:
    genreId = "music";
    break;
  case 9648:
    genreId = "mystery";
    break;
  case 10749:
    genreId = "romance";
    break;
  case 878:
    genreId = "scriencefiction";
    break;
  case 10770:
    genreId = "tvmovie";
    break;
  case 53:
    genreId = "thriller";
    break;
  case 10752:
    genreId = "war";
    break;
  case 37:
    genreId = "western";
    break;
  default:
    console.log("no match for the ID");
  }
  return genreId;
}

// function movieSelected(id) {
//   sessionStorage.setItem("movie-id", id);
//   window.location = "movie.handlebars";
//   return false;
// }
