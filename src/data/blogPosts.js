export const blogPosts = [
  {
    "id": 17,
    "title": "Mastering Context in Go: The Backbone of Resilient Microservices",
    "excerpt": "A comprehensive guide on leveraging the built-in 'context' package to enforce service boundaries, manage timeouts, implement cancellation, and propagate request-scoped values across complex distributed systems.",
    "body": `
    <div class="prose prose-lg max-w-none">
      <h2 class="text-2xl font-bold mb-4">The Necessity of Context</h2>
      <p class="mb-4">
        In distributed systems, requests often span multiple services and goroutines. The built-in <code>context</code> package (<code>context.Context</code>) provides a powerful, standardized way to carry request-scoped data, deadlines, and cancellation signals across API boundaries, ensuring resources are freed promptly and preventing cascading failures.
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Deadlines and Timeouts</h3>
      <p class="mb-4">
        The primary use case is enforcing **Timeouts** for external calls (e.g., database queries, third-party APIs). Using <code>context.WithTimeout</code> or <code>context.WithDeadline</code> ensures that if an operation exceeds a set duration, the goroutine is cancelled, preventing resource leaks and improving the service's overall responsiveness.
      </p>

      <h4 class="text-lg font-semibold mt-4 mb-2">Example: Context with Timeout</h4>
      <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-go">
package main

import (
    "context"
    "time"
)

func fetchUserData(ctx context.Context, userID string) error {
    // Create a child context with a timeout for the DB operation
    dbCtx, cancel := context.WithTimeout(ctx, 2 * time.Second)
    defer cancel() // MUST be called to release resources

    select {
    case <-time.After(3 * time.Second):
        // This path is blocked by the dbCtx timeout
        return nil 
    case <-dbCtx.Done():
        // The context timed out or was cancelled
        return dbCtx.Err() // Returns context.DeadlineExceeded
    }
}
      </code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-2">Cancellation and Resource Cleanup</h3>
      <p class="mb-4">
        When a client disconnects or an operation fails early, **cancellation** signals propagate down the context chain. Any goroutine checking <code>context.Done()</code> can immediately terminate its work, stopping expensive computation or long-running I/O, which is critical for system stability under heavy load.
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Value Propagation for Tracing</h3>
      <p class="mb-4">
        The <code>context.WithValue</code> function is used to securely carry immutable, request-scoped data, most commonly correlation IDs (for logging) or tracing spans (for distributed tracing systems like OpenTelemetry). This allows logs from different goroutines to be linked back to a single incoming request.
      </p>

      <blockquote class="border-l-4 border-yellow-500 bg-yellow-100 p-3 my-4">
        **Best Practice Note:** Avoid passing mutable objects or required dependencies through context values. Context is primarily for transport metadata (deadlines, cancellation, tracing IDs), not dependency injection.
      </blockquote>

      <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion: Context in API Design</h3>
      <p class="mb-4">
        All public functions in Go libraries and backend services that perform I/O or long operations **must** accept a <code>context.Context</code> as their first argument. This practice is a defining characteristic of mature, production-ready Go code, enabling predictable, robust, and traceable microservices.
      </p>
    </div>
    `,
    "category": "backend",
    "date": "2025-12-21",
    "readTime": "12 min read",
    image: "/images/golang.svg",
    "author": "Mario Aprilnino Prasetyo",
    "tags": ["Go", "Context", "Microservices", "Concurrency", "Timeout", "Cancellation", "Tracing"]
  },
  {
    "id": 20,
    "title": "Architecting for Testability: Implementing Clean Architecture in Go Services",
    "excerpt": "Adopt Clean Architecture principles to decouple business logic from frameworks, ensuring maintainability, testability, and long-term project viability in complex Go applications.",
    "body": `
    <div class="prose prose-lg max-w-none">
      <h2 class="text-2xl font-bold mb-4">The Philosophy of Clean Architecture</h2>
      <p class="mb-4">
        Clean Architecture (or Hexagonal/Onion Architecture) mandates that business rules remain independent of frameworks, databases, and external I/O. In Go, this translates to strictly defined boundaries using interfaces and placing the core **Domain/Entities** at the center, isolated from all external concerns.
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Layers and Dependency Rule</h3>
      <p class="mb-4">
        The fundamental principle is the **Dependency Rule**: source code dependencies must only point inwards. The outer layers (e.g., Web API, Database Drivers) depend on the inner layers (e.g., Use Cases, Entities), but never the reverse.
      </p>

      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Layer</th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role in Go</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Entities / Domain</td>
            <td class="px-6 py-4 whitespace-nowrap">Core structs and business rules (pure Go, no external imports).</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Use Cases / Interactors</td>
            <td class="px-6 py-4 whitespace-nowrap">Application-specific logic, orchestrating data flow using interfaces.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Controllers / Gateways</td>
            <td class="px-6 py-4 whitespace-nowrap">Translators between frameworks (e.g., HTTP requests) and Use Cases.</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">External Interfaces (DB, Web)</td>
            <td class="px-6 py-4 whitespace-nowrap">Concrete implementations of interfaces defined in the inner layers.</td>
          </tr>
        </tbody>
      </table>

      <h3 class="text-xl font-semibold mt-6 mb-2">Dependency Inversion Principle (DIP) in Practice</h3>
      <p class="mb-4">
        Go's interfaces are key to achieving DIP. The Use Case layer defines the required repository interfaces, and the outer Persistence layer (e.g., GORM, SQL driver) implements them. This allows the Use Case to be tested in isolation using mock implementations.
      </p>

      <h4 class="text-lg font-semibold mt-4 mb-2">Use Case Interface Definition (Inner Layer)</h4>
      <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-go">
// Defined in pkg/domain/repository
type UserRepository interface {
    FindByID(id string) (*User, error)
    Save(user *User) error
}

// Defined in pkg/usecase
type UserCreator struct {
    Repo UserRepository // Depends on the interface
}
      </code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion: Long-Term Maintainability</h3>
      <p class="mb-4">
        While the initial setup for Clean Architecture is verbose, the long-term benefits—high test coverage, easy technology swapping (e.g., moving from MySQL to Postgres), and a clear separation of concerns—make it a hallmark of robust, scalable Go services managed by senior teams.
      </p>
    </div>
    `,
    "category": "backend",
    "date": "2025-12-21",
    "readTime": "12 min read",
    image: "/images/golang.svg",
    "author": "Mario Aprilnino Prasetyo",
    "tags": ["Go", "Architecture", "Clean Architecture", "Design Pattern", "DIP", "Testability"]
  },
  {
    id: 19,
    "title": "Tuning the Go Runtime: Deep Dive into Memory Management and GC Optimization",
    "excerpt": "A high-level exploration of the Go scheduler and garbage collector to minimize latency, reduce memory footprint, and ensure predictable performance in production systems.",
    "body": "    <div class=\"prose prose-lg max-w-none\">\n      <h2 class=\"text-2xl font-bold mb-4\">The Go Memory Model and Runtime</h2>\n      <p class=\"mb-4\">\n        Go's performance stability is highly dependent on its runtime, which manages scheduling (M:N model) and memory. Understanding the relationship between the **Go Scheduler (GPM)** and the memory allocator is crucial for building systems with minimal tail latency. Go utilizes a **Tricolor Mark-and-Sweep** collector, designed for low latency.\n      </p>\n\n      <h3 class=\"text-xl font-semibold mt-6 mb-2\">Minimizing GC Pauses: The Pacer and GOGC</h3>\n      <p class=\"mb-4\">\n        The Go GC operates concurrently, but brief **Stop-The-World (STW)** phases are still necessary for certain cleanup tasks, particularly stack scanning. The GC Pacer controls when the collection cycle starts, aiming to complete collection before the heap size doubles. Developers can influence this behavior using the **<code>GOGC</code>** environment variable.\n      </p>\n\n      <h4 class=\"text-lg font-semibold mt-4 mb-2\">Impact of GOGC Setting</h4>\n      <ul class=\"list-disc list-inside mb-4\">\n        <li>**Default (<code>GOGC=100</code>):** GC starts when the new heap size is 100% larger (2x) than the live heap size after the previous collection.</li>\n        <li>**Lower Value (e.g., <code>GOGC=50</code>):** More frequent, shorter GC cycles. Increases CPU usage but drastically reduces memory usage and latency variance.</li>\n        <li>**Higher Value (e.g., <code>GOGC=300</code>):** Less frequent, longer GC cycles. Reduces CPU overhead but increases memory consumption.</li>\n      </ul>\n\n      <h3 class=\"text-xl font-semibold mt-6 mb-2\">Avoiding Unnecessary Allocations</h3>\n      <p class=\"mb-4\">\n        The most effective way to optimize GC is to reduce the amount of memory allocated. Techniques include:\n      </p>\n      <ul class=\"list-disc list-inside mb-4\">\n        <li>**Object Reuse:** Utilizing <code>sync.Pool</code> for frequently used, temporary objects.</li>\n        <li>**Pre-allocating Slices:** Using <code>make([]T, 0, capacity)</code> to prevent costly internal array re-allocations during appends.</li>\n        <li>**String Concatenation:** Preferring <code>strings.Builder</code> over repeated use of the <code>+</code> operator.</li>\n      </ul>\n\n      <h4 class=\"text-lg font-semibold mt-4 mb-2\">Example: Using <code>strings.Builder</code></h4>\n      <pre class=\"bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950\"><code class=\"language-go\">\npackage main\n\nimport \"strings\"\n\nfunc optimizeString(parts []string) string {\n\tvar sb strings.Builder\n\t// Use the known capacity to pre-allocate memory\n\tsb.Grow(totalLength(parts))\n\tfor _, p := range parts {\n\t\tsb.WriteString(p)\n\t}\n\treturn sb.String()\n}\n\nfunc totalLength(parts []string) int { \n    // Helper to calculate required capacity\n    length := 0 \n    for _, p := range parts { length += len(p) } \n    return length \n}\n      </code></pre>\n\n      <h3 class=\"text-xl font-semibold mt-6 mb-2\">Conclusion: Performance Profiling is Key</h3>\n      <p class=\"mb-4\">\n        Optimization in Go is data-driven. Using built-in tools like **PProf** to analyze heap profiles and allocation traces is essential. A senior developer always profiles first, then optimizes, focusing on reducing allocation churn rather than blindly tweaking the GC settings.\n      </p>\n    </div>\n    ",
    "category": "backend",
    "date": "2025-12-21",
    "readTime": "10 min read",
    image: "/images/golang.svg",
    "author": "Mario Aprilnino Prasetyo",
    "tags": ["Go", "Golang", "Optimization", "GC", "PProf", "Performance", "Memory"]
  },
  {
    id: 18,
    title: "Maximizing Concurrency: Building High-Throughput Microservices with Go Goroutines",
    excerpt: "Dive deep into Go's concurrency model to design and implement highly efficient, low-latency microservices capable of handling massive parallel loads.",
    body: `
    <div class="prose prose-lg max-w-none">
      <h2 class="text-2xl font-bold mb-4">Understanding Go's Concurrency Primitives</h2>
      <p class="mb-4">
        Go's most compelling feature is its lightweight, software-defined threads known as **goroutines**. Unlike traditional OS threads, goroutines require minimal memory (starting at a few KB) and are managed entirely by the Go runtime, not the operating system kernel. This is foundational for building systems that handle thousands of concurrent operations efficiently.
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">The Power of Goroutines and Channels (CSP)</h3>
      <p class="mb-4">
        Go champions the Communicating Sequential Processes (CSP) model, captured by the mantra: **"Do not communicate by sharing memory; instead, share memory by communicating."** This is achieved using **channels**, which are type-safe conduits for sending and receiving values between goroutines, preventing race conditions inherent in shared memory.
      </p>

      <h3 class="text-xl font-semibold mt-6 mb-2">Advanced Concurrency Pattern: Worker Pools</h3>
      <p class="mb-4">
        For microservices that process large queues of tasks (e.g., image processing, database batch updates), the **Worker Pool** pattern is essential. It limits the number of active goroutines, preventing resource exhaustion while maximizing CPU utilization. The structure involves a channel for tasks and a channel for results.
      </p>
      

      <h4 class="text-lg font-semibold mt-4 mb-2">Worker Pool Implementation Sketch</h4>
      <pre class="bg-gray-100 text-sm p-4 rounded-md overflow-x-auto mb-4 text-zinc-950"><code class="language-go">
// The worker function reads from the tasks channel and writes to the results channel
func worker(id int, tasks <-chan string, results chan<- string) {
    for j := range tasks {
        fmt.Printf("Worker %d started job %s\n", id, j)
        time.Sleep(time.Second) // Simulate a heavy task
        fmt.Printf("Worker %d finished job %s\n", id, j)
        results <- "Job " + j + " done"
    }
}

// Main function setup
func main() {
    const numJobs = 9
    tasks := make(chan string, numJobs)
    results := make(chan string, numJobs)

    // Start 3 workers, which are blocked until they receive a task
    for w := 1; w <= 3; w++ {
        go worker(w, tasks, results)
    }

    // Send 9 jobs
    for j := 1; j <= numJobs; j++ {
        tasks <- fmt.Sprintf("job%d", j)
    }
    close(tasks)

    // Collect all results
    for a := 1; a <= numJobs; a++ {
        <-results
    }
}
      </code></pre>

      <h3 class="text-xl font-semibold mt-6 mb-2">Conclusion: Scalability via Design</h3>
      <p class="mb-4">
        Leveraging Go's goroutines and channels is key to building backend microservices that are not just fast, but inherently scalable and resilient against high concurrent traffic. Mastering patterns like Worker Pools moves a developer from basic API creation to high-performance system design.
      </p>
    </div>
    `,
    "category": "backend",
    "date": "2025-12-21",
    "readTime": "8 min read",
    image: "/images/golang.svg",
    "author": "Mario Aprilnino Prasetyo",
    "tags": ["Go", "Golang", "Concurrency", "Microservices", "Worker Pool", "Channel"]
  },
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