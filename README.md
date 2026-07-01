# Student Management API

A RESTful API built using Node.js, Express.js, MongoDB, and Mongoose.

## Features

* CRUD Operations
* REST API Architecture
* MongoDB Integration
* Mongoose Models
* Validation Middleware
* Error Handling
* Pagination
* Search Functionality
* Postman API Testing

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

## Installation

```bash
git clone <repository-url>

cd student-management-api

npm install

npm run dev
```

## Environment Variables

Create a `.env` file.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| GET    | /students     | Get all students  |
| GET    | /students/:id | Get student by id |
| POST   | /students     | Create student    |
| PUT    | /students/:id | Update student    |
| PATCH  | /students/:id | Partial update    |
| DELETE | /students/:id | Delete student    |

## Testing

API endpoints can be tested using Postman.
