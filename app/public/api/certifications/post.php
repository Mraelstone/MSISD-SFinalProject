<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
$guid = Uuid::uuid4()->toString();
// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Certification
  (certificationGuid, certificationName, expirationDate, agency)
  VALUES(?,?,?,?)'
);



//How to prevent SQL injections:
$stmt->execute([
  $guid,
  $_POST['certificationName'],
  $_POST['expirationDate'],
  $_POST['agency']
]);

//Global Variables: can introduce bad security practices (SQL injection ex.)
// $_POST
// $_GET
// $_ENV
// $_SERVER

// Step 3: (Was retrieve the data, but theres no data to retrieve)
//Could do some error checking - but theres an exception already built it, so skip error checking

// Step 4: Output
header('HTTP/1.1 303 See Other');
//303 status code says redirect with a Get
header('Location: ../certifications/');
//tells you where the other place is you're sending it to
