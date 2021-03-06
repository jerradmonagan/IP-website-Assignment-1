<?php
        session_start();
        $file_name = "stockList.dat";

        if($_SESSION['username'] == "")
        {
                header("Location: index.php?error=2");
        }
        echo "Welcome back, " . $_SESSION['username'];
        echo "<ul>";

        $fp = fopen($file_name, "r");
        echo "<table><th>Stock</th><th>Company</th><th>Value</th><th>Number of Shares</th><th>Total Value</th>";
        while($line = fgets($fp))
      	{
      		$stock = strtok($line, ",");
      		$numberofshares = strtok(",").trim();
          //get the information from yahoo API
          $open = fopen("http://finance.yahoo.com/d/quotes.csv?s=$stock&f=snl1d1t1c1ohgv&e=.csv", "r");
          $stock_info = fgetcsv ($open, 1000, ",");
          //total vaule of the company stock held by user
          $stockTotal = number_format(($numberofshares*$stock_info[2]),2,'.', '');
          //Add all stocks up for portfollio total
          $calcPortfollioTotal= $portfollioTotal+$stockTotal;
          //converts output to dollar decimals
          $portfollioTotal= number_format($calcPortfollioTotal,2,'.', '');
          $displayStockPrice = number_format($stock_info[2],2,'.', '');
          //echo"<b>$stock</b> $stock_info[1] is worth <b>$stock_info[2]</b> you own <b>$numberofshares</b> total value at <b>$stockTotal<br></b>";
          echo "<tr><td>$stock</td><td  align=\"center\">$stock_info[1]</td><td  align=\"right\">$displayStockPrice</td><td align=\"right\">$numberofshares</td><td  align=\"right\">$stockTotal</td></tr>";
      	}
        echo "<tr><td colspan =\"5\"  align=\"center\">Your total portfollio is worth $portfollioTotal Dollars.</td></tr>";
        echo "</table>";

      	fclose($fp);
        echo "<ul>";


?>
<br>
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
  <td colspan="2"><input type="submit" value="Add Stock"></td>
</tr>
</table>

<a href="modifyStock.php">Modify Stock</a><br>
<a href="deleteStock.php">Delete Stock</a><br>
<a href="logout.php">Log Out</a>
