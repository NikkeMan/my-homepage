<?php
$servername = "localhost";
$username = "niklep";
$password = "Elpsycongroo123";
$dbname = "niklep";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO opiskelijat (etunimi, sukunimi, paikkakunta, maa)
VALUES ('John', 'Doe', 'California', 'USA')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
