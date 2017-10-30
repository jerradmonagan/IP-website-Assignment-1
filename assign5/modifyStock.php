<?php
session_start();

if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}

echo nl2br("Welcome back, " . $_SESSION['username']."\n");
echo "This is the modify stock page<br>";

$filename ="stockList.dat";
$lines = file($filename, FILE_IGNORE_NEW_LINES);
foreach ($lines as $line_num => $line)
{
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
}
fclose($filename);
$datemodified = date("Y-m-d H:i:s");
echo '<br>
<h2Modify a Stock</h2><br>
<h3>Choose the stock you wish to modify and hit submit</h3><br>
<form action="" method="post">
<table>
<tr>
  <td>Line # to modify: </td><td><input type="text" name="stock"></td><td>Example: 0</td>
</tr>
<tr>
	<td>Stock Ticker: </td><td><input type="text" name="stocktick" value="'.$stockArray.'"></td><td>Example: AAPL</td>
</tr>
<tr>
  <td>Amount of Stock Purchased: </td><td><input type="text" name="stockQTY" value= "'.$numberofshares.'"></td><td>Example: 6</td>
</tr>
<tr>
  <td colspan="3"><input type="submit"value="Submit"></td>
</tr>
</table>';

if(!empty($_POST))
{
  $stockArray = strtok($line, ",");
  $numberofshares = strtok(",").trim();
  $stocktick = $_POST['stocktick'];
  $stockQTY = $_POST['stockQTY'];
  $stock = $_POST['stock'];
  unset($lines[$stock]);
  //insert the modified record
  $lines[$stock]= "$stocktick,$stockQTY,$datemodified\n";
  //test the deleteing of array item
  file_put_contents($filename, implode(PHP_EOL,$lines));
  header("Location: admin.php");
}
//test the Array printing
//print_r(array_values($lines));
function modifyText()
{
  $stocktick = $_POST['stocktick'];
  $stockArray = strtok($line, ",");
  $numberofshares = strtok(",").trim();

}

?>
<br>
<a href ="admin.php">Portfollio</a><br>
<a href="deleteStock.php">Delete Stock</a><br>
<a href="logout.php">Log Out</a>
