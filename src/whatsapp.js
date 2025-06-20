<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WhatsApp Web Clone</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="whatsapp-container">
        <!-- Left Sidebar -->
        <div class="sidebar">
            <header>
                <img src="profile.jpg" alt="Profile Picture" class="profile-img">
                <div class="icons">
                    <i class="icon">🔔</i>
                    <i class="icon">🔍</i>
                    <i class="icon">⋮</i>
                </div>
            </header>
            <div class="search">
                <input type="text" placeholder="Search or start new chat">
            </div>
            <div class="chat-list">
                <!-- Chat items will go here -->
            </div>
        </div>

        <!-- Chat Window -->
        <div class="chat-window">
            <header>
                <div class="contact-info">
                    <img src="contact.jpg" alt="Contact" class="contact-img">
                    <span>Contact Name</span>
                </div>
                <div class="icons">
                    <i class="icon">📞</i>
                    <i class="icon">📷</i>
                    <i class="icon">📎</i>
                </div>
            </header>
            <div class="messages">
                <!-- Messages will go here -->
            </div>
            <footer>
                <input type="text" placeholder="Type a message">
                <button>Send</button>
            </footer>
        </div>
    </div>
</body>
</html>
