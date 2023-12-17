<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "roshandubey818@gmail.com"; // Replace with your email address
  $subject = "New message from $name";
  $body = "From: $name\nEmail: $email\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    echo '<script>alert("Message sent. Thank you!"); window.location = "index.html";</script>';
  } else {
    echo '<script>alert("Message not sent. Please try again later."); window.location = "index.html";</script>';
  }
}
?>
