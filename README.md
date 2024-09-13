# Node.js To-Do List Application

A robust To-Do List application built with Node.js, Express, and MongoDB. This application provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks, as well as marking tasks as completed and categorizing them.

## Author

**Ajit Kumar Pandit**

- GitHub: [@AJIT-KUMAR-PANDIT](https://github.com/AJIT-KUMAR-PANDIT)

## Features

- Create tasks with title, description, due date, and category
- Retrieve all tasks
- Mark tasks as completed
- Edit task details
- Delete tasks
- Categorize tasks
- Fetch tasks by category

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/AJIT-KUMAR-PANDIT/nodejs-todo-list.git
   cd nodejs-todo-list
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   MONGODB_URL=your_mongodb_connection_string
   PORT=3000
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Usage

To start the server, run:

```
npm start
```

The server will start running on `http://localhost:3000` (or the port you specified in the `.env` file).
or use below link in place of `http://localhost:3000` to try
```
https://ajit-nodejs-todo-list.vercel.app
```

## API Endpoints

- `POST /api/tasks`: Create a new task
- `GET /api/tasks`: Get all tasks
- `PATCH /api/tasks/:id/complete`: Mark a task as completed
- `PUT /api/tasks/:id`: Edit a task
- `DELETE /api/tasks/:id`: Delete a task
- `GET /api/tasks/category/:category`: Get tasks by category

## Project Structure

```
.
├── app.js
├── config
│   └── database.js
├── controllers
│   ├── completeTask.js
│   ├── createTask.js
│   ├── deleteTask.js
│   ├── getAllTasks.js
│   ├── getTasksByCategory.js
│   ├── index.js
│   └── updateTask.js
├── middleware
│   └── errorHandler.js
├── models
│   └── task.js
├── routes
│   └── taskRoutes.js
├── package.json
└── README.md
```

## Code Structure

- `app.js`: Main application file containing the Express server setup
- `config/database.js`: Database connection configuration
- `controllers/`: Contains all controller functions
  - `index.js`: Exports all controller functions
  - `createTask.js`: Logic for creating a new task
  - `getAllTasks.js`: Logic for fetching all tasks
  - `completeTask.js`: Logic for marking a task as completed
  - `updateTask.js`: Logic for updating a task
  - `deleteTask.js`: Logic for deleting a task
  - `getTasksByCategory.js`: Logic for fetching tasks by category
- `middleware/errorHandler.js`: Global error handling middleware
- `models/task.js`: Mongoose schema definition for tasks (model name: Task_NodeJs_To_Do_List)
- `routes/taskRoutes.js`: Route definitions for task-related endpoints

## Database Schema

The application uses a MongoDB database with the following schema for tasks:

```javascript
{
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  dueDate: Date,
  category: String
}
```

## Testing with Postman

You can use Postman to test the API endpoints. Here are examples for each route:

### 1. Create a new task

- Method: POST
- URL: `http://localhost:3000/api/tasks`
- Body (raw JSON):
  ```json
  {
    "title": "Complete project",
    "description": "Finish the Node.js to-do list project",
    "dueDate": "2024-12-31",
    "category": "Work"
  }
  ```

### 2. Get all tasks

- Method: GET
- URL: `http://localhost:3000/api/tasks`

### 3. Mark a task as completed

- Method: PATCH
- URL: `http://localhost:3000/api/tasks/:id/complete`
  (Replace `:id` with the actual task ID)

### 4. Edit a task

- Method: PUT
- URL: `http://localhost:3000/api/tasks/:id`
  (Replace `:id` with the actual task ID)
- Body (raw JSON):
  ```json
  {
    "title": "Updated task title",
    "description": "Updated task description",
    "dueDate": "2024-12-31",
    "category": "Personal"
  }
  ```

### 5. Delete a task

- Method: DELETE
- URL: `http://localhost:3000/api/tasks/:id`
  (Replace `:id` with the actual task ID)

### 6. Get tasks by category

- Method: GET
- URL: `http://localhost:3000/api/tasks/category/:category`
  (Replace `:category` with the actual category name, e.g., "Work")

### Steps to test with Postman:

1. Open Postman and create a new request for each of the above endpoints.
2. Set the appropriate HTTP method (GET, POST, PUT, PATCH, DELETE) for each request.
3. Enter the URL as specified above.
4. For POST and PUT requests, go to the "Body" tab, select "raw" and "JSON (application/json)", then enter the example JSON provided.
5. Click "Send" to make the request.
6. Observe the response in the lower panel. You should see the appropriate data or confirmation messages.

Remember to replace `:id` in the URLs with an actual task ID when testing. You can get task IDs from the response of the "Get all tasks" or "Create a new task" requests.

## Error Handling

The application uses a global error handling middleware to catch and respond to errors consistently. In development mode, it provides detailed error messages, while in production, it gives a generic error message for security reasons.

When testing with Postman, you may encounter error responses. These will typically include a status code and an error message to help you understand what went wrong.

## Testing

To run automated tests (once implemented), use:

```
npm test
```

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, please contact Ajit Kumar Pandit via GitHub: [@AJIT-KUMAR-PANDIT](https://github.com/AJIT-KUMAR-PANDIT).
