🌤 Weather Dashboard – React Application
📌 Project Overview

The Weather Dashboard is a modern React-based web application that simulates seasonal weather conditions based on user-selected dates. Instead of using a live weather API, the application applies predefined month-wise temperature logic to demonstrate state handling, conditional rendering, and component-based architecture in React.

The project focuses on clean UI design, smooth user interaction, and professional frontend structure.

🎯 Objective

The primary goal of this project is to:

Demonstrate understanding of React functional components

Implement state management using React Hooks

Apply conditional logic using JavaScript Date object

Design a professional and responsive UI using modern CSS techniques

Integrate Git and GitHub version control workflow

⚙️ Technologies Used

React.js (Functional Components)

JavaScript (ES6+)

HTML5

CSS3 (Gradient animations & Glassmorphism)

Git & GitHub

🧠 Core Logic Implementation

The user selects a date using an HTML date input field.

JavaScript’s Date() object extracts the month from the selected date.

Conditional statements determine temperature based on month ranges:

January–March → 35°C

April–May → 37°C

July–December → Cyclic values (33°C, 32°C, 31°C, 30°C)

React useState hook dynamically updates and renders temperature.

Conditional rendering ensures weather data displays only after selection.

🎨 UI & Design Features

Animated multi-shade gradient background using @keyframes

Glassmorphism card design using backdrop-filter

Smooth hover transitions and button animations

Fully centered and responsive layout

Clean and modern typography

📂 Project Structure
src/
 ├── components/
 │     ├── WeatherDashboard.jsx
 │     ├── WeatherCard.jsx
 │     ├── Navbar.jsx
 │     └── Other modular components
 ├── App.js
 ├── index.js
 └── WeatherDashboard.css

The project follows a modular component-based architecture for scalability and maintainability.

🚀 Features

✔ Date-based weather simulation
✔ Month-wise temperature logic
✔ Dynamic UI rendering
✔ Animated gradient background
✔ Responsive and modern design
✔ Version-controlled using Git

🖼 Application Output

<img width="697" height="601" alt="Screenshot 2026-02-25 134047" src="https://github.com/user-attachments/assets/c139f182-8536-4b69-9407-86bd49ef08bd" />
