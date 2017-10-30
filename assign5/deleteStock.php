<?php
session_start();

if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}

echo nl2br("Welcome back, " . $_SESSION['username']."\n");
echo "This is the delete stock page <br>";

$filename ="stockList.dat";
$lines = file($filename, FILE_IGNORE_NEW_LINES);
foreach ($lines as $line_num => $line)
{
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
}
fclose($filename);
echo '<br>
<h2>Delete a Stock</h2><br>
<h3>Chose the Line Number of the stock you wish to delete</h3><br>
<form action="" method="post">
<table>
<tr>
  <td>Line # to delete:</td><td><input type="text" name="stock"></td><td>Example: 0</td>
</tr>
<tr>
  <td colspan="2"><input type="submit"value="Submit"></td>
</tr>
</table>';

if(!empty($_POST))
{
    $stock = $_POST['stock'];
    unset($lines[$stock]);
    $lines2=array_values($lines);
    file_put_contents($filename, implode(PHP_EOL,$lines2).PHP_EOL);
    header("Location: admin.php");
}
//test the Array printing
//print_r(array_values($lines));


//test the deleteing of array item

?>
<br>
<a href ="admin.php">Portfollio</a><br>
<a href="modifyStock.php">Modify Stock</a><br>
<a href="logout.php">Log Out</a>
