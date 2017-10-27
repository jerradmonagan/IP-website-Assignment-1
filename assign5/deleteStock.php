<?php
session_start();

if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}

echo nl2br("Welcome back, " . $_SESSION['username']."\n");
echo "This is the delete stock page <br>";
$filename ="stockList.dat";

// open the file and get the resource handle with errors suppressed
// $handle = @fopen($filename,'r');
// array to hold our values
// $lines = array();
// if($handle)
// {
// // if handle is there then file was read successfully
// // as long as we aren't at the end of the file
//    while(!feof($handle))
//    {
//        $line = fgets($handle);
//        $temp = explode(':',$line);
//        $lines[$temp[0]] = $temp[1];
//        $lines[$temp[1]] = $temp[2];
//    }
//    fclose($handle);
// }
$lines = file($filename, FILE_IGNORE_NEW_LINES);
foreach ($lines as $line_num => $line)
{
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
}
echo "<br>
<h2>Delete a Stock</h2><br>
<form action=\"\" method=\"post\">
<table>
<tr>
	<td>Stock #: </td><td><input type=\"text\" name=\"stock\"></td>
</tr>
<tr>
  <td colspan=\"2\"><input type=\"submit\"value=\"Submit\"></td>
</tr>
</table>";
if(!empty($_POST))
{
    $stock = $_POST['stock'];
    echo "Stock" . print_r($lines[$stock]) ." Deleting<br>";
    unset($lines[$stock]);
}
//test the deleteing of array item
print_r($lines);


//Encode the array into a JSON string.
$encodedString = json_encode(array_values($lines));

//Save the JSON string to a text file.
file_put_contents('json_array.txt', $encodedString);

//Retrieve the data from our text file.
$fileContents = file_get_contents('json_array.txt');

//Convert the JSON string back into an array.
$decoded = json_decode($fileContents, true);

//The end result.
var_dump($decoded);
?>
<br>
<a href ="admin.php">Back</a><br>
<a href="logout.php">Log Out</a>
