// $(function() {
//     $('#login-form-link').click(function(e) {
// 		$("#login-form").delay(100).fadeIn(100);
//  		$("#register-form").fadeOut(100);
// 		$('#register-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});
// 	$('#register-form-link').click(function(e) {
// 		$("#register-form").delay(100).fadeIn(100);
//  		$("#login-form").fadeOut(100);
// 		$('#login-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});

// });

$(document).ready(function () {
  $("#login-form-link").click(function (e) {
    $("#login-form")
      .delay(100)
      .fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#register-form-link").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

  $("#register-form-link").click(function (e) {
    $("#register-form")
      .delay(100)
      .fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#login-form-link").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });

  // Getting references to our form and inputs
  var loginForm = $("form.login");


  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    var emailInput = $("#lemail");
    var passwordInput = $("#lpassword");
    console.log('loginform submit')
    event.preventDefault();
    console.log(emailInput.val());
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    console.log('loginform submit userdata: ', userData)

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    console.log('login post')
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function (data) {
        console.log(data)
        window.location.replace(data.redirect);
        // If there's an error, log the error
      })
    // .error(function(err) {
    //   console.log(err);
    // });
  }

  var signUpForm = $("form#register-form");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");
  var userInput = $("input#username");
  var avatarInput = $("input#avatar");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    console.log('signupform submit')
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      name: userInput.val().trim(),
      avatar: avatarInput.val().trim(),
    };
    console.log(userData)

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.name, userData.avatar);
    emailInput.val("");
    passwordInput.val("");
    avatarInput.val("");
    userInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, username, avatar) {
    console.log('signup post')
    $.post("/api/signup", { email: email, password: password, name: username, avatar: avatar })
      .then(function (data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});