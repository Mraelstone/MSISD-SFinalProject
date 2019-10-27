<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
// Step 2: Prepare & run the query
$stmt = $db->prepare('SELECT firstName, lastName, memberGuid, certificationGuid, email FROM Member m, Certified ct, Certification c WHERE ct.certification=c.certificationGuid AND ct.certification=? AND m.memberGuid=ct.member AND CURDATE()>DATE_ADD(ct.assignedDate),INTERVAL c.expirationPeriod YEAR');



//How to prevent SQL injections:
$stmt->execute([
  $_GET['certificationGuid']
]);

$expiredmembers = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($expiredmembers, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;


// Step 4: Output
header('HTTP/1.1 303 See Other');
//303 status code says redirect with a Get
header('Location: ../certifications/');
//tells you where the other place is you're sending it to
