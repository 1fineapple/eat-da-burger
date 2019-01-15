// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new newBurger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(function(){
$(".submit-button").on("submit", function(event){
  var devourBurger ={
      name:$("#yum").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: devourBurger
    }).then(
      function() {
        console.log("I'm full!");
        // Reload the page to get the updated list
        location.reload();
      }
    );


  });
});


