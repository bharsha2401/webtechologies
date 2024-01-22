<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Page</title>
  <style>
    /* Your CSS styles for the signup page */
  </style>
</head>
<body>

  <div class="container" id="signupContainer">
    <h2>Sign Up</h2>
    <form id="signupForm">
      <!-- Signup Form Fields -->
      <button type="submit">Sign Up</button>
    </form>
    <div class="switch">
      <p>Already have an account? <a href="login.html">Login</a></p>
    </div>
  </div>

  <script>
    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Add your signup logic here
      console.log('Signup logic goes here');
    });
  </script>

</body>
</html>
