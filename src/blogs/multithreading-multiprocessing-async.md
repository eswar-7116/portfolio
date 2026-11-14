Most of the modern high-performance applications often need to handle multiple tasks at the same time, whether it's serving thousands of users, processing data, or waiting for network responses. In this blog, we'll understand three common concurrency models, multithreading, multiprocessing, and async programming, and learn when to use each.

## Introduction

Imagine you're editing a video. While the video editor is rendering a clip, you can still move the timeline, play the preview, browse your files, or adjust effects. If the application could only perform one task at a time, the entire interface would freeze until rendering finished.

So, how do applications perform multiple tasks seemingly at the same time? There are several approaches to solving this problem, the most common being **multithreading**, **multiprocessing**, and **async programming**. Before we explore them, let's first understand the difference between **concurrency** and **parallelism**.

## Sequential vs Concurrency vs Parallelism

Before we dive into multithreading, multiprocessing, and async programming, let's understand three related terms that are often confused.

[![image.png](https://i.postimg.cc/j2Tk4LDf/image.png)](https://postimg.cc/cgDms1M1)

### 1. Sequential Execution

Sequential execution is very simple. In sequential execution, a program performs one task at a time. The next task doesn't start until the current one finishes.

This is the simplest execution model, but it can be inefficient if one task spends a lot of time waiting for a network response, file, or database.

### 2. Concurrency

**Concurrency** is the ability to make progress on multiple tasks during the same period of time. The system switches between tasks, especially when one of them is waiting, so no time is wasted.

Although it appears that the tasks are running together, only one task may be executing at any instant. Computers are **VERY FAST** that concurrency most of times looks like parallelism but it isn’t.

### 3. Parallelism

**Parallelism** means multiple tasks are actually executing at the same time. This is possible when a system has multiple CPU cores. Unlike concurrency, the tasks are truly running simultaneously.

In simple terms:

- **Sequential Execution** is about executing tasks one by one.
- **Concurrency** is about dealing with multiple tasks efficiently.
- **Parallelism** is about executing multiple tasks simultaneously.

Now that we understand the difference, let's look at the three most common approaches to achieving concurrency: **multithreading**, **multiprocessing**, and **async programming**.

## 1. Multithreading

A **thread** is the smallest unit of execution within a process. A process can contain multiple threads, allowing it to perform multiple tasks concurrently. Since all threads belong to the same process, they share the same memory and resources, making communication between them fast and efficient.

Because memory is shared, one thread can easily access data created by another thread. However, this also means that multiple threads can accidentally modify the same data at the same time, leading to problems such as **race conditions** and **deadlocks**. To avoid these issues, synchronization mechanisms like **mutexes** and **semaphores** are commonly used.

For example, a web browser uses separate threads to render web pages, process user input, and play audio. If one thread is busy loading a webpage, the others can continue handling their respective tasks, keeping the browser responsive.

**Visual Studio Code** uses multiple threads to keep the editor responsive while features like syntax highlighting, file indexing, and extensions run in the background.

## 2. Multiprocessing

A **process** is an independent program in execution. Unlike threads, each process has its own memory and resources, making it isolated from other processes. This isolation improves stability because one process cannot directly modify another process's data. So, there cannot be a common shared memory between processes like there is for threads.

Since processes don't share memory, they communicate using **Inter-Process Communication (IPC)** mechanisms such as pipes, sockets, shared memory, or message queues. While IPC is slower than communication between threads, it provides better isolation and fault tolerance.

Multiprocessing is especially useful for **CPU-intensive tasks** because different processes can run on separate CPU cores, allowing them to execute truly in parallel.

For example, when exporting a PowerPoint presentation as a video or PDF, the application can process different slides in separate processes. Since each process runs independently on a different CPU core, multiple slides can be rendered simultaneously, significantly reducing the export time.

**Adobe Media Encoder** exports multiple videos in parallel by utilizing multiple CPU cores through separate processes.

## 3. Asynchronous Programming

Unlike multithreading and multiprocessing, **async programming** doesn't create multiple threads or processes. Instead, it allows a program to pause a task whenever it has to wait for an operation to complete, such as a network request, file read, or database query. While that task is waiting, the program can continue executing other tasks.

This approach is ideal for **I/O-bound tasks**, where most of the time is spent waiting rather than performing computations. Since no additional threads or processes are required, async programming can handle a large number of concurrent tasks with very little overhead.

For example, imagine a chat application sending a message to a server. Instead of blocking the entire application while waiting for the server's response, the application can continue receiving new messages, updating the user interface, or processing other requests. Once the response arrives, the paused task resumes execution.

**Node.js** uses async programming to handle thousands of network requests concurrently without creating a separate thread for each request.

## Quick Comparison

### Multithreading

- Multiple threads inside the same process.
- Threads share the same memory.
- Good for applications that need shared data and responsiveness.
- Synchronization is required to avoid race conditions.

### Multiprocessing

- Multiple independent processes.
- Each process has its own memory.
- Better suited for CPU-intensive tasks.
- More memory overhead than threads.

### Async Programming

- Uses a single thread with an event loop.
- Tasks pause while waiting for I/O, allowing other tasks to run.
- Ideal for I/O-bound workloads like web servers and APIs.
- Doesn't provide parallel execution by itself.

## When Should You Use Each?

There's no single "best" approach. The right choice depends on the type of work your application performs.

### Use Multithreading when:

- Tasks need to share data or memory.
- Keeping an application responsive is important (e.g., desktop applications and games).
- Existing libraries or frameworks already use threads.

### Use Multiprocessing when:

- Your application performs CPU-intensive work.
- You want to utilize multiple CPU cores.
- Examples include video rendering, image processing, machine learning, and scientific simulations.

### Use Async Programming when:

- Your application spends most of its time waiting for I/O operations such as network requests, file operations, or database queries.
- You need to handle a large number of concurrent connections with low overhead.
- Common examples include web servers, APIs, chat applications, and proxies.

In practice, modern applications often combine these approaches. For example, a web server may use multiple processes to utilize all CPU cores, while each process uses async programming to handle thousands of client connections efficiently.

## Can They Be Used Together?

Absolutely! This isn't an **either-or** decision. Modern applications often combine multithreading, multiprocessing, and async programming because each solves a different problem.

For example, a web server might create multiple processes to utilize all CPU cores. Each process can then use async programming to handle thousands of network requests efficiently. Within those processes, a few threads might be used for background tasks such as logging or file operations.

The key takeaway is that these approaches complement each other rather than compete. Instead of asking, **"Which one should I use?"**, ask **"Which one solves this particular problem best?"**

## Conclusion

Well done readers! You now understand the three most common approaches to handling multiple tasks in modern applications: **multithreading**, **multiprocessing**, and **async programming**.

Remember, there isn't one fixed solution. The best approach depends on the problem you're trying to solve. CPU-intensive tasks often benefit from multiprocessing, I/O-bound workloads are a great fit for async programming, and multithreading is useful when tasks need to share memory or keep an application responsive.

As you build more projects, you'll naturally develop an intuition for choosing the right approach. The next time you're designing an application, don't ask, **"Which one is the best?"** Instead, ask, **"Which one fits this problem best?"**. That's what engineering is all about.