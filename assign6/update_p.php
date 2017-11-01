<?php
  $MovieID = $_GET['MovieID'];
  $servername = "localhost";
  $username = "root";
  $password = "123456";
  $dbname="movie";
  $Title=$_GET["Title"];
  $Year=$_GET["Year"];
  $Director=$_GET["Director"];
  $Rating=$_GET["Rating"];
  $Genre=$_GET["Genre"];
  $Runtime=$_GET["Runtime"];
  $Writer=$_GET["Writer"];
  $Actor=$_GET["Actor"];

  try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // sql to delete a record
    $sql ="UPDATE movie SET Title='$Title', Year='$Year', Director='$Director', Rating ='$Rating', Genre='$Genre', Runtime='$Runtime', Writer='$Writer', Actor='$Actor' WHERE MovieID = " . $MovieID;

    // Prepare statement
    $stmt = $conn->prepare($sql);

    // execute the query
    $stmt->execute();

    // echo a message to say the UPDATE succeeded
    //echo $stmt->rowCount() . " records UPDATED successfully";
    header('Location: index.php');
    }
  catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;

?>
