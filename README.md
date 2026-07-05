# TeamFlow

## Description

TeamFlow is a MERN Stack project management application where users can create projects, manage tasks, and track progress securely using JWT authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create, Update and Delete Projects
- Create, Update and Delete Tasks
- Update Task Status
- User-specific Project Access

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```