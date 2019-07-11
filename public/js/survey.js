$("#user-survey").on("submit", function(e) {
  e.preventDefault();
  $.ajax({
    method: "PUT",
    url: "/api/survey",
    data: {
      question1: $("#question1 option:selected")
        .val()
        .trim(),
      question2: $("#question2 option:selected")
        .val()
        .trim(),
      question3: $("#question3 option:selected")
        .val()
        .trim()
    }
  })
    .then(function(data) {
      console.log(data);
      window.location.replace(data);
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
