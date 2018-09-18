<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	//Removing student-specific grade releasing
  	//$schoolUser = (int) $_POST['ucid'];

  	$result = mysqli_query($sqlSuper, "UPDATE grades SET viewable = 1;");// WHERE ucid = '$schoolUser';");
  	
	$status = mysqli_close($sqlSuper);
  	echo "PHP FINISHED";
	?>
</html>
