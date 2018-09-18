<html>
  <?php
 	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	$schoolUser = $_POST['ucid'];
 
    	$finalResult = mysqli_query($sqlSuper, "SELECT grade, comment, studentCode FROM grades WHERE ucid = '$schoolUser';");
    	$finalAnswer = mysqli_fetch_row($finalResult);
    	echo json_encode($finalAnswer[0] . " " . $finalAnswer[1] . " " . $finalAnswer[2]); 
    	
  	$result->close();
  	$finalResult->close();
	?>
</html>