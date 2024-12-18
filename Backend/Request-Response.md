
### Here’s a list of the **most commonly used `req` (request) and `res` (response) properties** in Express.js, along with simple examples:

---

### **`req` (Request) Methods**

The `req` object represents the HTTP request and contains information sent by the client.

| Method               | Purpose                          | Example                                      |
|----------------------|----------------------------------|----------------------------------------------|
| **`req.params`**     | Access route parameters.        | `app.get('/user/:id', (req, res) => { res.send(req.params.id); });` |
| **`req.query`**      | Access query string parameters. | `/user?id=123` → `req.query.id` gives `123`. |
| **`req.body`**       | Access request body (JSON).     | **Middleware Required**: `app.use(express.json())`. <br> `app.post('/data', (req, res) => { res.send(req.body); });` |
| **`req.headers`**    | Access request headers.         | `console.log(req.headers['user-agent']);`    |
| **`req.method`**     | Access HTTP method.             | `if (req.method === 'POST') { res.send('Post request'); }` |
| **`req.url`**        | Access the requested URL.       | `console.log(req.url);`                      |
| **`req.path`**       | Get URL path (excluding query). | `/user?id=123` → `req.path` gives `/user`.   |

---

### **Examples of `req` Usage**

1. **Route Parameters (`req.params`)**
   ```javascript
   app.get('/user/:id', (req, res) => {
       res.send(`User ID: ${req.params.id}`);
   });
   ```
   Request: `/user/42` → Response: `User ID: 42`

2. **Query Parameters (`req.query`)**
   ```javascript
   app.get('/search', (req, res) => {
       res.send(`Search term: ${req.query.term}`);
   });
   ```
   Request: `/search?term=Express` → Response: `Search term: Express`

3. **Request Body (`req.body`)**
   ```javascript
   app.use(express.json()); // Middleware to parse JSON
   app.post('/data', (req, res) => {
       res.send(`Data received: ${JSON.stringify(req.body)}`);
   });
   ```
   Request Body: `{ "name": "Aniket" }` → Response: `Data received: {"name":"Aniket"}`

4. **Request Headers (`req.headers`)**
   ```javascript
   app.get('/', (req, res) => {
       res.send(`User-Agent: ${req.headers['user-agent']}`);
   });
   ```
   **Response**: Displays the User-Agent header (e.g., browser info).

5. **Request Method (`req.method`)**
   ```javascript
   app.all('*', (req, res) => {
       res.send(`HTTP Method: ${req.method}`);
   });
   ```
   **Request**: `POST /route` → **Response**: `HTTP Method: POST`

6. **Requested URL (`req.url`)**
   ```javascript
   app.get('*', (req, res) => {
       res.send(`Requested URL: ${req.url}`);
   });
   ```
   **Request**: `/example?param=1` → **Response**: `Requested URL: /example?param=1`

7. **Request Path (`req.path`)**
   ```javascript
   app.get('*', (req, res) => {
       res.send(`Path: ${req.path}`);
   });
   ```
   **Request**: `/example?param=1` → **Response**: `Path: /example`
---

### **`res` (Response) Methods**

The `res` object represents the HTTP response that will be sent to the client.

| Method                | Purpose                            | Example                                    |
|-----------------------|------------------------------------|--------------------------------------------|
| **`res.send()`**      | Sends a response to the client.   | `res.send("Hello, World!");`               |
| **`res.json()`**      | Sends a JSON response.            | `res.json({ message: "Success" });`        |
| **`res.status()`**    | Sets the HTTP status code.        | `res.status(404).send("Not Found");`       |
| **`res.redirect()`**  | Redirects to another URL.         | `res.redirect('/login');`                  |
| **`res.render()`**    | Renders a view (template engine). | `res.render('index', { title: "Home" });`  |

---

### **Examples of `res` Usage**

1. **Send a Plain Response (`res.send`)**
   ```javascript
   app.get('/', (req, res) => {
       res.send("Welcome to the homepage!");
   });
   ```

2. **Send a JSON Response (`res.json`)**
   ```javascript
   app.get('/data', (req, res) => {
       res.json({ name: "Aniket", role: "Developer" });
   });
   ```

3. **Set Status Code and Send Response (`res.status`)**
   ```javascript
   app.get('/error', (req, res) => {
       res.status(404).send("Page not found");
   });
   ```

4. **Redirect (`res.redirect`)**
   ```javascript
   app.get('/old-route', (req, res) => {
       res.redirect('/new-route');
   });
   ```

5. **Render a View (`res.render`)**  
   *(Requires a view engine like EJS, Pug, etc.)*
   ```javascript
   app.set('view engine', 'ejs');
   app.get('/', (req, res) => {
       res.render('index', { title: "Home" });
   });
   ```
---

### **Conclusion**
- Use `req` to access **data sent by the client** (e.g., query parameters, headers, body).
- Use `res` to **respond to the client** (e.g., send plain text, JSON, or status codes).
