
# Blog API

## Overview

This is a RESTful API for managing a simple blog platform. The API allows users to sign up, log in, create, update, delete, and view blog posts. It uses JWT-based authentication for secure access to protected routes.

## Features

- **User Authentication**:  
  - Sign up and log in using email and password.  
  - JWT-based authentication with bcrypt password hashing.  
  - Secure routes with authentication middleware.  

- **Post Management**:  
  - Create, update, and delete blog posts.  
  - Get all blog posts.  
  - Only post authors can update or delete their posts.  

- **Security**:  
  - JWT tokens are used for secure authentication and authorization.  
  - Passwords are hashed with bcrypt for security.  
  - Middleware ensures only authenticated users can access certain routes.  

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Authentication**: JWT (JSON Web Tokens), bcrypt  
- **Security**: Cookie-based authentication, JWT middleware  
- **Database**: MongoDB with Mongoose ORM  

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
npm run dev
```

The server will run on port `5001` (or the port you specify in `.env`).

---

## API Endpoints

### User Routes (`/auth`)

- **POST /auth/signup**: Register a new user.  
- **POST /auth/login**: Log in an existing user.  
- **POST /auth/logout**: Log out the user.  

### Post Routes (`/post`)

- **GET /post/**: Get all posts.  
- **POST /post/create**: Create a new post (authentication required).  
- **PUT /post/update-post/:id**: Update an existing post by its ID (authentication and authorization required).  
- **DELETE /post/delete-post/:id**: Delete a post by its ID (authentication and authorization required).  

---

## Example Requests and Responses

### 1. Create Post (POST `/post/create`)

**Request Body:**

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post."
}
```

**Response:**

```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "601c2f1f6d35f204d8e1f1e1",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "author": "601c2f1f6d35f204d8e1f1e0",
    "createdAt": "2025-02-06T12:34:56.789Z",
    "updatedAt": "2025-02-06T12:34:56.789Z"
  }
}
```

---

### 2. Update Post (PUT `/post/update-post/:id`)

**Request URL:**  
`PUT /post/update-post/601c2f1f6d35f204d8e1f1e1`

**Request Body:**

```json
{
  "title": "Updated Blog Post Title"
}
```

**Response:**

```json
{
  "message": "Post updated successfully",
  "post": {
    "_id": "601c2f1f6d35f204d8e1f1e1",
    "title": "Updated Blog Post Title",
    "content": "This is the content of my first blog post.",
    "author": "601c2f1f6d35f204d8e1f1e0",
    "createdAt": "2025-02-06T12:34:56.789Z",
    "updatedAt": "2025-02-06T13:00:00.000Z"
  }
}
```

---

### 3. Delete Post (DELETE `/post/delete-post/:id`)

**Request URL:**  
`DELETE /post/delete-post/601c2f1f6d35f204d8e1f1e1`

**Response:**

```json
{
  "message": "Post deleted successfully",
  "post": {
    "acknowledged": true,
    "deletedCount": 1
  }
}
```

---

## Folder Structure

```plaintext
blog-api/
│
├── controllers/
│   ├── post.controller.js      # Handles post-related logic (CRUD operations)
│   ├── user.controller.js      # Handles user-related logic (authentication)
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
│   ├── db.js                   # MongoDB connection setup
│   └── utils.js                # Utility functions (e.g., generate JWT)
│
├── .env                        # Environment variables
├── index.js                    # Main entry point of the application
├── package.json                # NPM dependencies and scripts
└── README.md                   # Project documentation
```

---

## Contribution

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure all code follows the coding standards and includes relevant test coverage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions!
