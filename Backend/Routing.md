### **Routing in Express.js**

Routing in **Express.js** refers to defining how an application responds to client requests at specific **URLs (endpoints)** and **HTTP methods (GET, POST, etc.)**.

---

### **Basic Concepts**

1. **Route**:
   A combination of a **path** (URL) and an **HTTP method** that defines how the server should respond.

2. **HTTP Methods**:
   - **GET**: Retrieve data.
   - **POST**: Submit data.
   - **PUT**: Update data.
   - **DELETE**: Remove data.

3. **Route Handler**:
   A callback function (or chain of middleware functions) executed when a route is matched.

---

### **Basic Routing Example**
```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Homepage!");
});

app.post("/submit", (req, res) => {
    res.send("Form submitted!");
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```
- `GET /`: Responds with "Welcome to the Homepage!".
- `POST /submit`: Responds with "Form submitted!".

---

### **Dynamic Routing**

Dynamic routing allows routes to handle dynamic values using route **parameters (`:param`)**. These parameters act as placeholders for variable parts of the path.

---

#### **Example of Dynamic Routing**

1. **Route Parameters (`:param`)**
   ```javascript
   app.get("/user/:id", (req, res) => {
       const userId = req.params.id; // Access route parameter
       res.send(`User ID: ${userId}`);
   });
   ```

   - **Request**: `GET /user/42`
   - **Response**: `User ID: 42`

2. **Multiple Parameters**
   ```javascript
   app.get("/user/:id/post/:postId", (req, res) => {
       const { id, postId } = req.params; // Destructure route parameters
       res.send(`User ID: ${id}, Post ID: ${postId}`);
   });
   ```

   - **Request**: `GET /user/10/post/5`
   - **Response**: `User ID: 10, Post ID: 5`

---

### **Advanced Routing Concepts**

1. **Query Parameters**
   - These are appended to the URL after a `?` and are used for optional data.
   ```javascript
   app.get("/search", (req, res) => {
       const { term, page } = req.query; // Access query parameters
       res.send(`Searching for ${term}, page ${page}`);
   });
   ```
   - **Request**: `/search?term=Express&page=2`
   - **Response**: `Searching for Express, page 2`

2. **Handling All Methods**
   - Use `app.all()` to handle any HTTP method for a route.
   ```javascript
   app.all("/all-methods", (req, res) => {
       res.send(`Handled ${req.method} request`);
   });
   ```

3. **Route Chaining**
   - Chain methods for the same route.
   ```javascript
   app.route("/profile")
       .get((req, res) => res.send("View Profile"))
       .post((req, res) => res.send("Create Profile"))
       .put((req, res) => res.send("Update Profile"));
   ```

4. **Router for Modular Routing**
   - Use `express.Router()` to modularize routes.
   - Serves as a tool for organizing and managing routes.
   ```javascript
   const express = require("express");
   const app = express();
   const router = express.Router();

   router.get("/info", (req, res) => res.send("User Info"));
   router.get("/settings", (req, res) => res.send("User Settings"));

   app.use("/user", router); // Mount router on "/user"
   ```

   - **Request**: `GET /user/info` → `User Info`

---

### **Summary of Routing**
1. **Static Routes**: Fixed paths for simple endpoints.
2. **Dynamic Routes**: Use `:param` to handle variable path segments.
3. **Query Parameters**: Use `req.query` for optional URL parameters.
4. **Modular Routing**: Use `express.Router()` for cleaner route organization.
5. **Middleware in Routes**: Add logic before handling specific routes. 

By combining these concepts, Express.js enables highly flexible and maintainable routing structures.
