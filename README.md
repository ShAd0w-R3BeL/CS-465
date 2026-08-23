# 🐺 CS-465: Full Stack Development I

## 🌙 Travlr Getaways MEAN Stack Application

---

# 📌 Overview

This repository contains my work for **CS-465: Full Stack Development I** at **Southern New Hampshire University**.

Throughout the course, I developed Travlr Getaways from a static HTML website into a full stack **MEAN application** using MongoDB, Express, Angular, and Node.js. The final application includes both a customer-facing website and an administrative single-page application (SPA).

The customer-facing side uses Express and Handlebars to display travel information from the database. The administrator side uses Angular and allows an authorized user to add, edit, and delete trip information. The final version also includes login authentication using Passport and JSON Web Tokens (JWT).

---

# 🎯 Course Competencies

- **CS-30427:** Design the architecture of a web application.
- **CS-40428:** Build a web application using frameworks.
- **CS-40429:** Develop and integrate a database using frameworks.

---

# 🛠 Tech Stack & Tools

## Languages

- JavaScript
- TypeScript
- HTML5
- CSS3
- JSON

## Frameworks and Libraries

- Node.js
- Express.js
- Handlebars (HBS)
- Angular
- Bootstrap
- Passport
- JSON Web Token (JWT)
- Express-JWT

## Database

- MongoDB
- Mongoose

## Development and Testing Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- MongoDB Compass
- Angular CLI

## Concepts

- MVC Architecture
- RESTful APIs
- CRUD Operations
- Single Page Applications
- Authentication and Authorization
- JSON Data Exchange
- NoSQL Database Design
- Client/Server Development
- Separation of Concerns
- Reusable UI Components

---

# 📂 Project Development

## Module One — Environment Setup

The project began by setting up Node.js, npm, Express, Handlebars, Git, and GitHub. The original Travlr static website was added to the Express project and served through the Node.js server.

## Module Two — MVC Architecture

The Express application was reorganized using the MVC pattern. Routes, controllers, and views were separated so the application was easier to manage and maintain.

## Module Three — Dynamic Templates

The static travel page was converted into a Handlebars template. Trip information was stored in JSON and rendered dynamically instead of being hard-coded into the HTML.

## Module Four — MongoDB and Mongoose

MongoDB was added as the application database. Mongoose schemas and models were created for trip information, and sample trip data was seeded into the database.

## Module Five — REST API

Database access was separated into an `app_api` section. REST API endpoints were added to retrieve all trips and individual trips. The Express customer-facing website was then refactored to retrieve trip data through the API.

## Module Six — Angular SPA

An Angular administrative SPA was added to the application. The admin interface uses reusable components and a data service to communicate with the REST API.

CRUD functionality was added for trip information:

- GET trips
- POST new trips
- PUT trip updates
- DELETE trips

Bootstrap was used to style the administrator interface.

## Module Seven — Security

Authentication and authorization were added to protect administrative functionality.

The security implementation includes:

- User model with hashed passwords
- Passport LocalStrategy
- Login API
- Registration API
- JSON Web Tokens
- Protected POST, PUT, and DELETE endpoints
- Angular login form
- JWT storage in the browser
- Bearer token authentication for protected requests

Public GET endpoints remain available without authentication.

---

# 🏗 Architecture

## Frontend Development

The project uses two different frontend approaches.

The customer-facing website uses Express, Handlebars, HTML, CSS, and JavaScript. Express handles routing and controllers on the server, while Handlebars templates render the trip information returned by the application.

The administrative side uses Angular as a single-page application. Angular separates the application into components, models, services, and routes. For example, separate components are used for the trip listing, trip cards, adding trips, editing trips, and login.

The SPA provides more interaction than the Express customer-facing pages because the administrator can perform database operations through the browser without building a completely separate server-rendered page for each action.

JavaScript and TypeScript were used throughout the project, which helped keep the frontend and backend development similar while working with the MEAN stack.

## Why MongoDB Was Used

The backend uses MongoDB because it works well with the JSON-based data used throughout the application.

Each trip can be stored as a document containing fields such as:

- Trip code
- Name
- Length
- Start date
- Resort
- Price per person
- Image
- Description

MongoDB also works directly with Mongoose, which was used to create schemas and communicate between the Express application and the database.

Using a NoSQL database made it easy to retrieve MongoDB documents, return the information as JSON through the API, and use that data in both the Express website and Angular SPA.

---

# ⚙️ Functionality

## JSON and JavaScript

JavaScript is a programming language used to create application logic. It can contain functions, variables, objects, conditions, loops, and other programming features.

JSON is a data format used to represent and exchange information. Although JSON looks similar to JavaScript objects, JSON itself is mainly used for storing and transferring data.

JSON connects the frontend and backend of the Travlr application. MongoDB trip information is retrieved through Mongoose and returned by the REST API as JSON. Angular then receives the JSON and uses it to display trip information.

Angular also sends JSON data back to the API when an administrator adds or updates a trip.

## Refactoring

The application was refactored several times during development.

One of the first major changes was converting the original static HTML travel page into a Handlebars template. This allowed trip information to be generated dynamically instead of being repeated directly in the HTML.

Another refactoring occurred when database access was moved from the Express website into the separate REST API. This created better separation between the customer-facing website, API, and database.

The Angular application was also separated into reusable components. Instead of putting all of the trip display logic into one component, I created a trip card component that could be reused for each trip.

The use of reusable components reduces repeated code and makes changes easier. If the design of a trip card changes, the component can be updated once instead of changing the same layout in several different places.

Services were also used to separate API and authentication logic from the Angular components.

---

# 🧪 Testing

Testing was performed throughout the project using the browser, Postman, MongoDB Compass, and the application server logs.

The REST API uses several HTTP methods:

- **GET** retrieves information.
- **POST** creates information.
- **PUT** updates information.
- **DELETE** removes information.

Examples of the API endpoints include:

```text
GET    /api/trips
GET    /api/trips/:tripCode
POST   /api/trips
PUT    /api/trips/:tripCode
DELETE /api/trips/:tripCode
POST   /api/register
POST   /api/login

# 🌙 Contact

**Name:** Matthew Wood

**Email:** matthew.wood16@snhu.edu

**LinkedIn:** Matthew R. Wood
