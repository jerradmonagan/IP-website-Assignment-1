<?php
  require 'db.class.php';
  //get updated entrys from update.php
  $MovieID = $_GET['MovieID'];
  $dbname="movie";
  $Title=$_GET["Title"];
  $Year=$_GET["Year"];
  $Director=$_GET["Director"];
  $Rating=$_GET["Rating"];
  $Genre=$_GET["Genre"];
  $Runtime=$_GET["Runtime"];
  $Writer=$_GET["Writer"];
  $Actor=$_GET["Actor"];
  $Country=$_GET['Country'];
  $Owned=$_GET['Owned'];
  $imdbID=$_GET['imdbID'];

// sql to delete a record
$sql ="UPDATE movie SET Title='$Title', Year='$Year', Director='$Director', Rating ='$Rating', Genre='$Genre', Runtime='$Runtime', Writer='$Writer', Actor='$Actor', Country='$Country', Owned='$Owned', imdbID='$imdbID' WHERE MovieID = " . $MovieID;

//open conn and update record
$conn=DB::get()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt= DB::get()->prepare($sql);
// execute the query
$stmt->execute();
header('Location: index.php');
$conn = null;
?>
