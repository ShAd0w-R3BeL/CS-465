Postman was useful because it allowed me to test the REST API separately from Angular. This helped determine whether a problem was caused by the frontend or the backend.

Adding authentication created another testing layer. I tested protected endpoints both with and without a JWT.

For example:

POST /api/trips without JWT
→ 401 Unauthorized

After logging in and including a valid Bearer token:

POST /api/trips with JWT
→ 201 Created

The same security testing was performed for PUT and DELETE.

Some errors I encountered during development included:

CORS errors between Angular and Express
404 errors caused by routes that had not been reloaded
400 errors caused by missing request data
401 Unauthorized errors caused by missing JWTs
Connection refused errors when the Express server was not running
Passport configuration errors
JWT secret configuration problems

Troubleshooting these errors helped me understand how the frontend, REST API, authentication system, server, and database work together.

💭 Reflection

This course gave me experience building a complete application instead of working only with individual pieces of code.

I gained more experience with:

Node.js
Express
Angular
TypeScript
MongoDB
Mongoose
REST APIs
JSON
MVC architecture
CRUD operations
Reusable components
Authentication
Passport
JWT authorization
API testing
Debugging

One of the most useful parts of the course was learning how the different layers of a full stack application communicate. An error shown in Angular could actually come from a REST endpoint, database query, missing server process, CORS setting, authentication configuration, or missing token.

The security work was also useful because it showed why authorization must be enforced on the server. Hiding an Add or Edit button in Angular is not enough to protect data. The API also has to verify that the request contains a valid token before allowing changes to the database.

This project helped me improve my understanding of application architecture and troubleshooting. These skills are useful for my professional goals because software development involves understanding how several technologies work together, not only writing individual functions or pages.

🚀 Running the Project
Install Dependencies

From the Travlr project folder:

npm install

Then install the Angular dependencies:

cd app_admin
npm install
Environment File

Create a .env file in the Travlr project root:

JWT_SECRET=your_secret_value

The .env file is excluded from Git source control.

Start MongoDB

Make sure the MongoDB service is running.

Start Express

From the Travlr root:

npm start

Express runs at:

http://localhost:3000
Start Angular

From:

travlr/app_admin

run:

ng serve

Angular runs at:

http://localhost:4200
📁 Final Repository Structure
travlr/
│
├── app_admin/
│   └── src/
│       └── app/
│           ├── add-trip/
│           ├── edit-trip/
│           ├── login/
│           ├── trip-card/
│           ├── trip-listing/
│           ├── models/
│           ├── authentication.ts
│           └── trip-data.ts
│
├── app_api/
│   ├── config/
│   │   └── passport.js
│   ├── controllers/
│   │   ├── authentication.js
│   │   └── trips.js
│   ├── models/
│   │   ├── db.js
│   │   ├── travlr.js
│   │   └── user.js
│   └── routes/
│       └── index.js
│
├── app_server/
│   ├── controllers/
│   ├── routes/
│   └── views/
│
├── public/
│   ├── css/
│   └── images/
│
├── app.js
├── package.json
├── README.md
└── .gitignore
⚖️ Academic Integrity & AI Disclosure
Academic Purpose

This repository contains coursework completed for Southern New Hampshire University.

AI Usage

Generative AI tools were used as supplemental aids for brainstorming, troubleshooting, and formatting. All implementation, testing, debugging, verification, and submitted work were reviewed by the author in accordance with SNHU academic integrity requirements.

🌙 Author

Matthew Wood

CS-465: Full Stack Development I
Southern New Hampshire University
