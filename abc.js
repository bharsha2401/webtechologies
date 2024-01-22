<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <style>
    /* Your CSS styles for the login page */
  </style>
</head>
<body>

  <div class="container" id="loginContainer">
    <h2>Login</h2>
    <form id="loginForm">
      <!-- Login Form Fields -->
      <button type="submit">Login</button>
    </form>
    <div class="switch">
      <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
    </div>
  </div>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your login logic here
      console.log('Login logic goes here');
    });
  </script>

</body>
</html>
