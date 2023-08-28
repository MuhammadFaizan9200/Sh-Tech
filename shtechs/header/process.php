<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['customer_name'];
    $email = $_POST['customer_email'];
    $phone = $_POST['customer_phone'];
    $msg = $_POST['msg'];
  
    $to = 'support@shtechs.com';  // Enter your email address here
    $subject = 'New Message from Contact Form';
    $message = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nMessage: $msg";
    $headers = 'From: info@shtechs.com' . "\r\n";
  
    if (mail($to, $subject, $message, $headers)) {
        $response = array('status' => 'success', 'message' => 'Form submitted successfully!');
    } else {
        $response = array('status' => 'error', 'message' => 'Error: Unable to send email.');

    }

  // Return the response as JSON
  header('Content-Type: application/json');
  echo json_encode($response);
  exit;
}
?>
