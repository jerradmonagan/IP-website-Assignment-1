<?php

	session_start();

	if($_SESSION['username'] == "")
	{
		header("Location: index.php?error=2");
	}

	$username = $_POST['username'];
	$password = $_POST['password'];
	$file_name = "users.dat";

	$_SESSION['username'] = $username;

	$fp = fopen($file_name, "r");
	while($line = fgets($fp))
	{
		$userNameFile = strtok($line, ":");
		$passwordFile = strtok(":").trim();
	}
	fclose($fp);
	if ((strcmp ($username,$userNameFile)==0) &&  (strcmp ($password,$passwordFile)==0))
	{
		header("Location: main.php");
		//echo "UserName is ". $userNameFile . " Password is ". $passwordFile. " From user ". $password;
	}else{
		header("Location: index.php?error=1");
	}
?>
