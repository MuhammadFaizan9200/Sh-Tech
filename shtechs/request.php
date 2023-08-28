<?php 

include("header/connection.php"); 

$fullname = $_POST['customer_name'];
$email_address = $_POST['customer_email'];
$phone_number = $_POST['customer_phone'];
$message = $_POST['msg'];

// Prepare and execute SQL statement
$stmt = $conn->prepare("INSERT INTO request (`fullname`, `email_address`, `phone_number`, `message`) VALUES ('$fullname','$email_address','$phone_number','$message')");
$stmt->bind_param("ss", $fullname, $email_address,$phone_number,$message);
$stmt->execute();

?>
