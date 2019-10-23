<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PHP: Newsletter harjoitus</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/harj_newsletter.css">
	<script src="js/harj_newsletter.js"></script>
</head>
<body>

<?php
	$nameErr = $emailErr = $emailErr2 = $cityErr = "";
	$name = $email = $city = "";
	$infoText = $infoText2 = "";
	$formIsValid = true;
	
	$servername = "localhost";
	$username = "niklep";
	$password = "Elpsycongroo123";
	$dbname = "niklep";
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset($_POST['save'])) {
			//Check name input:
			if (empty($_POST["name"])) {
				$nameErr = "Tämä kenttä on pakollinen.";
				$formIsValid = false;
			}
			elseif (!preg_match("/^[a-zA-Z åäö]*$/", $_POST["name"])) {
				$nameErr = "Vain kirjain- ja välilyöntimerkit ovat sallittuja.";
				$formIsValid = false;
			}
			else {
				$name = testInput($_POST["name"]);
			}
			
			//Check email input:
			if (empty($_POST["email"])) {
				$emailErr = "Tämä kenttä on pakollinen.";
				$formIsValid = false;
			}
			elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
				$emailErr = "Epäkelvollinen sähköpostiosoite.";
				$formIsValid = false;
			}
			else {
				$email = testInput($_POST["email"]);
			}
			
			//Check city input:
			if (empty($_POST["city"])) {
				$cityErr = "Tämä kenttä on pakollinen.";
				$formIsValid = false;
			}
			elseif (!preg_match("/^[a-zA-Z ]*$/", $_POST["city"])) {
				$cityErr = "Vain kirjain- ja välilyöntimerkit ovat sallittuja.";
				$formIsValid = false;
			}
			else {
				$city = testInput($_POST["city"]);
			}
			
			if ($formIsValid) {
				// Create connection:
				$conn = mysqli_connect($servername, $username, $password, $dbname);
				
				// Check connection:
				if (!$conn) {
					die("Connection failed: " . mysqli_connect_error());
				}
				
				//Check if email has already been added:
				$sql = "SELECT * FROM newsletter WHERE email='$email'";
				if (mysqli_query($conn, $sql)) {
					$result = mysqli_query($conn, $sql);
					
					if (mysqli_num_rows($result) == 0) {
						$sql = "INSERT INTO newsletter (name, email, city) VALUES ('$name', '$email', '$city')";

						if (mysqli_query($conn, $sql)) {
							$infoText = "Sähköpostiosoite " . $email . " lisätty postituslistalle!";
						} else {
							$infoText = "MySQL-virhe: " . $sql . "<br>" . mysqli_error($conn);
						}
					}
					else {
						$infoText = "Kyseinen sähköpostiosoite on jo lisätty postituslistalle!";
					}
				}
				else {
					$infoText = "MySQL-virhe: " . $sql . "<br>" . mysqli_error($conn);
				}
				
				mysqli_close($conn);
			}
			else {
				$infoText = "";
			}
		}
		elseif (isset($_POST['select'])) {
			// Create connection:
			$conn = mysqli_connect($servername, $username, $password, $dbname);
			
			// Check connection:
			if (!$conn) {
				die("Connection failed: " . mysqli_connect_error());
			}
			
			//Create SQL query:
			$sql = "SELECT id, name, email, city FROM newsletter ORDER BY id";
			
			//SQL query result:
			$result = mysqli_query($conn, $sql);

			if (mysqli_num_rows($result) > 0) {
				$infoText = "<h2>Postituslistalle liittyneet käyttäjät:</h2>
				<table class='table table-bordered table-striped'>
				<tr><th>ID</th><th>Nimi</th><th>Email</th><th>Paikkakunta</th></tr>";
				
				//Output data:
				while($row = mysqli_fetch_assoc($result)) {
					$infoText .= "<tr><td>" . $row['id'] . "</td><td>" .  $row['name'] . "</td><td>" . $row['email'] . "</td><td>" . $row['city'] . "</td></tr>";
				}
				$infoText .= "</table>";
			}
			else {
				$infoText = "Ei tuloksia.";
			}
			
			mysqli_close($conn);
		}
		elseif (isset($_POST['delete'])) {
			//Check email input:
			if (empty($_POST["email2"])) {
				$emailErr2 = "Tämä kenttä on pakollinen.";
				$formIsValid = false;
			}
			elseif (!filter_var($_POST["email2"], FILTER_VALIDATE_EMAIL)) {
				$emailErr2 = "Epäkelvollinen sähköpostiosoite.";
				$formIsValid = false;
			}
			else {
				$email = testInput($_POST["email2"]);
			}
			
			if ($formIsValid) {
				// Create connection:
				$conn = mysqli_connect($servername, $username, $password, $dbname);
				
				// Check connection:
				if (!$conn) {
					die("Connection failed: " . mysqli_connect_error());
				}
				
				//Check if email exists in database:
				$sql = "SELECT * FROM newsletter WHERE email='$email'";
				if (mysqli_query($conn, $sql)) {
					$result = mysqli_query($conn, $sql);
					if (mysqli_num_rows($result) > 0) {
						//SQL query for deletion:
						$sql = "DELETE FROM newsletter WHERE email='$email'";

						if (mysqli_query($conn, $sql)) {
							$infoText2 = "Sähköpostiosoite " . $email . " poistettu postituslistalta!";
						}
						else {
							$infoText2 = "MySQL-virhe: " . $sql . "<br>" . mysqli_error($conn);
						}
					}
					else {
						$infoText2 = "Kyseistä sähköpostiosoitetta ei löytynyt postituslistalta!";
					}
				} 
				else {
					$infoText2 = "MySQL-virhe: " . $sql . "<br>" . mysqli_error($conn);
				}
				
				mysqli_close($conn);
			}
		}
	}
?>
	<div class="container">
		<div class="row d-flex justify-content-center">
			<div class="newsletter-form col-10 mt-2 rounded-lg text-center">
				<form class="form" id="newsletterForm" action="harj_newsletter.php" method="post">
					<legend class="legend">Liity postituslistalle</legend>
					<div class="form-group">
						<input class="input form-control" type="text" placeholder="*Nimi" name="name">
						<span class="error"><?php echo $nameErr;?></span>
					</div>
					<div class="form-group">
						<input class="input form-control" type="email" placeholder="*Sähköposti" name="email">
						<span class="error"><?php echo $emailErr;?></span>
					</div>
					<div class="form-group">
						<input class="input form-control" type="text" placeholder="*Paikkakunta" name="city">
						<span class="error"><?php echo $cityErr;?></span>
					</div>
					<span class="explanation">* Pakollinen</span><br><br>
					<div class="form-group">
						<button class="btn btn-primary" type="submit" name="save">Lisää tiedot</button>
						<button class="btn btn-primary" type="reset">Tyhjennä tekstikentät</button>
						<button class="btn btn-primary" type="submit" name="select">Näytä tiedot</button>
					</div>
					<span class="info-text"><?php echo $infoText;?></span>
				</form>
			</div>
			<div class="newsletter-form col-10 mt-2 rounded-lg text-center">
				<form class="form" id="newsletterForm2" action="harj_newsletter.php" method="post">
					<legend>Poistu postituslistalta</legend>
					<div class="form-group">
						<input class="input form-control" type="text" placeholder="Sähköposti" name="email2">
						<span class="error"><?php echo $emailErr2;?></span>
					</div>
					<div class="form-group">
						<button class="btn btn-primary" type="submit" name="delete">Poista</button>
					</div>
					<span class="info-text"><?php echo $infoText2;?></span>
				</form>
			</div>
		</div>
	</div>
</body>
</html>
<?php
	function testInput($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
?>