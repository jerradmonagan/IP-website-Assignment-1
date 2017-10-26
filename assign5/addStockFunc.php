<?php
session_start();
//get variables
$stock = $_POST['stock'];
$stockQTY = $_POST['stockQTY'];

$file_name = "stockList.dat";
$fp = fopen($file_name, "a");

//write file
fwrite($fp, "$stock:$stockQTY\n");

//close file
fclose($fp);

$fp = fopen($file_name, "r");
echo "<ul>";
while($line = fgets($fp))
{
  $stock = strtok($line, ":");
  $stockQTY = strtok(":");
  echo "<li>Stock: $stock <br> shares owned  $stockQTY.</li>";
}
echo "</ul>";
fclose($fp);
 ?>
 <a href ="admin.php">Back</a><br>
 <a href="logout.php">Log Out</a>
