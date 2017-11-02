<?php
require 'db.class.php';
//get items to insert from index
$Title =$_GET['Title'];
$Year=$_GET['Year'];
$Director=$_GET['Director'];
$Rating=$_GET['Rating'];
$Genre=$_GET['Genre'];
$Runtime=$_GET['Runtime'];
$Writer=$_GET['Writer'];
$Actor=$_GET['Actor'];
$ProductionCompany=$_GET['ProductionCompany'];
$Owned=$_GET['Owned'];

//insert new item into database
$sql = "INSERT INTO movie (Title, Year, Director, Rating, Genre, Runtime, Writer, Actor, ProductionCompany, Owned)
VALUES ('$Title', '$Year', '$Director', '$Rating', '$Genre', '$Runtime', '$Writer', '$Actor', '$ProductionCompany', '$Owned')";
$sth=  DB::get()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sth = DB::get()->exec($sql);
header('Location: index.php');
$sth =null;
?>
