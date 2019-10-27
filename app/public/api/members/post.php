<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
$guid = Uuid::uuid4()->toString();
// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Member
  (memberGuid, firstName, lastName, sexAtBirth, email, dob, addrStreet, addrCity, addrState, addrZipcode, workPhone, mobilePhone,startDate, radioNumber, stationNumber, isActive, memberPosition)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
);



//How to prevent SQL injections:
$stmt->execute([
  $guid,
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['sexAtBirth'],
  $_POST['email'],
  $_POST['dob'],
  $_POST['addrStreet'],
  $_POST['addrCity'],
  $_POST['addrState'],
  $_POST['addrZipcode'],
  $_POST['workPhone'],
  $_POST['mobilePhone'],
  $_POST['startDate'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['memberPosition']
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
header('Location: ../members/');
//tells you where the other place is you're sending it to
