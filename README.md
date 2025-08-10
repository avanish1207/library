# library
Library Management System
A dynamic web application for managing a personal book library, built with vanilla HTML, CSS, and JavaScript as part of The Odin Project curriculum.

Project Overview
This project demonstrates fundamental web development concepts including DOM manipulation, object-oriented programming, event handling, and form validation. The application allows users to add, display, and manage books in their personal library without any backend or external dependencies.

Features
Add New Books: Interactive dialog form to input book details (title, author, pages, read status)

Display Library: Dynamic table view showing all books with their information

Remove Books: Delete books from the library with a single click

Toggle Read Status: Mark books as read/unread and update the display instantly

Data Persistence: Books remain in library during the session (stored in JavaScript array)

Responsive Design: Clean, user-friendly interface with proper form validation

Technical Implementation
Core Technologies
HTML5: Semantic structure with modern <dialog> element for modals

CSS3: Clean styling and responsive table layout

Vanilla JavaScript: No frameworks or external libraries

Key JavaScript Concepts Used
Constructor Functions: Book() constructor with unique ID generation using crypto.randomUUID()

Array Management: Dynamic array operations (add, remove, find)

DOM Manipulation: Dynamic table row creation and content updates

Event Delegation: Single event listener handling multiple button interactions

Data Attributes: Linking DOM elements to JavaScript objects using data-book-id

Form Handling: event.preventDefault() and direct element access for form data

