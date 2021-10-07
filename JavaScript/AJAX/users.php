<?php

// Create Connection 
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

$query = "SELECT * FROM users";

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data 
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Change the data from the DB into JSON format
echo json_encode($users); 

print_r($users);
