# JokesExpressAPI
🛠️ Project Setup (from Scratch)

Create a new folder, containing a file named server.jsLinks to an external site.
Inside the folder, run the command npm init to create a Node.jsLinks to an external site. project and generate a package. json file. Use all of the default options given
Run the command npm install express
Open the folder in VSCode and open the package. json file. Make the following changes:
Add "type": "module"
Change "main" to "server.jsLinks to an external site."
Add the "dev" script to the script object 
                        "dev": "node --watch server.jsLinks to an external site."
Add the necessary information to start your server, and make sure its listening on port 3000

 Data to use:

let jokes = [
  { id: 1, text: "Why do programmers prefer dark mode? Because the light attracts bugs." },
  { id: 2, text: "Why did the developer go broke? Because they used up all their cache." },
  { id: 3, text: "What is a programmer's favorite hangout place? The Foo Bar." },
  { id: 4, text: "Why do Java developers wear glasses? Because they don’t C#." },
  { id: 5, text: "I told my computer I needed a break, and it said 'No problem — I’ll go to sleep.'" },
  { id: 6, text: "A SQL query walks into a bar, walks up to two tables and says: 'Can I join you?'" },
  { id: 7, text: "There are only 10 kinds of people in this world: those who understand binary and those who don’t." },
  { id: 8, text: "Why was the JavaScript developer sad? Because they didn’t know how to 'null' their feelings." },
  { id: 9, text: "Why was the function feeling nervous? It didn’t get enough arguments." },
  { id: 10, text: "Knock knock. Who’s there? Recursion. Recursion who? Knock knock…" }
];


🧠 Goal:
Create a mini REST API for jokes from scratch where users can:

GET a random joke

GET all jokes

GET a specific joke by ID

All of this should be tested in Postman, not the browser.

 

🌟 STRETCH GOAL: Front-End Connection
Ready to go further? Create a React front-end that connects to your Joke API!

Your front-end should:

Fetch and display all jokes from http://localhost:3000/jokes

Show one random joke at a time




💡 Reminder: You must have both servers running:

Run your Express API (e.g. npm run dev)

Run your React app (npm run dev or npm start)

Use full http://localhost:3000 URLs in your React code