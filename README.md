# EduFusion AI: Smart Campus Optimization Platform

EduFusion AI is an intelligent smart-campus platform built with a modern Microservices architecture and Agentic AI. 
It aims to optimize university operations and enhance the student experience.

## Architecture

The project consists of three main tiers:

### 1. Spring Boot Microservices
12 independent Spring Boot microservices backed by PostgreSQL, handling core campus domains:
- **api-gateway (8080):** Spring Cloud Gateway for routing.
- **auth-service (8081):** Authentication and user management.
- **student-service (8082):** Core student data.
- **faculty-service (8083):** Faculty operations.
- **academic-service (8084):** Courses and curriculum.
- **classroom-service (8085):** Physical room management.
- **attendance-service (8086):** Attendance tracking.
- **resource-service (8087):** Library, gym, cafeteria resources.
- **transport-service (8088):** Campus transport tracking.
- **event-service (8089):** Campus events.
- **infrastructure-service (8090):** Maintenance requests.
- **notification-service (8091):** RabbitMQ-driven notification dispatcher.

### 2. Python AI Services
- **prediction-service (8000):** AI service for student performance prediction (Risk level analysis).
- **agent-service (8001):** Agentic AI NLP engine connecting users to microservices.

### 3. React Frontend
- **frontend (5173):** A sleek, glassmorphism-based React SPA tailored for modern campus administration. It features dashboards, interactive charts, and a direct AI Agent interface.

## Getting Started

### Prerequisites
- Java 21
- Node.js 20+
- Python 3.10+
- PostgreSQL 15+
- RabbitMQ
- Docker (Optional)

### Running Locally

1. **Start Infrastructure**: Start PostgreSQL and RabbitMQ, or use the provided \docker-compose.yml\ for the entire stack.
   \\\ash
   docker-compose up -d postgres rabbitmq
   \\\

2. **Start Backend Microservices**: 
   Navigate to \ackend/\ and run:
   \\\ash
   ./mvnw spring-boot:run -pl <service-name>
   \\\

3. **Start AI Services**:
   Navigate to \python-services/\, set up a venv, and run \main.py\.

4. **Start Frontend**:
   Navigate to \rontend/\ and run:
   \\\ash
   npm install
   npm run dev
   \\\

## Monitoring & Self-Healing
All Spring Boot microservices are instrumented with **Spring Boot Actuator**, exposing health checks at \/actuator/health\.

## Testing
A system integration script is available in \scripts/test_all.py\ to verify that AI services and microservices can communicate effectively.

