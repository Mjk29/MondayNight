<?php
// $url = 'https://web.njit.edu/~fu4/changeGrade.php';
$url = 'https://web.njit.edu/~fu4/newGrade.php';



	// $tester= array('ucid' => "testID",'grade' => "99999",'comments'=>"Here are some updated commetns");
	


	$inputData = $_GET['dataToSend'];
	echo "\n here is teh inputdata in php \n";
	echo $inputData;

	$testStr = "assgoblins coming at yu";

 
    $encodeString = urlencode($inputData);
    echo "HERE IS THE ENCODED STRING IN PHP\n";
    var_dump($encodeString);
    echo "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n";


    // $decodeString = urldecode($encodeString);
    // echo "HERE IS THE DECODED STRING IN PHP\n";
    // var_dump($decodeString);
    // echo "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n";


    // $explode = explode("|",$decodeString);
    // echo "HERE IS THE EXPLODE STRING IN PHP\n";
    // var_dump($explode);
    // echo "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n"; 











	$sendingArray = $inputData;

	// var_dump($sendingArray);

	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			curl_setopt($ch, CURLOPT_POSTFIELDS, $encodeString);

			// curl_setopt($ch, CURLOPT_POSTFIELDS,$tester);



			// echo $response;
			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			echo "\nHERE IS TEH RESOPINSE DATA\n\n";
			$response = curl_exec($ch);
			var_dump($response);
			// echo(strip_tags($response));
			echo "\nHERE IS TEH RESOPINSE DATA";




			// $response = strip_tags(curl_exec($ch));
			


			// echo $response;
			// echo strip_tags($response);
			// echo ($response);

			if ($response === false) 
				$response = curl_error($ch);
			
?>


