<?php
$url = 'https://web.njit.edu/~jbt8/GetAnswer.php';


	$decoded = json_decode($_GET['dataToSend'], true);
	

	echo "var dump \n";
	var_dump($_GET['dataToSend']);

	echo "HERE IS DECODED 0 ||";
	echo $decoded[1];
	echo $decoded->{'ucid'};
	echo "   ||HERE IS DECODED 0 ";



// $sendingArray = array(
// 	'ucid' => $decoded[0],
// 	'qID0' => $decoded[1], 
// 	'Ans0' =>  $decoded[2],
// 	'qID1' =>  "testing",
// 	'Ans1' =>  "testing",
// 	'qID2' =>  "testing",
// 	'Ans2' =>  "testing",
// 	'qID3' =>  "testing",
// 	'Ans3' =>  "testing",
// 	'qID4' =>  "testing",
// 	'Ans4' =>  "testing");



	$sendingArray = array(
	'ucid' => $decoded[0],
	'qID0' => $decoded[1], 
	// 'qID0' => '2', 

	'Ans0' =>  $decoded[2],
	'qID1' =>  $decoded[3],
	'Ans1' =>  $decoded[4],
	'qID2' =>  $decoded[5],
	'Ans2' =>  $decoded[6],
	'qID3' =>  $decoded[7],
	'Ans3' =>  $decoded[8],
	'qID4' =>  $decoded[9],
	'Ans4' =>  $decoded[10]);



	// 'test2' =>  $decoded->{'testCase1'},
	// 'answer2' =>  $decoded->{'testAnswer1'},
	// 'test3' =>  $decoded->{'testCase2'},
	// 'answer3' =>  $decoded->{'testAnswer2'},
	// 'test4' =>  $decoded->{'testCase3'},
	// 'answer4' =>  $decoded->{'testAnswer3'},
	// 'test5' =>  $decoded->{'testCase4'},
	// 'answer5' =>  $decoded->{'testAnswer4'});


	echo "PRINTING SENDING ARRAY\n";
	var_dump($sendingArray);
	// echo $sendingArray['Q0'];

	// echo "\nPRINTING SENDING ARRAY\n";





	// for ($i=0; $i <count($decoded); $i++) { 
	// 		$stack->push($i)); 
	// }


	// $sendingArray = array(	'difft' => $decoded->{'difft'}); 

	// echo "HERE IS STACK \n";
	// print_r($stack);

	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS, $sendingArray);



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = curl_exec($ch);
			echo "HERE IS REPONSE\n";
			var_dump($response);
			echo "eEND OF  IS REPONSE\n";


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
			// echo "***************************************";


		// $result = htmlspecialchars($response);
		// echo "string";
		?>