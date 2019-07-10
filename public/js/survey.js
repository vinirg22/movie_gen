$("#user-survey").on("submit", function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST"
  });
});
