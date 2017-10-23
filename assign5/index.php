<html>
<body>
<form action="authenticate.php" method="post">
<table>
<tr>
	<td>Username:</td><td><input name="username" type="text"></td>
</tr>
<tr>
        <td>Password:</td><td><input name="password" type="password"></td>
</tr>
<tr>
        <td colspan="2"><input type="submit" value="Log In"></td>
</tr>
</table>
</form>
<?php
	$error = $_GET['error'];
	if($error == 1)
		echo "Invalid credentials";
	elseif ($error == 2)
		echo "You must log in first.";
?>
</body>
</html>
