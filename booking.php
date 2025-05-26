<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $destination = htmlspecialchars($_POST['destination']);
    $date = htmlspecialchars($_POST['date']);

    // Simple message display
    echo "<h2>Booking Confirmation</h2>";
    echo "<p>Thank you, <strong>$name</strong>, for booking your pilgrimage to <strong>$destination</strong> on <strong>$date</strong>.</p>";
    echo "<p>We wish you a safe and blessed journey!</p>";
    // Log the booking details to a file
    $logFile = __DIR__ . '/booking_log.txt';
    $logEntry = "Name: $name, Destination: $destination, Date: $date" . PHP_EOL;

    if (file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX) === false) {
        echo "<p>Failed to log booking details. Please contact support.</p>";
    }
} else {
    echo "<p>Something went wrong. Please go back and try again.</p>";
}
?>