## JavaScript in Node.js

### Differences from the Browser

- Node.js does not have a DOM, `window`, or `document`.
- Node.js provides access to operating system services unavailable in the browser.
- Browsers implement safety measures to protect the underlying system from rogue web applications.
- Browsers abstract operating system resources to control and contain code, limiting capabilities.
- Node.js offers virtually unrestricted access to operating system services.

---

## The Recipe for Node.js

### Core Components

1. **Bindings**  
    - Wrap and expose `libuv` and other low-level functionalities to JavaScript.

2. **V8 JavaScript Engine**  
    - Originally developed by Google for Chrome.
    - Known for its speed, revolutionary design, and efficient memory management.
    - A key factor in Node.js's performance and efficiency.

3. **Core JavaScript Library**  
    - Implements the high-level Node.js API.
