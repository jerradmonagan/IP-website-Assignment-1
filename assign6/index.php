<html>
<head>
  <script>
  	function updateRecord()
  	{
  		document.myForm.action='update.php';
  		document.myForm.submit();
  	}
    function deleteRecord()
    {
      document.myForm.action='delete.php';
      document.myForm.submit();
    }
  </script>
</head>
<body>
  <form action='insert.php' method='get'>
  <table>
  	<tr>
  		<td>Movie Title:</td><td><input type='text' name='Title'></td>
  	</tr>
    <tr>
      <td>Year Released:</td><td><input type='text' name='Year'></td>
    </tr>
    <tr>
      <td>Director:</td><td><input type='text' name='Director'></td>
    </tr>
    <tr>
    <td>Rating:</td><td>
    <select name="Rating">
    <?php
    require 'db.class.php';
    $sql = "SELECT Rating FROM rating";
    $result = DB::get()->query($sql);
    while ($row = $result->fetch())
    {
    echo '<option value="'.$row['Rating'].'">' . $row['Rating'] . "</option>";
    }
    $result=null;
    ?>
    </select></td>
    </tr>
    <tr>
      <td>Genre:</td><td><input type='text' name='Genre'></td>
    </tr>
    <tr>
      <td>Runtime:</td><td><input type='text' name='Runtime'></td>
    </tr>
    <tr>
      <td>Writer:</td><td><input type='text' name='Writer'></td>
    </tr>
    <tr>
      <td>Actor:</td><td><input type='text' name='Actor'></td>
    </tr>
    <tr>
      <td>Production Comapany:</td><td><input type='text' name='ProductionCompany'></td>
    </tr>
    <tr>
      <td>Is Movie Owned:</td><td><input type='checkbox' value="1" name='Owned'></td>
    </tr>
    <tr>
      <td colspan='2'><input type='submit' value='Insert Record'></td>
    </tr>
  </table>
  </form>
</form>
<form action='' method='get' name='myForm'>
<?php
//get number of items in table
$res = DB::get()->prepare('SELECT COUNT(*) FROM movie');
$res->execute();
$num_rows = $res->fetchColumn();

$sql = "SELECT MovieID, Title, Year, Director, Rating, Genre, Runtime, Writer, Actor, ProductionCompany, Owned FROM movie";
$result =DB::get()->query($sql);
  if ($num_rows > 0) {
    echo "<table border='1'>";
    echo '<tr><td></td><td>Title</td><td>Year</td><td>Director</td><td>Rating</td><td>Genre</td><td>Runtime</td><td>Writer</td><td>Actor</td><td>ProductionCompany</td><td>Owned</td></tr>';
    while($row = $result->fetch())
    {
      $radio=$row["MovieID"];
      echo "<tr>";
      echo "<td><input type='radio' name='MovieID' value='$radio'></td>";
      echo "<td>".$row["Title"]."</td>";
      echo "<td>".$row["Year"]."</td>";
      echo "<td>".$row["Director"]."</td>";
      echo "<td>".$row["Rating"]."</td>";
      echo "<td>".$row["Genre"]."</td>";
      echo "<td>".$row["Runtime"]."</td>";
      echo "<td>".$row["Writer"]."</td>";
      echo "<td>".$row["Actor"]."</td>";
      echo "<td>". $row["ProductionCompany"]."</td>";
      if (($row['Owned'])>0)
      {
        echo "<td>Yes</td>";
      }
      else {
        echo "<td>No</td>";
      }
      echo "</tr>";
    }
    echo "</table>";
    } else {
    echo "0 results";
    }
    $result=null;
?>
<input type='button' value='Delete Record' onClick='deleteRecord()'>
<input type='button' value='Update Record' onClick='updateRecord()'>
</form>
</body>
</html>
