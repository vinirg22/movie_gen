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
      window.location.replace("/movie");
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
