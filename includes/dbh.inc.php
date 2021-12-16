<?php

$serverName = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dBName = "vikingcasino";

$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dBName);

if(!$conn){
    die("Connection failed: " . mysqli_connection_error());
}