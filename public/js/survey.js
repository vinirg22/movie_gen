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
  }
  return genreId;
}

$("#user-survey").on("submit", function(e) {
  e.preventDefault();
  var surveyResponse = {
    question1: $("#question1").val(),
    question2: $("#question2").val(),
    question3: $("#question3").val()
  };
  //console.log(surveyResponse);
  $.ajax({
    method: "PUT",
    url: "/api/moviescores",
    data: {
      genres: [question1.value, question2.value, question3.value]
    }
  })
    .then(function() {
      var genreAnswer =
        genreNameToId(question1.value) +
        ", " +
        genreNameToId(question2.value) +
        ", " +
        genreNameToId(question3.value);
      localStorage.setItem("search", genreAnswer);
      window.location.replace("/movie");
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
