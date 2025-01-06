# Browser JavaScript
  Browser JavaScript extends the core JavaScript language by providing access to **Web APIs** that enable interaction with the browser environment. These features are tailored for web development, including working with HTML, CSS, and user interaction.

---

### **Features of Browser JavaScript**
1. **DOM Manipulation**  
   - Interact with and modify the structure and content of a webpage.
   - Example: Add, remove, or change HTML elements dynamically.

2. **Event Handling**  
   - Respond to user interactions like clicks, keypresses, or mouse movements.
   - Example: Listening for a button click to perform an action.

3. **AJAX and Fetch**  
   - Make asynchronous network requests to fetch or send data without reloading the page.
   - Example: Use `fetch` to get data from an API.

4. **Browser Storage**  
   - Store data locally on the client-side.
   - Example: Use `localStorage` or `sessionStorage` for persistent data.

5. **Styling and Animation**  
   - Dynamically modify CSS styles and create animations.
   - Example: Change an element's color on hover or add CSS classes.

6. **Browser-Specific APIs**  
   - Access features like geolocation, notifications, camera, clipboard, and device sensors.
   - Example: Use the Geolocation API to get the user’s location.

7. **Cross-Origin Resource Sharing (CORS)**  
   - Handle secure communication between different origins.

8. **Forms and Validation**  
   - Work with forms, validate inputs, and provide dynamic feedback.
   - Example: Validate a form field using JavaScript before submission.

---
<!--
### **Commonly Used Methods in Browser JavaScript**
Here are frequently used methods categorized by functionality:

#### **1. DOM Manipulation**
- **`document.querySelector(selector)`**  
  Selects the first matching HTML element.  
  ```javascript
  const element = document.querySelector("#myId");
  ```

- **`document.getElementById(id)`**  
  Selects an element by its ID.  
  ```javascript
  const element = document.getElementById("myId");
  ```

- **`element.innerHTML` / `element.textContent`**  
  Gets or sets the HTML or text content of an element.  
  ```javascript
  element.innerHTML = "<strong>Hello!</strong>";
  ```

- **`element.setAttribute(name, value)` / `element.getAttribute(name)`**  
  Sets or gets an attribute value.  
  ```javascript
  element.setAttribute("class", "highlight");
  ```

- **`element.appendChild(child)`**  
  Appends a new child node to an element.  
  ```javascript
  const newElement = document.createElement("div");
  parentElement.appendChild(newElement);
  ```

---

#### **2. Event Handling**
- **`element.addEventListener(event, handler)`**  
  Attaches an event listener to an element.  
  ```javascript
  button.addEventListener("click", () => alert("Button clicked!"));
  ```

- **`element.removeEventListener(event, handler)`**  
  Removes an event listener.  

---

#### **3. AJAX and Fetch**
- **`fetch(url, options)`**  
  Sends a network request and returns a Promise.  
  ```javascript
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));
  ```

---

#### **4. Browser Storage**
- **`localStorage.setItem(key, value)` / `localStorage.getItem(key)`**  
  Stores and retrieves data in the browser's local storage.  
  ```javascript
  localStorage.setItem("theme", "dark");
  console.log(localStorage.getItem("theme")); // "dark"
  ```

- **`sessionStorage`**  
  Similar to `localStorage` but clears when the browser session ends.

---

#### **5. Styling and Animation**
- **`element.style.property`**  
  Directly modify inline styles.  
  ```javascript
  element.style.backgroundColor = "blue";
  ```

- **`element.classList.add(className)` / `element.classList.remove(className)`**  
  Add or remove CSS classes.  
  ```javascript
  element.classList.add("active");
  ```

---

#### **6. Forms and Validation**
- **`formElement.submit()`**  
  Submits a form programmatically.  

- **`inputElement.value`**  
  Gets or sets the value of a form input field.  
  ```javascript
  console.log(inputElement.value);
  ```

---

#### **7. Other Browser APIs**
- **`navigator.geolocation.getCurrentPosition()`**  
  Get the user’s current location.  
  ```javascript
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
  ```

- **`console.log()`**  
  For debugging.  

- **`window.alert()`**  
  Displays an alert box.  
  ```javascript
  alert("Hello, world!");
  ```

- **`setTimeout()` / `setInterval()`**  
  Delays or repeats a function.  
  ```javascript
  setTimeout(() => console.log("Hello after 2 seconds"), 2000);
  ```
-->

### **Commonly Used Methods in Browser JavaScript**

#### **1. DOM Manipulation**
- `document.querySelector()`  
- `document.querySelectorAll()`  
- `document.getElementById()`  
- `document.getElementsByClassName()`  
- `element.innerHTML` / `element.textContent`  
- `element.setAttribute()` / `element.getAttribute()`  
- `element.appendChild()`  
- `element.removeChild()`  
- `document.createElement()`  
- `element.classList.add()` / `element.classList.remove()`  
- `element.style.property`

#### **2. Event Handling**
- `element.addEventListener()`  
- `element.removeEventListener()`  
- `event.preventDefault()`  
- `event.stopPropagation()`  

#### **3. AJAX and Fetch**
- `fetch()`  
- `XMLHttpRequest`  

#### **4. Browser Storage**
- `localStorage.setItem()`  
- `localStorage.getItem()`  
- `localStorage.removeItem()`  
- `sessionStorage.setItem()`  
- `sessionStorage.getItem()`  
- `sessionStorage.removeItem()`  

#### **5. Styling and Animation**
- `element.style.property`  
- `element.classList.add()` / `element.classList.remove()`  
- `element.animate()`  

#### **6. Forms and Validation**
- `formElement.submit()`  
- `inputElement.value`  
- `formElement.checkValidity()`  

#### **7. Browser-Specific APIs**
- `navigator.geolocation.getCurrentPosition()`  
- `navigator.clipboard.writeText()`  
- `Notification.requestPermission()`  
- `window.alert()`  
- `window.confirm()`  
- `window.prompt()`  

#### **8. Timer Functions**
- `setTimeout()`  
- `setInterval()`  
- `clearTimeout()`  
- `clearInterval()`  
