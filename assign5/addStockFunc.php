<?php
session_start();
if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}
echo "Welcome back, " . $_SESSION['username'];
echo "<ul>";
//get variables
$stock = $_POST['stock'];
$stockQTY = $_POST['stockQTY'];
$today = date("Y-m-d H:i:s");

$file_name = "stockList.dat";
$fp = fopen($file_name, "a");

//write file
fwrite($fp, "$stock,$stockQTY,$today".PHP_EOL);

//close file
fclose($fp);

$fp = fopen($file_name, "r");
echo "<ul>";
while($line = fgets($fp))
{
  $stock = strtok($line, ",");
  $stockQTY = strtok(",");
  $dateAdded = strtok(",");
  echo "<li>Stock: $stock <br> shares owned  $stockQTY added on $dateAdded.</li>";
}
echo "</ul>";
fclose($fp);
header("Location: admin.php");
 ?>
 <a href="modifyStock.php">Modify Stock</a><br>
 <a href="deleteStock.php">Delete Stock</a><br>
 <a href ="admin.php">Portfollio</a><br>
 <a href="logout.php">Log Out</a>
