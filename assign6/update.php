<html>
<head>
<?php
$servername = "localhost";
$username = "root";
$password = "123456";
$dbname="movie";
$MovieID=$_GET['MovieID'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT Title, Year, Director, Rating, Genre, Runtime, Writer, Actor, ProductionCompany FROM movie Where MovieID = " .$MovieID;
$result = $conn->query($sql);
    while($row = $result->fetch_assoc())
    {
      $Title=$row["Title"];
      $Year=$row["Year"];
      $Director=$row["Director"];
      $Rating=$row["Rating"];
      $Genre=$row["Genre"];
      $Runtime=$row["Runtime"];
      $Writer=$row["Writer"];
      $Actor=$row["Actor"];
      $ProductionCompany=$row["ProductionCompany"];
    }
    $conn->close();
?>
</head>
<body>
  <form action='update_p.php' method='get'>
    <input type='hidden' value='<?php echo $MovieID; ?>' name='MovieID'>
  <table>
    <tr>
      <td>Movie Title:</td><td><input type='text' name='Title' value='<?php echo $Title; ?>'></td>
    </tr>
    <tr>
      <td>Year Released:</td><td><input type='text' name='Year' value='<?php echo $Year; ?>'></td>
    </tr>
    <tr>
      <td>Director:</td><td><input type='text' name='Director' value='<?php echo $Director; ?>'></td>
    </tr>
    <tr>
      <td>Rating:</td><td><input type='text' name='Rating'value='<?php echo $Rating; ?>'></td>
    </tr>
    <tr>
      <td>Genre:</td><td><input type='text' name='Genre' value='<?php echo $Genre; ?>'></td>
    </tr>
    <tr>
      <td>Runtime:</td><td><input type='text' name='Runtime' value='<?php echo $Runtime; ?>'></td>
    </tr>
    <tr>
      <td>Writer:</td><td><input type='text' name='Writer' value='<?php echo $Writer; ?>'></td>
    </tr>
    <tr>
      <td>Actor:</td><td><input type='text' name='Actor' value='<?php echo $Actor; ?>'></td>
    </tr>
    <tr>
      <td>Production Comapany:</td><td><input type='text' name='ProductionCompany'value='<?php echo $ProductionCompany; ?>'></td>
    </tr>
    <tr>
      <td colspan='2'><input type='submit' value='Update Record' ></td>
    </tr>
  </table>
  </form>
</form>
</body>
</html>