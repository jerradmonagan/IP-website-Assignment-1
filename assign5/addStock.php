<?php
session_start();

if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}

echo nl2br("Welcome back, " . $_SESSION['username']."\n");
echo "This is the add stock page";


?>
<br>
<h2>Add a Stock</h2>
<h3>Choose the stock ticker you wish to add and the number of shares of that compnay you own<h3><br>
<form action="addStockFunc.php" method="post">
<table>
<tr>
	<td>Stock Ticker: </td><td><input type="text" name="stock"></td><td>Example: AAPL</td>
</tr>
<tr>
  <td>Amount of Stock Purchased: </td><td><input type="text" name="stockQTY"></td><td>Example: 4</td>
</tr>
<tr>
  <td colspan="2"><input type="submit" value="Submit"></td>
</tr>
</table>
<a href ="admin.php">Portfollio</a><br>
<a href="modifyStock.php">Modify Stock</a><br>
<a href="deleteStock.php">Delete Stock</a><br>
<a href="logout.php">Log Out</a>
