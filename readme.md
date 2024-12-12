# MERN Assessment 🚀✨

## Objective
Build a RESTful API with authentication and CRUD operations using **Express.js** and **MongoDB**.

---

## Features 🎯

### 1. Authentication 🔒
- **Endpoint:** `POST /login`
  - Accepts email and password in the request body.
  - Validates credentials against the MongoDB `users` collection.
  - Returns a JWT token if valid.
  - Handles invalid credentials gracefully.

### 2. CRUD Operations (Tasks) 📋
- **Endpoints:**
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Create a new task (requires authentication).
  - `GET /tasks/:id`: Fetch a task by ID (requires authentication).
  - `PUT /tasks/:id`: Update an entire task (requires authentication).
  - `PATCH /tasks/:id`: Update specific fields of a task (requires authentication).
  - `DELETE /tasks/:id`: Delete a task by ID (requires authentication).

### 3. MongoDB Schema 🗂️
- **Task Collection Fields:**
  - `title`: string, required.
  - `description`: string.
  - `userId`: string.
  - `completed`: boolean, default: false.
  - `createdAt`: date, default: current timestamp.

### 4. Middleware 🛡️
- Validate JWT tokens for protected routes.
- Restrict creation, update, and deletion of tasks to authenticated users.

### 5. Error Handling 🚨
- Return appropriate HTTP status codes for:
  - Validation errors.
  - Unauthorized access.
- Include meaningful error messages in responses.

---

## Deliverables 📦
- **Code Repository**:
  - Express application code.
  - MongoDB models and connection logic.
  - Middleware for JWT validation.
  - Docs for requests and responses for all endpoints.

- **README.md**:
  - Steps to set up the project.
  - Example request/response for each endpoint.

## Scripts 📜

- **`yarn build`**: Compiles the TypeScript code to JavaScript using `tsc`.  
- **`yarn start:dev`**: Runs the app in development mode using `ts-node`.  
- **`yarn dev`**: Starts the app with `nodemon` for live reloading during development.  
- **`yarn start`**: Builds the app and then starts it using the compiled JavaScript in the `dist` directory.  
