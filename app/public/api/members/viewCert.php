<?php
// use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
  $stmt = $db->prepare('SELECT certificationGuid, certificationName, agency FROM Certification c,Certified ct WHERE ct.member=? AND c.certificationGuid=ct.certification');
  $stmt->execute([$_GET['memberGuid']]);
$certification = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($certification, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
