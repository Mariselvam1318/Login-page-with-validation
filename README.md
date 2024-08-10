# Login and Signup Web Application

## Overview

This web application provides a user interface for logging in and signing up. It includes a form for users to enter their credentials and provides validation feedback. Users can toggle between login and sign-up forms.

## Features

- **Login Form:** Allows users to log in with a username and password.
- **Sign-Up Form:** Allows users to create a new account with username, email, password, and phone number.
- **Form Validation:** Provides validation for required fields, email format, password length, and phone number format.
- **Toggle between Login and Sign-Up:** Users can switch between the login and sign-up forms.

## Prerequisites

- **Web Browser:** A modern web browser to run the application.
- **Internet Connection:** Required for fetching resources such as Bootstrap from CDN.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
2. **Navigate to the Project Directory:**
   ```bash
      cd <project-directory>
3. **Open the Project**:
Open index.html in your preferred web browser.
## Files

*   `**index.html**`: The main HTML file containing the structure of the login and sign-up forms.
*   `**style.css**`: Contains custom CSS styles for the application.
*   `**script.js**`: Contains JavaScript code for form validation and toggling between login and sign-up forms.

## Usage

1.  **Open the Application:**
2.  Open `index.html` in a web browser.
3.  **Login Form:**

*   Enter your username and password.
*   Click "Login" to submit the form.
*   Ensure the password is exactly 8 characters long.

1.  **Sign-Up Form:**

*   Click "Sign Up" to switch to the sign-up form.
*   Enter your username, email, password, and phone number.
*   Click "Sign Up" to submit the form.
*   Ensure the password is exactly 8 characters long, the phone number is 10 digits, and the email format is valid.

1.  **Toggle Between Forms:**

*   Click the "Sign Up" link to switch to the sign-up form.
*   Click the "Login" link to switch back to the login form.

## Code Explanation

### HTML

*   `**index.html**`: Contains the layout and structure of the login and sign-up forms using Bootstrap for styling.

### CSS

*   `**style.css**`: Provides custom styling for the application, including background gradient and card styling.

### JavaScript

*   `**script.js**`: Handles form validation and toggling between login and sign-up form
*   `**validateForm()**`: Validates form fields based on the current form (login or sign-up).
*   `**toggle between forms**`: Switches the form view between login and sign-up.
