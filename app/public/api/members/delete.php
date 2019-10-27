<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'DELETE FROM Member WHERE memberGuid=?'
);



//How to prevent SQL injections:
$stmt->execute([
  $_POST['memberGuid']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
//303 status code says redirect with a Get
header('Location: ../members/');
