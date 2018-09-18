<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	$schoolUser = $_POST['ucid'];
  	$betrayal = $_POST['grade'];
	$comments = $_POST['comments'];
  $code = $_POST['code'];	
	$result = mysqli_query($sqlSuper, "UPDATE `grades` SET grade = '$betrayal', comment = '$comments', studentCode = '$code', viewable = 0 WHERE ucid = '$schoolUser';");
	var_dump($_POST);
	$status = $mysqli_close($sqlSuper);
	?>
</html>
