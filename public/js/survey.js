$("#user-survey").on("submit", function(e) {
  e.preventDefault();
  alert("I HAVE BEEN CLICKED!!!!!!!FIND ME!!!");
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
      console.log(data.question1);
      // window.location.replace(data);
      // console.log(question1);
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
