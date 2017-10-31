<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$Title =$_GET['Title'];
$Year=$_GET['Year'];
$Director=$_GET['Director'];
$Rating=$_GET['Rating'];
$Genre=$_GET['Genre'];
$Runtime=$_GET['Runtime'];
$Writer=$_GET['Writer'];
$Actor=$_GET['Actor'];
$ProductionCompany=$_GET['ProductionCompany'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=movie", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
    $sql = "INSERT INTO movie (Title, Year, Director, Rating, Genre, Runtime, Writer, Actor, ProductionCompany)
    VALUES ('$Title', '$Year', '$Director', '$Rating', '$Genre', '$Runtime', '$Writer', '$Actor', '$ProductionCompany')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

    $conn = null;
?>
