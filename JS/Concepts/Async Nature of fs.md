##  **Async Nature of fs module**

#### 1. **File Reading using fs module and its Async Nature**
- Use `fs.readFile` to read files asynchronously.
- Asynchronous operations in Node.js do not block the main thread, allowing synchronous tasks to execute first.
- Example:

  ```javascript
  const fs = require('fs');
  fs.readFile('example.txt', 'utf8', (err, data) => {
      console.log("File contents: ", data);
  });

  // Synchronous expensive operation
  console.log("Starting expensive operation...");
  let sum = 0;
  for (let i = 0; i < 100; i++) {
      sum += i;
  }
  console.log("Expensive operation completed.");
  ```

- **Observation**: File content is printed *after* the expensive operation due to Node.js's event loop.

#### 2. **Using `async/await` for Sequential Execution (Synchronous)**
- Use `async/await` to ensure asynchronous tasks complete before proceeding.
- The `fs.promises` API enables working with Promises.
- Example:

  ```javascript
  const fs = require('fs').promises;

  async function main() {
      try {
          const data = await fs.readFile('example.txt', 'utf8');
          console.log("File contents: ", data);
      } catch (err) {
          console.error("Error reading the file:", err);
          return;
      }

      console.log("Starting expensive operation...");
      let sum = 0;
      for (let i = 0; i < 100; i++) {
          sum += i;
      }
      console.log("Expensive operation completed.");
  }

  main();
  ```

#### Note:
- **`await` works only with Promises that's why we used fs.promise**.
- Use `fs.promises.readFile` for a built-in Promise-based approach.
- If using callback-based `fs.readFile`, wrap it in a custom Promise for compatibility with `async/await`.

#### 3. **Key Points**:
- **Asynchronous Nature**:
  - Node.js uses an event-driven model.
  - Asynchronous tasks do not block the thread; synchronous code executes immediately.
  
- **When to Use `async/await`**:
  - To ensure sequential execution of tasks.
  - To improve code readability and maintainability.

## **Common Asynchronous Use Cases**:
1. **Timers**: `setTimeout`, `setInterval`.
2. **I/O Operations**: File reading (`fs`), database queries.
3. **Network Requests**: `fetch`, `XMLHttpRequest`, APIs.
4. **Event Listeners**: `addEventListener`, DOM events.

Asynchronous programming ensures smooth user experience by preventing blocking operations while handling long-running tasks.
