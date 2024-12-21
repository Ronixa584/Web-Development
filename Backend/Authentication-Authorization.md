### **Authentication and Authorization**

#### **Definitions**
1. **Authentication**: The process of verifying a user's identity (e.g., username and password).
2. **Authorization**: The process of verifying whether an authenticated user has the necessary permissions to access a resource.

---

### **Types of Authentication**

1. **Session-Based Authentication**:
   - Relies on server-side sessions.
   - User logs in, and the server creates a session ID stored in a cookie.
   - Example Libraries: `express-session`.

2. **Token-Based Authentication**:
   - Relies on tokens (e.g., JWT).
   - Stateless; no sessions are stored on the server.

3. **OAuth**:
   - Used for third-party authentication (e.g., "Login with Google").
   - Example Libraries: `passport`, `passport-google-oauth20`.

4. **API Key Authentication**:
   - Users authenticate using an API key included in headers or query params.

5. **Basic Authentication**:
   - Username and password are sent with each request (Base64-encoded).

6. **Multi-Factor Authentication (MFA)**:
   - Adds additional layers of security, such as OTP or biometrics.

---

### **Types of Authorization**

1. **Role-Based Access Control (RBAC):**
   - Assigns roles (e.g., admin, user) to users and limits access based on roles.

2. **Permission-Based Access Control:**
   - Checks for specific permissions (e.g., canRead, canWrite).

3. **Attribute-Based Access Control (ABAC):**
   - Uses attributes (e.g., department, location) to determine access.

---

### **Understanding JWT (JSON Web Token)**

#### **What is JWT?**
- A stateless, compact and self-contained way to securely transmit information between a client and server as a JSON object.
- Structure: `header.payload.signature`
  - **Header**: Contains algorithm and token type.
  - **Payload**: Contains user data (e.g., `username`, `role`) and claims (e.g., `iat`, `exp`).
  - **Signature**: Ensures the token hasn't been tampered with, created using a secret key.

---
#### **Example of a JWT**:
```plaintext
HEADER.PAYLOAD.SIGNATURE
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0IiwibmFtZSI6IkFuaWtldCIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
---
#### **Why Use JWT?**
- Stateless authentication (no server-side session storage).
- Secure and scalable.


---

### **How It Works**

1. **Login**:
   - A user logs in with a username and password.
   - The server checks if the credentials are correct.
   - If correct, the server creates a **token** containing user info (like `username`, `role`, etc.) and sends it back to the user.

2. **Token Usage**:
   - The user sends this token with every request to access protected routes or data.
   - The token is added to the `Authorization` header:
     ```plaintext
     Authorization: Bearer <token>
     ```

3. **Server Verifies Token**:
   - The server checks if the token is valid (using a secret key to verify its signature).
   - If valid, the server allows the request to proceed.
   - If invalid or expired, the server rejects the request.

---

#### **Example: JWT in Express.js**

1. **Install Dependencies**:
   ```bash
   npm install jsonwebtoken express
   ```

2. **Generate a JWT**:
   ```javascript
   const jwt = require('jsonwebtoken');
   const secretKey = 'Secret-key';

   app.post('/login', (req, res) => {
       const { username, password } = req.body;
       if (username === 'user' && password === 'pass') {
           const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
           res.json({ token });
       } else {
           res.status(401).send('Invalid credentials');
       }
   });
   ```

3. **Verify a JWT**:
   ```javascript
   app.get('/protected', (req, res) => {
       const token = req.headers['authorization'];
       if (!token) return res.status(401).send('No token provided');

       jwt.verify(token, secretKey, (err, decoded) => {
           if (err) return res.status(403).send('Invalid token');
           res.send(`Hello ${decoded.username}`);
       });
   });
   ```

4. **Middleware for Token Verification**:
   ```javascript
   const verifyToken = (req, res, next) => {
       const token = req.headers['authorization'];
       if (!token) return res.status(401).send('No token provided');

       jwt.verify(token, secretKey, (err, decoded) => {
           if (err) return res.status(403).send('Invalid token');
           req.user = decoded;
           next();
       });
   };

   app.get('/protected', verifyToken, (req, res) => {
       res.send(`Welcome ${req.user.username}`);
   });
   ```

---

### **Best Practices**
1. Use HTTPS to secure token transmission.
2. Store tokens securely (e.g., HTTP-only cookies).
3. Set short expiration times for tokens.
4. Use refresh tokens for prolonged sessions.
5. Validate user roles and permissions on every request.

---

