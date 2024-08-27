# **Social Network API**

## **Table of Contents**

- [**Social Network API**](#social-network-api)
  - [**Table of Contents**](#table-of-contents)
  - [**Description**](#description)
  - [**Installation**](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Users](#users)
    - [Thoughts](#thoughts)
  - [Models](#models)
    - [User Model](#user-model)
    - [Thought Model](#thought-model)
    - [Reaction Schema](#reaction-schema)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Walkthrough Video](#walkthrough-video)
  - [Contact](#contact)

## **Description**

The **Social Network API** is a backend API built using **Express.js**, **MongoDB**, and **Mongoose** to provide a foundation for a social networking platform. It allows users to share their thoughts, react to friends' thoughts, and manage a list of friends. The API is designed to handle large amounts of unstructured data, making it ideal for social media applications.

## **Installation**

To set up the project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/social-network-api.git
   cd social-network-api
2. **Install dependencies:**
   
    ```bash
   npm install
3. **Configure the MongoDB connection:**
   
   Ensure you have MongoDB installed and running on your local machine. By default, the application connects to mongodb://127.0.0.1:27017/socialNetworkDB. If your MongoDB instance is different, update the connection string in config/connection.js.

4. **Seed the database (optional):**
   
   ``` bash
   node utils/seed.js
5. **Start the server:**
   
   ```bash
   npm start
## Usage
After starting the server, you can interact with the API using tools like Insomnia or Postman. The API runs on http://localhost:3001 by default.

**eample commands**

* Get all users:
  ```bash 
  GET /api/users

* Create a new thought:
  ```bash 
  POST /api/thoughts
  {
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"}



## API Endpoints
### Users
* GET /api/users - Get all users
* GET /api/users/:id - Get a single user by ID
* POST /api/users - Create a new user
* PUT /api/users/:id - Update a user by ID
* DELETE /api/users/:id - Delete a user by ID
* POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list
* DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list
### Thoughts
* GET /api/thoughts - Get all thoughts
* GET /api/thoughts/:id - Get a single thought by ID
* POST /api/thoughts - Create a new thought
* PUT /api/thoughts/:id - Update a thought by ID
* DELETE /api/thoughts/:id - Delete a thought by ID
* POST /api/thoughts/:thoughtId/reactions - Create a reaction to a thought
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction from a thought
## Models
### User Model
* username: String, required, unique
* email: String, required, unique, must match a valid email address
* thoughts: Array of Thought ObjectIds
* friends: Array of User ObjectIds
* Virtuals:
* friendCount: Returns the number of friends
### Thought Model
* thoughtText: String, required, between 1 and 280 characters
* createdAt: Date, default value is the current timestamp
* username: String, required (user who created the thought)
* reactions: Array of nested documents created with the reactionSchema
* Virtuals:
  * reactionCount: Returns the number of reactions
### Reaction Schema
* reactionId: ObjectId, default value is set to a new ObjectId
* reactionBody: String, required, maximum 280 characters
* username: String, required
* createdAt: Date, default value is the current timestamp
## Features
* User management (create, read, update, delete)
* Thought management with reactions (create, read, update, delete)
* Friend list management (add/remove friends)
* Timestamp formatting with a getter method
* Virtual properties for friend and reaction counts
## Technologies Used
* Node.js - JavaScript runtime
* Express.js - Web framework for Node.js
* MongoDB - NoSQL database
* Mongoose - MongoDB object modeling for Node.js
* JavaScript (ES6+) - Programming language
## Contributing
  Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to update tests as appropriate.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Walkthrough Video
A walkthrough video demonstrating the setup, functionality, and testing of the API endpoints can be found here. (Replace # with the actual URL once the video is available)

## Contact
For any questions, please contact:

* Your email: mameami26@gmail.com
* GitHub: mameami26@
