$("#user-sign-up").on("submit", function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/api/signup",
    data: {
      username: $("#username")
        .val()
        .trim(),
      password: $("#password")
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

  $.ajax({
    method: "POST",
    url: "/api/moviescores"
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
