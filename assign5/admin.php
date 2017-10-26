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
      		$stock = strtok($line, ":");
      		$numberofshares = strtok(":").trim();
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
          echo "<tr><td>$stock</td><td>$stock_info[1]</td><td>$displayStockPrice</td><td align=\"right\">$numberofshares</td><td>$stockTotal</td></tr>";
      	}
        echo "<tr><td colspan =\"5\">Your total portfollio is worth $portfollioTotal Dollars.</td></tr>";
        echo "</table>";

      	fclose($fp);
        echo "<ul>";


?>
<br>
<a href="addStock.php">Add Stock</a><br>
<a href="modifyStock.php">Modify Stock</a><br>
<a href="deleteStock.php">Delete Stock</a><br>
<a href="logout.php">Log Out</a>
