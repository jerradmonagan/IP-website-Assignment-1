<?php
        session_start();

        if($_SESSION['username'] == "")
        {
                header("Location: index.php?error=2");
        }

	echo "Good bye, ". $_SESSION['username'];

	session_destroy();
?>
<br>
<a href="index.php">Log In</a>
