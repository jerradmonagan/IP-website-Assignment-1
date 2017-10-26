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
      	while($line = fgets($fp))
      	{
      		$stock = strtok($line, ":");
      		$numberofshares = strtok(":").trim();
          //get the information from yahoo API
          $open = fopen("http://finance.yahoo.com/d/quotes.csv?s=$stock&f=snl1d1t1c1ohgv&e=.csv", "r");
          $stock_info = fgetcsv ($open, 1000, ",");
          //total vaule of the company stock held by user
          $stockTotal = $numberofshares*$stock_info[2];
          echo"<b>$stock</b> $stock_info[1] is worth <b>$stock_info[2]</b> you own <b>$numberofshares</b> total value at <b>$stockTotal<br></b>";
      	}
      	fclose($fp);
        echo "<ul>";


?>
<br>
<a href="addStock.php">Add Stock</a><br>
<a href="modifyStock.php">Modify Stock</a><br>
<a href="deleteStock.php">Delete Stock</a><br>
<a href="logout.php">Log Out</a>
