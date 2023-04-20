$(document).ready(function() {
    // Load the user data from the JSON file using Ajax
    $.getJSON('registration.json', function(data) {
      var users = data;
  
      // Add click event listener to the submit button
      $('#RegSubmit').click(function(e) {
        e.preventDefault();
  
        // Get form values
        var username = $('#userNameReg').val();
        var email = $('#emailReg').val();
        var password = $('#passwordReg').val();

        console.log(`User ${username} registered with email ${email} and password ${password}`);
  
        // Check if user already exists
        if (users.hasOwnProperty(username)) {
          alert('User already exists, please login.');
          return;
        }
  
        // Add new user to the users object
        users[username] = {
          email: email,
          password: password
        };
  
        // Save user data to the JSON file using Ajax
        $.ajax({
          type: 'PUT',
          url: 'registration.json',
          data: JSON.stringify(users),
          contentType: 'application/json',
          success: function() {
            // Redirect to the main site
            window.location.href = 'index.html';
            console.log(users);
          },
          error: function() {
            alert('Error saving user data.');
          }
        });
      });
  
      // Add click event listener to the login button
      $('#LoginButton').click(function(e) {
        e.preventDefault();
  
        // Get form values
        var username = $('#userEmailLogin').val();
        var password = $('#userPasswordLogin').val();
  
        // Check if user exists and password is correct
        if (!users.hasOwnProperty(username) || users[username].password !== password) {
          alert('Incorrect username or password, please try again.');
          return;
        }
  
        // Redirect to the main site
        window.location.href = 'index.html';
      });
    });
  });
  

