<?php
// use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
  $stmt = $db->prepare('SELECT * FROM Member m,Certified ct WHERE m.memberGuid=? AND m.memberGuid=ct.memberGuid');
  $stmt->execute([$_GET['memberGuid']]);
$member = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($member, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
