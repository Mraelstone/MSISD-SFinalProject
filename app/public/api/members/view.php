<?php
// use Ramsey\Uuid\Uuid;
// Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

if(isset($_GET['memberGuid'])) {
  $stmt = $db->prepare('SELECT * FROM Member WHERE memberGuid=?');
  $stmt->execute([$_GET['memberGuid']]);
}
else {
  $stmt = $db->prepare('SELECT * FROM Member');
  $stmt->execute();
}
$member = $stmt->fetchAll();
// Step 3: Convert to JSON
$json = json_encode($member, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;
?>
