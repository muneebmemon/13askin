$(document).ready(function() {  

  console.log("hi");

  var coneColor = $("#color");
  var scoopColor = $("#color2");
  var newName = $("#creamName");
  var newDescription = $("#creamDesc");

  var iceCreamForm = $("#creamForm");

  // When the signup button is clicked, we validate the email and password are not blank
  iceCreamForm.on("submit", function (event) {
      console.log('cream form submit');
      event.preventDefault();
      var coneInfo = {
          scoop: scoopColor.val().trim(),
          cone: coneColor.val().trim(),
          name: newName.val().trim(),
          description: newDescription.val().trim(),
      };
      console.log(coneInfo);
  });


  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function addIceCream(scoop, cone, name, description) {
      console.log('save Ice Cream post')
      $.post("/api/add", {
              scoop: scoopColor,
              cone: coneColor,
              name: newName,
              description: newDescription
          })
          .then(function (data) {
              window.location.replace(data);
              // If there's an error, handle it by throwing up a boostrap alert
          });
  }

  function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
  };

  addIceCream(scoopColor, coneColor, newName, newDescription);
  
});