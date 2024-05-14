from plyer import notification

# Create and display a notification
notification.notify(
    title='Title',  # Notification title
    message='Your message here',  # Notification message
    app_name='My App',  # Application name (optional)
    timeout=10  # Timeout in seconds (optional)
)
