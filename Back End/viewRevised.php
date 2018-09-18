<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	$schoolUser = $_POST['ucid'];
 
  	$result = mysqli_query($sqlSuper, "SELECT viewable FROM grades WHERE ucid = '$schoolUser';");
  	$oneRow = mysqli_fetch_row($result);
  	
  	
    		$finalResult = mysqli_query($sqlSuper, "SELECT teacherUpdate, newGrade FROM grades WHERE ucid = '$schoolUser';");
    		$finalAnswer = mysqli_fetch_row($finalResult);
    		echo json_encode($finalAnswer[0] .  $finalAnswer[1]); 

  	$result->close();
  	$finalResult->close();
	?>
</html>

