<?php
// use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
  $stmt = $db->prepare('SELECT memberGuid FROM Member');
  $stmt->execute();
$member = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($member, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
