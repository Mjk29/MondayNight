<html>
  <?php
 	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	$schoolUser = $_POST['ucid'];
   	
	$result = mysqli_query($sqlSuper, "SELECT viewable FROM grades WHERE ucid = '$schoolUser';");
  	$checker = mysqli_fetch_row($result);
	
	if($checker[0] == 0)  //add the comparison for viewable/non-viewable
  	    	echo json_encode("GRADING IN PROGRESS");
   	else
   	{
    		$finalResult = mysqli_query($sqlSuper, "SELECT grade, comment, studentCode FROM grades WHERE ucid = '$schoolUser';");
    		$finalAnswer = mysqli_fetch_row($finalResult);
    		echo json_encode($finalAnswer[0] . " " . $finalAnswer[1] . " " . $finalAnswer[2]); 
    	}	

  	$result->close();
  	$finalResult->close();
	?>
</html>