Here’s a curated list of commonly used **ES6+ features, tricks, and tips** that can make your JavaScript code cleaner, more efficient, and modern. These are great for writing concise and expressive code.

---

### **1. Object Property Shorthand**
- If the variable name matches the object property name, you can use shorthand notation.

```javascript
const name = "John";
const age = 25;

// Instead of:
const person = { name: name, age: age };

// Use:
const person = { name, age };

console.log(person); // { name: 'John', age: 25 }
```

---

### **2. Destructuring**
- Extract values from objects or arrays and assign them to variables in one step.

#### **Object Destructuring**
```javascript
const person = { name: "John", age: 25, job: "Developer" };

// Instead of:
const name = person.name;
const age = person.age;

// Use:
const { name, age } = person;

console.log(name, age); // John 25
```

#### **Array Destructuring**
```javascript
const colors = ["red", "green", "blue"];

// Instead of:
const first = colors[0];
const second = colors[1];

// Use:
const [first, second] = colors;

console.log(first, second); // red green
```

---

### **3. Default Parameters**
- Set default values for function parameters.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("John")); // Hello, John!
```

---

### **4. Template Literals**
- Use backticks (`` ` ``) for string interpolation and multi-line strings.

```javascript
const name = "John";
const age = 25;

// Instead of:
const message = "Hello, my name is " + name + " and I am " + age + " years old.";

// Use:
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // Hello, my name is John and I am 25 years old.
```

---

### **5. Arrow Functions**
- Write concise functions using the `=>` syntax.

```javascript
// Instead of:
function add(a, b) {
  return a + b;
}

// Use:
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

---

### **6. Spread Operator (`...`)**
- Easily copy, merge, or expand arrays and objects.

#### **Array**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copied = [...arr1];
console.log(copied); // [1, 2, 3]
```

#### **Object**
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

// Merge objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }

// Copy object
const copied = { ...obj1 };
console.log(copied); // { a: 1, b: 2 }
```

---

### **7. Rest Operator (`...`)**
- Gather the remaining items in arrays or objects into a single variable.

#### **Array**
```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]
```

#### **Object**
```javascript
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(others); // { b: 2, c: 3 }
```

---

### **8. Nullish Coalescing Operator (`??`)**
- Return the right-hand side value if the left-hand side is `null` or `undefined`.

```javascript
const name = null;
const defaultName = name ?? "Guest";
console.log(defaultName); // Guest
```

---

### **9. Optional Chaining (`?.`)**
- Avoid errors when accessing deeply nested properties.

```javascript
const person = { name: "John", address: { city: "New York" } };

// Instead of:
console.log(person && person.address && person.address.city);

// Use:
console.log(person?.address?.city); // New York
console.log(person?.contact?.phone); // undefined (doesn't throw error)
```

---

### **10. Dynamic Object Keys**
- Use expressions as object keys.

```javascript
const key = "name";
const value = "John";

const obj = {
  [key]: value,
};

console.log(obj); // { name: 'John' }
```

---

### **11. for...of Loop**
- Iterate over iterable objects (like arrays, strings, etc.).

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color); // red, green, blue
}
```

---

### **12. Promises with `async/await`**
- Handle asynchronous operations more cleanly.

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchData();
```

---

### **13. Array Methods**
- Frequently used methods for arrays.

#### **Map**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

#### **Filter**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

#### **Reduce**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

#### **Find**
```javascript
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2
```

---

### **14. Default Exports and Imports**
- Simplify importing/exporting functions and variables.

#### Export:
```javascript
export default function greet() {
  console.log("Hello!");
}
```

#### Import:
```javascript
import greet from "./greet";
greet(); // Hello!
```

---

### **15. Chaining Array Methods**
- Combine multiple methods for concise logic.

```javascript
const numbers = [1, 2, 3, 4];
const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

console.log(result); // [4, 8]
```

---

Mastering these modern JavaScript features will make your code cleaner, more readable, and easier to maintain!
