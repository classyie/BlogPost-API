Thanks for the clarification! Here's the updated `README.md` for your Blog API:

```markdown
# Blog API

## Overview

This is a RESTful API for managing a simple blog platform. The API allows users to sign up, log in, create posts, and view existing posts. It uses JWT authentication for secure access to protected routes.

## Features

- **User Authentication**: 
  - Sign up and log in using email and password.
  - JWT-based authentication with bcrypt password hashing.
  - Secure routes with authentication middleware to allow only authorized users to create posts.
  
- **Post Management**: 
  - Create new posts with a title and content.
  - View all posts.

- **Security**:
  - JWT tokens are used for secure authentication and authorization.
  - Passwords are hashed with bcrypt for security.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens), bcrypt
- **Security**: Cookie-based authentication, JWT middleware
- **Database**: MongoDB, Mongoose ORM

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/blog-api.git
```

### 2. Install dependencies

```bash
cd blog-api
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=5001
MONGO_URI=<your-mongo-db-connection-uri>
JWT_SECRET=<your-jwt-secret-key>
```

### 4. Run the application

Start the server with:

```bash
npm start
```

The server will run on port `5001` (or the port you specify in `.env`).

## API Endpoints

### User Routes

- **POST /auth/signup**: Register a new user.
- **POST /auth/login**: Log in an existing user.
- **POST /auth/logout**: Log out the user.

### Post Routes

- **GET /post**: Get all posts.
- **POST /post/create**: Create a new post (authentication required).

## Folder Structure

```plaintext
blog-api/
│
├── controllers/
│   ├── post.controller.js      # Handles post-related logic
│   ├── user.controller.js      # Handles user-related logic
│
├── middleware/
│   └── auth.middleware.js      # Middleware for authenticating routes
│
├── models/
│   ├── post.model.js           # Mongoose schema for posts
│   └── users.model.js          # Mongoose schema for users
│
├── routes/
│   ├── post.route.js           # Post routes
│   └── user.route.js           # User routes
│
├── lib/
│   ├── db.js                   # MongoDB connection
│   └── utils.js                # Utility functions (e.g., generate JWT)
│
├── .env                        # Environment variables
├── package.json                # NPM dependencies and scripts
└── README.md                   # Project documentation
```

## Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure all code follows the coding standards and includes relevant test coverage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions!
```

This should make your Blog API repository look neat and professional for anyone browsing or contributing to it! Let me know if you'd like to add or modify anything.