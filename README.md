# Sprint 7 project
Project 7: API Testing with JavaScript
Project Description
This project involves writing automated tests for a variety of HTTP requests (GET, POST, PUT, DELETE) to ensure that the Urban Grocers API functions as expected. Using Postman and VS Code, I created tests to verify the status codes and response data of various endpoints, focusing on key HTTP methods and working with API responses.

Technologies Used
VS Code: Used for editing and managing project files, writing tests, and running the application.
Postman: Used to manually test the endpoints and ensure the API is behaving as expected.
JavaScript: Used to write automated test scripts for the API requests.
Node.js: Used to run the testing scripts.
npm: Used to install necessary packages and dependencies.
Git and GitHub: Used for version control and project submission.
Project Setup
Step 1: Clone the repository
To get started with the project, clone the repository from GitHub:

bash
Copy code
git clone https://github.com/username/hm07-qa-us.git
Step 2: Install dependencies
Navigate to your project folder and install the necessary dependencies:

bash
Copy code
cd hm07-qa-us
npm install
Step 3: Set up config.js
In the config.js file, replace the API URL with the link generated after launching the Urban Grocers server.

javascript
Copy code
const endpoint = "https://your-server-url.com";
module.exports = { endpoint };
Step 4: Start the server
Use the "start server" button to launch the Urban Grocers server and ensure it’s running. Check the server address in the console or the provided link.

Tasks
Task 1: Tests for GET Requests
For this task, I selected an endpoint from the Urban Grocers API and wrote at least two tests:

Check the response status code (e.g., expecting a 200 OK).
Parse the response body to ensure it contains the expected data (e.g., product list or details).
Task 2: Tests for POST Requests
For the POST request, I wrote two tests:

Check the response status code (e.g., expecting a 201 Created).
Parse the response body to confirm the newly created resource (e.g., product or user) is returned correctly.
Task 3: Tests for PUT Requests
For the PUT request, I wrote two tests:

Check the response status code (e.g., expecting a 200 OK).
Parse the response body to ensure the updated resource is returned correctly (e.g., updated product details).
Task 4: Tests for DELETE Requests
For the DELETE request, I wrote two tests:

Check the response status code (e.g., expecting a 204 No Content).
Parse the response body to ensure the resource was successfully deleted or no longer exists.
Task 5: README.md
This file provides an overview of the project, including technologies, setup instructions, and task details.

How to Run the Tests
Set up the environment by following the setup steps above.
Run the tests using the following command:
bash
Copy code
npx jest
This will run all the tests and check the status codes and response data for each API request.
The documentation source we used is api docs and swagger.
Conclusion
This project demonstrates the use of automated API testing using JavaScript. The tests are written to ensure the proper behavior of various HTTP methods (GET, POST, PUT, DELETE) with expected status codes and response data. Using tools like Postman and VS Code, this process can help identify bugs or issues in the API quickly and efficiently.