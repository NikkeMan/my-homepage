<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PHP: Shoutbox harjoitus</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.js"></script>
	<link rel="stylesheet" type="text/css" href="css/harj_shoutbox.css">
</head>
<body>

<?php 
	$name = $msg = "";
	$nameErr = $msgErr = "";
	$msgHistory = "";
	$infoText = "";
	$formIsValid = true;
	
	$servername = "localhost";
	$username = "niklep";
	$password = "Elpsycongroo123";
	$dbname = "niklep";
	
	updateMsgHistory();
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['send'])) { 
            //Check name input:
            if (empty($_POST["name"])) {
                $nameErr = "Käyttäjänimi puuttuu.<br>";
                $formIsValid = false;
            }
            else {
                $name = testInput($_POST["name"]);
            }
			
			//Check message input:
            if (empty($_POST["msg"])) {
                $msgErr = "Viesti puuttuu.<br>";
                $formIsValid = false;
            }
            else {
                $msg = testInput($_POST["msg"]);
            }
                
            if ($formIsValid) {
				// Create connection
				$conn = mysqli_connect($servername, $username, $password, $dbname);
				// Check connection
				if (!$conn) {
					die("Connection failed: " . mysqli_connect_error() + "<br>");
				}

				$currentTime = date("Y/m/d H:i:s"); //year, month, day, hours, minutes, seconds
				
				$sql = "INSERT INTO shoutbox (name, message, timestamp) VALUES ('$name', '$msg', '$currentTime')";

				if (mysqli_query($conn, $sql)) {
					$infoText = "Viesti lähetetty!<br>";
					updateMsgHistory();
				} else {
					$infoText = "MySQL-virhe: " . $sql . "<br>" . mysqli_error($conn) + "<br>";
				}

				mysqli_close($conn);
            }
            else {
                $infoText = "";
            }
        }
    }

	function testInput($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
	
	function updateMsgHistory() {
		// Create connection:
		$conn = mysqli_connect($GLOBALS['servername'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['dbname']);
		
		// Check connection:
		if (!$conn) {
			die("Connection failed: " . mysqli_connect_error());
		}
		
		//Create SQL query:
		$sql = "SELECT id, name, message, timestamp FROM 
		(SELECT id, name, message, timestamp FROM shoutbox ORDER BY id DESC LIMIT 5) AS T ORDER BY id";
		
		//SQL query result:
		$result = mysqli_query($conn, $sql);
		
		if (mysqli_num_rows($result) > 0) {
			// Clear previous messages:
			$GLOBALS['msgHistory'] = "";
			
			// Output data:
			while($row = mysqli_fetch_assoc($result)) {
				$GLOBALS['msgHistory'] .= "<div><span class='timestamp'>" . $row['timestamp'] . "</span>
				<span class='username'>&lt;" . $row['name'] . "&gt;: </span>
				<span class='msg'>" . $row['message'] . "</span></div>";
			}
		}
		mysqli_close($conn);
	}
?>
	<div class="container">
		<div class="row d-flex justify-content-center">
			<div class="shoutbox col-10 rounded-lg text-center my-2">
				<h2 class="title my-2">Shoutbox</h2>
				<form class="form" action="harj_shoutbox.php" method="post">
					<div class="message-history d-flex flex-column justify-content-start text-left mb-1 px-1 rounded-sm"><?php echo $msgHistory;?></div>
					<div class="form-group d-flex justify-content-start mb-1">
						<input class="input rounded-sm my-1 px-1" name="name" type="text" maxlength="30" placeholder="Käyttäjänimi" value="<?php echo $name;?>">
					</div>
					<div class="form-group d-flex justify-content-start mb-1">
						<textarea class="msg-box flex-grow-1 rounded-left  px-1" name="msg" rows="3" maxlength="255" placeholder="Viesti (max 255 merkkiä)"></textarea>
						<button class="send-button rounded-right px-1" type="submit" name="send">Lähetä</button>
					</div>
					<div class="form-group">
						<span class="error"><?php echo $nameErr;?></span>
						<span class="error"><?php echo $msgErr;?></span>
						<span class="info-text"><?php echo $infoText;?></span>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
</html>