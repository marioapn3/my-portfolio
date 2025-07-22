export const blogPosts = [
    {
      id: 1,
      title: "Master React 19: Build Cutting-Edge Web Apps",
      excerpt: "Dive into React 19's latest features and learn to craft dynamic, AI-enhanced components for modern web applications...",
      body: `
      <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">Introduction to React 19</h2>
  <p class="mb-4">
    React 19 introduces several powerful new features that enhance the developer experience and enable the creation of more intelligent and responsive user interfaces. In this article, you'll explore these features and how to apply them in modern web applications.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">What's New in React 19?</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Built-in support for AI-enhanced components</li>
    <li>Improved Server Components integration</li>
    <li>Enhanced performance with automatic memoization</li>
    <li>New hooks for better state and side-effect management</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Creating Dynamic UI with AI</h3>
  <p class="mb-4">
    One of the standout features in React 19 is the native support for AI-assisted rendering. Using libraries like LangChain or integrating with OpenAI APIs, developers can now build components that dynamically respond to user input in more human-like ways.
  </p>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-js">
import { useAI } from 'react-ai-tools';

function SmartSearch() {
  const { response, query, setQuery } = useAI();

  return (
    &lt;div className="p-4"&gt;
      &lt;input
        className="border p-2 w-full rounded"
        value={query}
        onChange={(e) =&gt; setQuery(e.target.value)}
        placeholder="Ask anything..."
      /&gt;
      &lt;p className="mt-2 text-gray-700"&gt;{response}&lt;/p&gt;
    &lt;/div&gt;
  );
}
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Best Practices</h3>
  <p class="mb-4">
    To make the most of React 19, it's important to:
  </p>
  <ol class="list-decimal list-inside mb-4">
    <li>Keep components small and reusable</li>
    <li>Leverage the new AI APIs wisely to enhance, not overwhelm, UX</li>
    <li>Use Tailwind CSS or similar utility frameworks for rapid UI development</li>
    <li>Utilize TypeScript for better code maintainability</li>
  </ol>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    React 19 opens up exciting possibilities for frontend developers. With AI integration, improved performance, and enhanced tooling, it's the perfect time to upgrade and start building next-generation web applications.
  </p>
</div>

      `,
      category: "react",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/react.svg",
      author: "Mario Aprilnino",
      tags: ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
      id: 2,
      title: "Revolutionize Styling with Tailwind CSS 4.0",
      excerpt: "Unlock the full potential of Tailwind CSS 4.0 to create stunning, responsive designs with unmatched speed and flexibility...",
      body: `
       <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">What is Tailwind CSS?</h2>
  <p class="mb-4">
    Tailwind CSS is a utility-first CSS framework that empowers developers to craft custom user interfaces directly within their markup. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that give you full control over your design without writing custom CSS.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">What's New in Tailwind CSS 4.0?</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Lightning-fast JIT (Just-In-Time) engine improvements</li>
    <li>New design tokens and responsive design utilities</li>
    <li>Built-in dark mode toggling</li>
    <li>Improved support for CSS Grid and animations</li>
    <li>Expanded plugin ecosystem and first-party integrations</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Why Use Tailwind CSS 4.0?</h3>
  <p class="mb-4">
    Tailwind 4.0 takes rapid UI development to the next level. With its JIT compiler, you can write styles as you build components—no more jumping between files. It's optimized for performance, scalability, and customization.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Example: Building a Card Component</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-html">
&lt;div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden"&gt;
  &lt;img class="w-full h-48 object-cover" src="/images/example.jpg" alt="Sample" /&gt;
  &lt;div class="p-4"&gt;
    &lt;h3 class="text-xl font-bold text-gray-900"&gt;Tailwind 4.0 Card&lt;/h3&gt;
    &lt;p class="text-gray-600 mt-2"&gt;This card was built using only utility classes from Tailwind CSS 4.0.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Best Practices</h3>
  <ol class="list-decimal list-inside mb-4">
    <li>Use semantic HTML paired with utilities for accessibility</li>
    <li>Leverage variants like <code>:hover</code>, <code>:focus</code>, and <code>dark:</code></li>
    <li>Combine with component frameworks like React or Vue</li>
    <li>Take advantage of Tailwind plugins for forms, typography, and animations</li>
  </ol>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    Tailwind CSS 4.0 offers unmatched flexibility and speed for frontend development. Whether you're building a design system or rapidly prototyping, Tailwind empowers you to create stunning, responsive interfaces with ease.
  </p>
</div>

      `,
      category: "css",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/images/tailwindcss.svg",
      author: "Mario Aprilnino",
      tags: ["CSS", "Tailwind", "Frontend", "Design"]
    },
    {
      id: 3,
      title: "Craft High-Performance APIs with Node.js and Express",
      excerpt: "Build scalable, AI-ready RESTful APIs using Node.js and Express to power next-gen applications...",
      body: `
       <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">Introduction to Node.js APIs</h2>
  <p class="mb-4">
    Node.js has revolutionized backend development by enabling JavaScript to run on the server side. With Express.js, developers can quickly build RESTful APIs that are both fast and scalable.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Why Choose Node.js + Express?</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Non-blocking, event-driven architecture for high performance</li>
    <li>Lightweight and flexible middleware system</li>
    <li>Massive ecosystem via NPM</li>
    <li>Easy integration with databases and AI services</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Basic API Example</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-js">
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">AI-Ready API Integration</h3>
  <p class="mb-4">
    With Node.js, integrating AI models (e.g. OpenAI, Hugging Face) is seamless. Use libraries like Axios to make requests and serve intelligent responses.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    Node.js and Express remain top choices for building high-performance, scalable, and AI-capable APIs that power the next generation of applications.
  </p>
</div>

      `,
      category: "backend",
      date: "2024-01-05",
      readTime: "12 min read",
      image: "/images/nodejs.svg",
      author: "Mario Aprilnino",
      tags: ["Node.js", "Express", "API", "Backend", "JavaScript"]
    },
    {
      id: 4,
      title: "Vue.js 3 vs React 19: The Ultimate Framework Showdown",
      excerpt: "Explore Vue.js 3 and React 19 head-to-head to choose the perfect framework for your next-gen web project...",
      body: `
            <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">Vue.js vs React: A Comprehensive Comparison</h2>
  <p class="mb-4">
    Choosing between Vue.js and React is a pivotal decision in frontend development. Both are modern, powerful, and widely used frameworks—but they differ in philosophy, syntax, and community.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Key Differences</h3>
  <table class="table-auto w-full mb-4 text-left border border-gray-300">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-4 py-2 text-zinc-950">Feature</th>
        <th class="px-4 py-2 text-zinc-950">Vue.js 3</th>
        <th class="px-4 py-2 text-zinc-950">React 19</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 ">Language</td>
        <td class="px-4 py-2 ">JavaScript / TypeScript</td>
        <td class="px-4 py-2 ">JavaScript / TypeScript</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-4 py-2 text-zinc-950">Approach</td>
        <td class="px-4 py-2 text-zinc-950 ">Template-based</td>
        <td class="px-4 py-2 text-zinc-950">JSX-based</td>
      </tr>
      <tr>
        <td class="px-4 py-2 ">State Management</td>
        <td class="px-4 py-2 ">Vuex / Pinia</td>
        <td class="px-4 py-2 ">Redux / Context API</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-xl font-semibold mt-6 mb-2">Which One Should You Use?</h3>
  <p class="mb-4">
    Choose Vue.js if you prefer simplicity and clean separation of concerns. Choose React if you're building complex apps with dynamic UIs and prefer the flexibility of JSX and hooks.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    There is no definitive winner. The right choice depends on your project needs, team experience, and long-term maintainability goals.
  </p>
</div>

      `,
      category: "frontend",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "/images/vue.svg",
      author: "Mario Aprilnino",
      tags: ["Vue.js", "React", "Frontend", "JavaScript", "Comparison"]
    },
    {
      id: 5,
      title: "Supercharge Your Backend with Express.js APIs",
      excerpt: "Learn to build lightning-fast, scalable RESTful APIs with Express.js to drive modern web and mobile apps...",
      body: `
       <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">Introduction to Express.js</h2>
  <p class="mb-4">
    Express.js is a minimalist and flexible web application framework that sits atop Node.js. It's perfect for building RESTful APIs with concise, readable code.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Why Developers Love Express</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Minimal setup and boilerplate</li>
    <li>Middleware system for extensibility</li>
    <li>Large ecosystem of plugins and tools</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Basic Setup</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-js">
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Welcome to the Express API!');
});

app.listen(5000, () => console.log('Server running on port 5000'));
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    Express.js offers a fast and elegant way to create backends for web and mobile apps. Whether you're a beginner or building microservices, it provides the flexibility you need.
  </p>
</div>

      `,
      category: "backend",
      date: "2024-01-18",
      readTime: "4 min read",
      image: "/images/expressjs.svg",
      author: "Mario Aprilnino",
      tags: ["Express", "Node.js", "Backend", "API"]
    },
    {
      id: 6,
      title: "FastAPI: Build Blazing-Fast Python APIs for 2025",
      excerpt: "Discover FastAPI's power to create high-performance, AI-integrated Python APIs with automatic documentation...",
      body: `
       <div class="prose prose-lg max-w-none ">
  <h2 class="text-2xl font-bold mb-4">What is FastAPI?</h2>
  <p class="mb-4">
    FastAPI is a modern Python web framework built for creating APIs with speed and efficiency. Powered by Pydantic and Starlette, it supports asynchronous programming and automatic documentation.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Key Features</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Automatic Swagger and ReDoc documentation</li>
    <li>Type hinting and validation using Pydantic</li>
    <li>Asynchronous and synchronous support</li>
    <li>High performance—comparable to Node.js and Go</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Example Endpoint</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-python">
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to FastAPI"}
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    FastAPI is an ideal choice for developers building modern Python-based APIs that demand performance, type safety, and automatic docs.
  </p>
</div>

      `,
      category: "backend",
      date: "2024-02-01",
      readTime: "6 min read",
      image: "/images/fastapi.svg",
      author: "Mario Aprilnino",
      tags: ["FastAPI", "Python", "Backend", "API"]
    },
    {
      id: 7,
      title: "Go for Speed: Building Scalable APIs with Golang",
      excerpt: "Harness Go's simplicity and speed to create high-performance APIs for cloud-native applications...",
      body: `
       <div class="prose prose-lg max-w-none">
  <h2 class="text-2xl font-bold mb-4">Introduction to Go</h2>
  <p class="mb-4">
    Go (or Golang) is a statically typed, compiled language designed by Google for high concurrency and performance. It’s ideal for building scalable APIs and cloud-native services.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Benefits of Using Go for APIs</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Blazing fast performance</li>
    <li>Built-in concurrency with goroutines</li>
    <li>Minimal memory usage</li>
    <li>Strong standard library and error handling</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Simple API Example</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-go">
package main

import (
  "fmt"
  "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, "Hello from Go!")
}

func main() {
  http.HandleFunc("/", helloHandler)
  http.ListenAndServe(":8080", nil)
}
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    Go empowers developers to build fast and scalable APIs with ease. Its performance and simplicity make it a great choice for modern backend development.
  </p>
</div>

      `,
      category: "backend",
      date: "2024-02-10",
      readTime: "5 min read",
      image: "/images/golang.svg",
      author: "Mario Aprilnino",
      tags: ["Go", "Golang", "Backend", "API", "Web Server"]
    },
    {
      id: 8,
      title: "NestJS: Architect Scalable Backends with TypeScript",
      excerpt: "Leverage NestJS and TypeScript to build modular, enterprise-grade APIs for modern cloud ecosystems...",
      body: `
        <div class="prose prose-lg max-w-none">
  <h2 class="text-2xl font-bold mb-4">What is NestJS?</h2>
  <p class="mb-4">
    NestJS is a progressive Node.js framework that leverages TypeScript and a modular architecture, inspired by Angular, to build scalable and maintainable backend applications.
  </p>

  <h3 class="text-xl font-semibold mt-6 mb-2">Why Use NestJS?</h3>
  <ul class="list-disc list-inside mb-4">
    <li>Structured and testable architecture</li>
    <li>Full TypeScript support</li>
    <li>Built-in support for WebSockets, GraphQL, and Microservices</li>
    <li>Powerful CLI for code scaffolding</li>
  </ul>

  <h3 class="text-xl font-semibold mt-6 mb-2">Basic Controller Example</h3>
  <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-ts">
import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello from NestJS!';
  }
}
  </code></pre>

  <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion</h3>
  <p class="mb-4">
    NestJS combines the power of TypeScript and the flexibility of Node.js to provide a robust framework for building enterprise-grade applications.
  </p>
</div>

      `,
      category: "backend",
      date: "2024-03-01",
      readTime: "6 min read",
      image: "/images/nestjs.svg",
      author: "Mario Aprilnino",
      tags: ["NestJS", "Node.js", "TypeScript", "Backend"]
    }
  ];
  
  export const getBlogPostById = (id) => {
    return blogPosts.find(post => post.id === parseInt(id));
  };
  
  export const getBlogPostsByCategory = (category) => {
    if (category === 'all') return blogPosts;
    return blogPosts.filter(post => post.category === category);
  };