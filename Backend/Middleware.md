### Middleware in Express.js

Middleware are functions in Express.js that process requests and responses during the request-response cycle. They have access to:
- **Request Object** (`req`)
- **Response Object** (`res`)
- **Next Function** (`next`): Passes control to the next middleware.

---

### **Example**
```javascript
const express = require('express');
const app = express();

// Log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Parse JSON body
app.use(express.json());

// Route handler
app.post('/data', (req, res) => {
    res.send(`Received: ${JSON.stringify(req.body)}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
});

// Start server
app.listen(2000, () => console.log('Server running on port 2000'));
```

### **Types of Middleware**

1. **Application-Level**  
   - Bound to the app instance using `app.use()` or `app.METHOD()`.  
   - Example: Logging, authentication, parsing request body.
     ```javascript
      const express = require('express');
      const app = express();
     
      app.use((req, res, next) => {
          console.log(`${req.method} ${req.url}`);
          next();
      });
     
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });

      app.listen(2000);

     ```

2. **Router-Level**  
   - Bound to `express.Router()` for specific routes or groups.  
   - Example:
     ```javascript
      const express = require('express');
      const app = express();
      const router = express.Router();

      router.use((req, res, next) => {
        console.log('Router-specific middleware');
        next();
      });

      router.get('/user', (req, res) => {
        res.send('User Route');
      });

      router.get('/admin', (req, res) => {
        res.send('Admin Route');
      });

      app.use('/api', router, (req, res) => {
       res.send('API Route');
      }); // Mount router under '/api' eg, /api/user
     
      app.listen(2000);
     ```
     

3. **Built-In**  
   - Predefined by Express:
     - `express.json()` - Parses JSON.
     - `express.urlencoded()` - Parses URL-encoded data.

4. **Third-Party**  
   - Community-built libraries:
     - `morgan` - HTTP request logging.
     - `cookie-parser` - Parse cookies.

5. **Error-Handling**  
   - Special middleware with four arguments `(err, req, res, next)`.  
   - Example:
     ```javascript
     app.use((err, req, res, next) => {
         res.status(500).send('Error occurred!');
     });
     ```
---

### **Middleware Flow**
- Middleware are executed in the order defined.
- Actions:
  1. Execute logic or modify `req`/`res`.
  2. End response cycle (`res.send()`).
  3. Pass control to the next middleware (`next()`).

Middleware allows **modular, reusable logic**, improving app structure.
---
