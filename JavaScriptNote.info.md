## What is JavaScript?

JavaScript was initially created to "make web pages alive"
The programs in this language are called scripts. They can be
written right in a web page's HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don't need special preparation or compilation to run.

JavaScript can execute in the browser, on the server, or any device that has a special program called 'the JavaScript engine'.

The broser has an embedded engine sometimes called "JavaScript virtual machine".

Different engines have different "codenames". for example:

- V8 - in Chrome, Opera and Edge.
- SpiderMonkey - Firefox.
- ChaKra -IE
  etc...

### How do engines work?

1.  The engine (embedded if it's a browser) reads ("parses") the script.

2.  Then it converts ("compiles") the script to machine code.
3.  And then the machine code runs, pretty fast

The engine applies optimizations at each step of the process. It even watches the compiled script at it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.

## What can in-browser JavaScript do?

Modern JavaScript is a "safe" programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.

JavaScript's capabilities greatly depend on the environment it's running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc ...

In-browser JavaScript can do everything related to webpage manipulation interaction with the user, and the webserver.

For instance, in-browser JavaScript is able to:

- Add new HTML to the page, change the existing content, modify styles.

- React to user actions, run on mouse clicks, pointer movements, key presses.

- Send request over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).

- Get and Set cookies, ask questions to the visitor, show messages.

- Remember the data on the client-side ("local storage")

### What CAN't in-browser JavaScript do?

JavaScript abilities in the browser are limited to protect the user's safety.

The aim is to prevent an evil webpage from accessing private infomation or harming the user's data.

Example of such restrictions include:

- JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.

- Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions , like "dropping" a file into a browser window or selecting it via an <input> tag.
  There are ways to interact with the camera/microphone and other devices, but under user's explicit permissions.

- Different tabs/windows generally do not know about each other. sometimes they do when one window use JavaScript to open the other one (if they come from the same domain, protocol, port ) This is called the "Same Origin Policy"
- JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other site/domain is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side

### What makes JavaScript unique?

There are at least three great things about JavaScript

- Full integration with HTML/CSS
- Simple things are done simply
- Supported by all major browsers and enabled by default.

## Code Editors

A code editor is the place where programmers spend most of their time

There are two main types of code editors:

- IDEs and
- lightweight editors.

### IDE

The term IDE (Integrated Development Environment) refers to a powerful editor with many features that usually operates on a "whole project". As the name suggests, it's not just an editor but a full-scale "development environment"

- An IDE loads the project (which can be many files)
- Allows navigation between files
- Provides autocompletion based on the whole project
- Integrates with a version management system like (git)
- Testing environment and
- Other "project-level" stuff

Examples of IDEs VScode, Visual Studio, Webstorm

### Lightweight Editors

Lightweight Editors are not as powerful as IDEs, but they're fast, elegant and simple. they are mainly used to open and edit a file instantly.

The main difference between a "lightweight editor" and an IDE is that, an IDE works on a project-level, so it loads much more data on the start, analyzes the project structure if needed and so on. A lightweight is much faster if we need only one file.

Example of lightweight editors include

- Sublime Text
- Notepad ++
- Vim and Emac
