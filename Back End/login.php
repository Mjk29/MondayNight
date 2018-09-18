<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	$schoolUser = $_POST['ucid'];
  	$daHash = md5($_POST['pass']);
   	$result = mysqli_query($sqlSuper, "SELECT ROLE FROM login WHERE UCID = '$schoolUser' and PASSWORD_HASH = '$daHash';");
        if($result->num_rows == 0)
		echo json_encode(0); //failed login
	else
	{
		$theAnswer = mysqli_fetch_row($result); 	 
		if(!strcmp($theAnswer[0], "STUDENT")) //strcmp returns 0 if true
			echo json_encode(1); //student login
		else
			echo json_encode(2);	//instructor login
		
	}	
	$result->close();
	$status = mysqli_close($sqlSuper);
	//0 failed, 1 for student, 2 for instructor
	
	?>
</html>