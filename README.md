# Student Registration Form

A modern React web application for student registration. Built with Vite and styled with custom CSS, this project demonstrates form handling, state management, and component-based architecture.

## Features

- **Student Registration Form** - Collect student information including name, email, phone, and password
- **Form Validation** - Input fields with appropriate types (text, email, tel, password)
- **State Management** - Uses React hooks (useState) for form state management
- **Responsive Design** - Clean, centered form layout with consistent styling
- **Form Submission** - Handles form submission with data logging and user feedback

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Collaboration
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

### Development Server
Starts the development server with hot module reloading:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or similar)

### Build for Production
Creates an optimized production build:
```bash
npm run build
```

### Linting
Check code quality with ESLint:
```bash
npm run lint
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Tech Stack

- **React** - UI library (v19.2.6)
- **Vite** - Fast build tool and development server (v8.0.12)
- **JavaScript (ES Modules)** - Modern JavaScript with module support
- **CSS** - Custom styling
- **ESLint** - Code quality and consistency

## Project Structure

```
Collaboration/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── Test.jsx             # Student registration form component
│   ├── Test.css             # Form styles
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   ├── buttonTest.jsx       # Button test component
│   └── assets/              # Static assets
├── public/                  # Public static files
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # This file
```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the provided URL (typically `http://localhost:5173`)

3. Fill out the Student Registration Form with:
   - Your name
   - Email address
   - Phone number
   - Password

4. Click Submit to view the form data in an alert and console

## Form Handling

The registration form uses React's `useState` hook to manage form state. When submitted, it:
- Prevents default form submission behavior
- Displays an alert with the submitted data
- Logs the form data to the browser console

## Future Enhancements

Potential improvements for this project:
- Add form validation for email and password strength
- Implement backend API integration for data submission
- Add success/error messaging
- Implement file upload for profile picture
- Add a confirmation page or thank you screen
- Mobile-responsive design improvements

## License

This project is open source and available for educational purposes.

---

**Created as part of Zindua School's React curriculum**