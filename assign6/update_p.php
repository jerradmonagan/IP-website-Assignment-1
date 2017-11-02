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
  $ProductionCompany=$_GET['ProductionCompany'];
  $Owned=$GET['Owned'];

// sql to delete a record
$sql ="UPDATE movie SET Title='$Title', Year='$Year', Director='$Director', Rating ='$Rating', Genre='$Genre', Runtime='$Runtime', Writer='$Writer', Actor='$Actor', ProductionCompany='$ProductionCompany', Owned='$Owned' WHERE MovieID = " . $MovieID;

//open conn and update record
$conn=DB::get()->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt= DB::get()->prepare($sql);
// execute the query
$stmt->execute();
header('Location: index.php');
$conn = null;
?>
