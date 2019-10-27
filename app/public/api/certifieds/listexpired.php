<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Prepare & run the query
$stmt = $db->prepare('SELECT * FROM Member AS m, Certified AS ct, Certification AS c WHERE ct.certification=c.certificationGuid AND m.memberGuid=ct.member AND CURDATE()>(DATE_ADD(ct.assignedDate,INTERVAL c.expirationPeriod YEAR))');



//How to prevent SQL injections:
$stmt->execute();

$expiredmembers = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($expiredmembers, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
