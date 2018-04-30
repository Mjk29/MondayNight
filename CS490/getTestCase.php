<?php
$url = 'https://web.njit.edu/~fu4/GetAnswer.php';

	// $sendArray = array('id' => $_GET['dataToSend'] );
$sendArray = array('id' => $_GET['dataToSend'] );

	// if ($_GET['dataToSend'] == '2') {
	// 	echo "ITS A 2\n";
	// }


	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS,$sendArray);



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = curl_exec($ch);

			// echo $response;

			if ($response === false) 
				$response = curl_error($ch);
			// echo stripslashes($response);
			// echo $response , PHP_EOL;
				
				// echo gettype($response);
		
		// var_dump($response);

		// echo json_encode($response);
			// echo explode(',', strip_tags($response));
			// echo gettype($response);
			// echo $response;
			// echo explode('|', $response);

			// echo "***************************************";
			// echo $_GET['dataToSend'];
			// echo strip_tags($response);
			// echo "Here is teh PHP Data 000000000000000000000000000000000";
			// var_dump( $_GET['dataToSend']);
			echo strip_tags($response);
			// echo strip_tags($response);
			// echo "Here is teh PHP Data";
			// echo "VARDUMPING THE RESPONSE IN GET EXAM Q";
			// var_dump(strip_tags($response));
			// echo "***************************************";


		// $result = htmlspecialchars($response);
		// echo "string";
		?>




	