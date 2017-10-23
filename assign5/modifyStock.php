<?php
session_start();

if($_SESSION['username'] == "")
{
        header("Location: index.php?error=2");
}

echo nl2br("Welcome back, " . $_SESSION['username']."\n");
echo "This is the modify stock page";
?>
<br>
<a href ="main.php">Back</a><br>
<a href="logout.php">Log Out</a>
