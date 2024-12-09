### HTTP Server
An **HTTP server** is software that listens for HTTP requests and sends HTTP responses. It handles communication using the **Hypertext Transfer Protocol (HTTP)**.

---

### HTTP Methods
1. **GET**: Retrieve data (e.g., fetch a webpage or API data).
2. **POST**: Send data to create or update a resource.
3. **PUT**: Update or create a resource.
4. **DELETE**: Remove a resource.
5. **PATCH**: Partially update a resource.
6. **HEAD**: Retrieve headers without the body.
7. **OPTIONS**: Describe communication options for the target resource.

---

### HTTP Status/Error Codes

| **Category**         | **Code** | **Description**                    |
|-----------------------|----------|------------------------------------|
| **Informational (1xx)** | 100      | Continue                           |
|                       | 101      | Switching Protocols                |
| **Success (2xx)**     | 200      | OK                                 |
|                       | 201      | Created                            |
|                       | 204      | No Content                         |
| **Redirection (3xx)** | 301      | Moved Permanently                  |
|                       | 302      | Found                              |
|                       | 304      | Not Modified                       |
| **Client Errors (4xx)**| 400      | Bad Request                        |
|                       | 401      | Unauthorized                       |
|                       | 403      | Forbidden                          |
|                       | 404      | Not Found                          |
|                       | 429      | Too Many Requests                  |
| **Server Errors (5xx)**| 500      | Internal Server Error              |
|                       | 502      | Bad Gateway                        |
|                       | 503      | Service Unavailable                |
|                       | 504      | Gateway Timeout                    |

---

### Create HTTP Server in ExpressJS

1. **Install Express**:
   ```bash
   npm install express
   ```

2. **Basic Server Code**:
   ```javascript
   const express = require('express');
   const app = express();

   // Middleware to parse JSON
   app.use(express.json());

   app.get('/', (req, res) => {
       res.send('Welcome to the HTTP server!');
   });

   app.post('/data', (req, res) => {
       res.send({ message: 'Data received', data: req.body });
   });

   app.use((req, res) => {
       res.status(404).send('Route not found');
   });

   const PORT = 3000;
   app.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}`);
   });
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```
