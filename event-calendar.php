<!DOCTYPE html>
<html>
<head>
    <title>Event Calendar</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-4">
    <h1>Event Calendar</h1>

    <?php
    $events = [];

    if (isset($_POST['event_date']) && isset($_POST['event_description'])) {
        $eventDate = $_POST['event_date'];
        $eventDescription = $_POST['event_description'];
        $events[] = ['date' => $eventDate, 'description' => $eventDescription];
    }

    if (isset($_POST['delete_event'])) {
        $eventIndex = $_POST['delete_event'];
        if (isset($events[$eventIndex])) {
            unset($events[$eventIndex]);
            $events = array_values($events);
        }
    }
    ?>

    <form method="post">
        <div class="form-group">
            <label for="event_date">Date:</label>
            <input type="date" name="event_date" required>
			
            <label for="event_description">Event Description:</label>
            <input type="text" name="event_description" required>
			<button type="submit" class="btn btn-primary">Add Event</button>
        </div>
    </form>

    <h2>Upcoming Events:</h2>
    <ul class="list-group">
        <?php
        foreach ($events as $index => $event) {
            echo '<li class="list-group-item">' . $event['date'] . ': ' . $event['description'] .
                ' <form method="post" style="display: inline;">
                <input type="hidden" name="delete_event" value="' . $index . '">
                <button type="submit" class="btn btn-danger btn-sm ml-2">Delete</button>
                </form></li>';
        }
        ?>
    </ul>
</div>

</body>
</html>
