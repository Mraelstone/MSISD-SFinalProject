<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Member
  (memberGuid, firstName, lastName, sexAtBirth, addrStreet, addrCity, addrState, addrZipcode, workPhone, mobilePhone, radioNumber, stationNumber, isActive, memberPosition)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

//How to prevent SQL injections:
$stmt->execute([
  $guid, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['sexAtBirth'],
  $_POST['addrStreet'],
  $_POST['addrCity'],
  $_POST['addrState'],
  $_POST['addrZipcode'],
  $_POST['workPhone'],
  $_POST['mobilePhone'],
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
header('Location: ../members/?guid='.$guid);
//tells you where the other place is you're sending it to
