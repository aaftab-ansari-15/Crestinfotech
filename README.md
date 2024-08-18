# Overview

In this branch, I've implemented the React app with a Backend using Node, MongoDB and Express.

## Languages
- HTML
- CSS
- JavaScript

## Frameworks & Libraries
- React
- Node.js
- Mongodb
- Express
- Mongoose
- Jsonwebtoken
- Bcryptjs
- Express-Validator
- Nodemon

### React
```bash
# 1. Create a New React App
npx create-react-app my-react-app

# 2. Navigate to Your React App Directory
cd my-react-app

# 3. Install Additional Libraries (e.g., React Router, Axios, etc.)
npm install react-router-dom axios
```
#### Creating Backend 
```bash
# 1. Initialize a New Node.js Project
mkdir my-backend-app
cd my-backend-app
npm init -y

# 2. Install Express
npm install express

# 3. Install Mongoose (for MongoDB)
npm install mongoose
# 4. Install JSON Web Token (JWT)
npm install jsonwebtoken

# 5. Install Bcrypt.js (for password hashing)
npm install bcryptjs

# 6. Install Express-Validator (for validation)
npm install express-validator

# 7. Install Nodemon (for development server auto-restart)
npm install nodemon --save-dev

# 8. Update package.json to Use Nodemon
Add a script to package.json for running the server with Nodemon:
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

# 9. Create the Main Server File
Create an index.js file (or app.js) to start building your backend:
touch index.js

# 10. Run the Development Server
npm run dev
```
