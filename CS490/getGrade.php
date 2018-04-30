<?php
$url = 'https://web.njit.edu/~fu4/instructorView.php';



	$inputData = $_GET['dataToSend'];

	// echo "$inputData";


	$sendingArray = array('ucid' => $_GET['dataToSend']);

	// var_dump($sendingArray);

	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS,$sendingArray);



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = json_decode(strip_tags(curl_exec($ch)));
			// $nonParsed =  strip_tags(curl_exec($ch));

			echo $response;

			// echo $nonParsed;



			// $response = strip_tags(curl_exec($ch));
			


			// echo $response;
			// echo strip_tags($response);
			// echo ($response);

			if ($response === false) 
				$response = curl_error($ch);
			
?>


