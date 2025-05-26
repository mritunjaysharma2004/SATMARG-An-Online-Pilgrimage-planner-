<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Simple message display
    echo "<h2>Thank You!</h2>";
    echo "<p>Dear <strong>$name</strong>, we have received your message:</p>";
    echo "<blockquote>$message</blockquote>";
    echo "<p>We will contact you at <strong>$email</strong> soon.</p>";
} else {
    echo "<p>Something went wrong. Please go back and try again.</p>";
}
?>
// Log the message to a file
$logFile = __DIR__ . '/contact_log.txt';
$logMessage = "Name: $name\nEmail: $email\nMessage: $message\n---\n";

if (file_put_contents($logFile, $logMessage, FILE_APPEND | LOCK_EX) === false) {
    echo "<p>Warning: Unable to log your message at this time.</p>";
}