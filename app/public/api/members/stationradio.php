<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'SELECT * FROM Member WHERE radioNumber=? AND stationNumber=?'
);



//How to prevent SQL injections:
$stmt->execute([
  $_POST['radioNumber'],
  $_POST['stationNumber']
]);

$members = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
