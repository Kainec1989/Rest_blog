Task: Building a RESTful API for Blog Posts with Express and MongoDB
Objective
Develop a simple RESTful API to manage blog posts. This project will involve creating endpoints for basic CRUD operations (Create, Read, Update, Delete) using Node.js, Express, and MongoDB.
Part 1: Project Setup
Initialize the Project
Start a new Node.js project and set up the required dependencies for building the API.
Organize the Project
Create a clear file structure with separate folders for routes, models, and controllers.
Set up environment variables for sensitive information like the database connection string.
Run the Server
Ensure your server is running on http://localhost:5000 and ready to handle requests.
Part 2: CRUD Operations
Create the following API endpoints:
GET /posts: Fetch all blog posts from the database.
GET /posts/:id: Fetch a single blog post by its ID.
POST /posts: Create a new blog post with fields like title, message, and creator. Validate inputs before saving.
PUT /posts/:id: Update an existing post by its ID.
DELETE /posts/:id: Delete a specific post by its ID.
Part 3: Additional Features
Validation: Ensure fields like title and message are not empty during create or update operations.
Error Handling: Add clear error messages for issues like invalid inputs or missing data.
Human-Readable Dates: Display post creation dates in a format like DD/MM/YYYY.
Part 4: Testing and Deliverables
Test all endpoints using Postman (or similar tools).
Provide evidence of testing, such as screenshots/logs for:
Fetching all posts.
Fetching a single post by ID.
Creating a new post.
Updating a post.
Deleting a post.
Add at least three sample posts to your database to showcase functionality.
Bonus Tasks (Optional)
Add a “like” feature to blog posts, including an endpoint to increment likes for a post.
By completing this task, you’ll create a fully functional RESTful API and strengthen your backend development skills.
