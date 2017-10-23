<?php
        session_start();

        if($_SESSION['username'] == "")
        {
                header("Location: index.php?error=2");
        }

	echo "Welcome back, " . $_SESSION['username'];

?>
<br><a href="logout.php">Log Out</a>
