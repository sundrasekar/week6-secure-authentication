# Week 6 - Secure Authentication System

A secure full-stack authentication system developed as part of the DG Interns Hub Week 6 task.

## Features

- User Signup
- User Login
- Email validation
- Password validation
- Password hashing using bcrypt
- Duplicate email prevention
- JWT authentication
- Protected Dashboard
- Logout functionality
- MongoDB database
- Secure HTTP headers using Helmet
- Rate limiting
- Responsive UI

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Security
- bcryptjs
- JSON Web Token (JWT)
- Helmet
- Express Rate Limit
- Express Validator

## Project Structure

```text
w6 web-project
│
├── backend
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend
    ├── index.html
    ├── signup.html
    ├── dashboard.html
    └── style.css