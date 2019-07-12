$("#user-survey").on("submit", function(e) {
  e.preventDefault();
  // alert("I HAVE BEEN CLICKED!!!!!!!FIND ME!!!");
  var surveyResponse = {
    question1: $("#question1").val()
  };
  console.log(surveyResponse);
  $.ajax({
    method: "PUT",
    url: "/api/moviescores",
    data: {
      genres: [question1.value, question2.value, question3.value]
    }
  })
    .then(function(data) {
      window.location.replace("/movie");
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
