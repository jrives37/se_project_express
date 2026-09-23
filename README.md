# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

# Project Functionality

The API provides the following functionality:

Create new users
Retrieve a list of users
Retrieve a specific user by ID
Create clothing items
Retrieve a list of clothing items
Delete clothing items
Like clothing items
Dislike clothing items
Validate user and clothing item data
Handle invalid requests and server errors

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

# Technologies and techniques used:

Express is used to create the web server, define API routes, handle HTTP requests and responses, and organize middleware.

MongoDB is used as the database for storing users and clothing items. Mongoose is used to define data schemas, create models, validate data, and interact with the MongoDB database.

The project uses REST principles to organize API endpoints and HTTP methods such as GET, POST, PUT, and DELETE.

Mongoose validation is used to ensure that submitted data meets the requirements defined in the schemas. The API also handles errors such as invalid IDs, missing resources, invalid data, and server errors.

ESLint with the Airbnb configuration is used to maintain consistent JavaScript code style and identify potential problems in the code.

Postman is used to send HTTP requests to the API and test its endpoints and responses.

MongoDB Compass is used to view and manage the data stored in the MongoDB database.

# Project Pitch

https://www.loom.com/share/ffc628309e194c408f3daed194d3247d
