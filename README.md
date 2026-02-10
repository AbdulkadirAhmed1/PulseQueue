# PulseQueue

PulseQueue is an asynchronous backend service built with Node.js, Redis, and background workers to demonstrate queue-based processing, fault tolerance, and production-style backend architecture.

This project is intentionally designed to showcase backend systems thinking beyond traditional CRUD-based applications.

---

## Project Purpose

PulseQueue exists to strengthen backend engineering signals for co-op and internship roles by demonstrating:

- Asynchronous processing
- Queue-based architectures
- Background worker systems
- Fault tolerance and retry logic
- Production-style observability
- Clean separation of backend responsibilities

The backend *is* the product.

---

## High-Level Concept

Traditional backends often process requests synchronously:

Client → API → Database → Response 

PulseQueue introduces an asynchronous processing layer:


The API responds immediately while work is processed in the background by workers.

---

## System Architecture

### Core Layers

1. **API Layer (Express)**
   - Handles incoming HTTP requests
   - Validates input
   - Pushes jobs into Redis
   - Responds immediately with an event ID

2. **Queue Layer (Redis)**
   - Buffers jobs
   - Decouples request handling from processing
   - Enables retries and fault isolation

3. **Worker Layer**
   - Runs as a separate process
   - Consumes jobs asynchronously
   - Handles retries and failures
   - Updates final job status

4. **Persistence Layer**
   - Stores job state and results
   - Acts as the source of truth

---

## File Info

- API        → handles HTTP requests
- Queue      → handles Redis enqueue/dequeue
- Workers    → handles background processing
- Services   → shared business logic
- Models     → database schemas
- DB         → database connection
- Utils      → helpers
- App        → application logic 
- Server     → process startup 

---

## Tech Stack

| Layer | Technology |
|-----|------------|
| Runtime | Node.js |
| Web Framework | Express.js |
| Queue | Redis |
| Database | PostgreSQL or MongoDB |
| Containerization | Docker |
| Testing | Jest |
| Deployment | Render / Railway / AWS EC2 |

No frontend is included by design.

---

## Worker System Behavior

- Runs as a separate Node.js process
- Consumes jobs from Redis
- Simulates asynchronous workloads
- Implements retry logic with max retry limits
- Gracefully handles failures and crashes

---

## Reliability & Fault Tolerance

PulseQueue demonstrates:

- Non-blocking request handling
- Job retries on transient failures
- Clear failure states
- Safe job reprocessing
- Graceful degradation when workers or Redis fail

--- 

## Out of Scope (By Design)

- No frontend UI
- No authentication
- No dashboards
- No microservices
- No premature scaling

Discipline > Features.

---
