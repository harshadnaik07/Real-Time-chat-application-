# Real-Time-chat-application-

*COMPANY*: CODTECH IT SOLUTION 

*NAME*: HARSHAD ARJUN NAIK 

*INTERN ID*: CT04DR2449

*DOMAIN*: FRONT END DEVELOPMENT 

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# Project Overview

This project is a Real-Time Chat Application built using React (frontend) and WebSockets (backend). The main goal of this application is to enable users to communicate with each other instantly in real time through a simple, clean, and responsive chat interface. Messages sent by one user are immediately broadcast to all connected users without the need to refresh the page.

The application demonstrates how modern web technologies can be used to build real-time systems similar to chat platforms like WhatsApp or Messenger, but in a simplified and educational manner.

# Technologies & Tools Used
## Frontend (Client)

- React.js (v18)
Used to build a component-based, interactive user interface.

- Vite
Used as a fast development server and build tool for React.

- HTML5
Provides the basic structure of the web application.

- CSS3
Used for styling the chat interface and making it responsive.

- JavaScript (ES6+)
Used for application logic and WebSocket communication.

- Browser WebSocket API
Used on the client side to establish a real-time connection with the server.

## Backend (Server)

- Node.js
JavaScript runtime environment used to run the WebSocket server.

- ws (WebSocket library)
Lightweight WebSocket library used to handle real-time communication between clients.

🖥 Platform & Environment

Operating System: Windows / macOS / Linux

Browser: Google Chrome, Edge, Firefox (latest versions recommended)

Development Environment: VS Code

Runtime: Node.js

# Project Structure
## Client Folder

The client side contains all the frontend code:

- index.html – Entry HTML file with a root div for React.

- main.jsx – React entry point where the app is mounted.

- App.jsx – Main React component containing chat logic and UI.

- App.css – Stylesheet for the chat interface.

- package.json – Contains frontend dependencies and scripts.

# Server Folder

The server side contains the WebSocket logic:

- server.js – WebSocket server handling connections, messages, and broadcasting.

- package.json – Contains backend dependency (ws).
  

# How the Application Works

1 When the server starts, it opens a WebSocket connection on port 8080.

2 When a client connects:

- The server sends the existing chat history.

- The client establishes a WebSocket connection.

3 Each browser tab gets a unique user ID stored in sessionStorage.

4 When a user sends a message:

- The message includes text, timestamp, and user ID.

- The message is sent to the server.

5 The server:

- Stores the message in memory.

- Broadcasts the message to all connected clients.

6 The client:

- Displays messages on the right side if sent by the current user.

- Displays messages on the left side if sent by other users.

7 Messages are saved in localStorage so they persist on refresh.

# Features

- Real-time messaging using WebSockets

- Sender messages aligned to the right

- Receiver messages aligned to the left

- Message timestamps

- Responsive UI for mobile and desktop

- Persistent chat history using localStorage

- Unique user identity per browser tab

- Clean and minimal UI

 # How to Run the Project
## Start the Server
- cd Real-Time-chat-application-
- cd server
- npm install
- node server.js

## Start the Client
- cd Real-Time-chat-application-
- cd client
- npm install
- npm run dev


Then open the application in your browser.

# output:
<img width="1893" height="903" alt="Image" src="https://github.com/user-attachments/assets/3268d5f3-9150-416b-8d0a-ef8dc7cbc9da" />

