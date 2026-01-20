# MERN Learning (Student CRUD Dashboard)

This repo is part of my **MERN / Backend learning journey**.

I built a **Student Management CRUD Dashboard** using **Node.js + Express + MongoDB Atlas + Mongoose**, and a simple frontend UI to test everything.

---

## 🚀 What I Learned (My Learning Path)

### 1) Express Basics
- Creating an Express server
- Understanding middleware (`express.json()`, `cors()`)
- Creating routes using `express.Router()`

### 2) MVC Folder Structure
- `routes/` → API endpoints
- `controllers/` → request/response logic
- `model/` → Mongoose schema & model
- `Database.js` → MongoDB connection using Mongoose
- `app.js` → main server file

### 3) MongoDB + Mongoose
- Connecting MongoDB Atlas with Mongoose
- Creating Schema and Model
- Performing CRUD operations using Mongoose methods:
  - `create()`
  - `find()`
  - `findByIdAndUpdate()`
  - `findByIdAndDelete()`

### 4) API Testing
- Testing APIs using Postman
- Understanding status codes (`200`, `201`, `404`, `500`)

### 5) Frontend Integration
- Built a table-based UI
- Connected frontend with backend APIs
- Practiced real-world flow: Form → API → Database → UI update

---

## ✨ Features
- ✅ Create Student
- ✅ Read All Students
- ✅ Update Student (by ID)
- ✅ Delete Student (by ID)
- ✅ Clean table UI + form
- ✅ MongoDB Atlas + Mongoose integration

---

## 🧠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML, CSS, JavaScript

---

## 📌 API Endpoints

Base URL:
```
http://localhost:3000
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/data` | Get all students |
| POST | `/api/data` | Create a new student |
| PUT | `/api/data/:id` | Update a student by ID |
| DELETE | `/api/data/:id` | Delete a student by ID |

---

## ⚙️ How to Run Locally

1) Install dependencies
```bash
npm install
```

2) Start the server
```bash
npm start
```

3) Open in browser
```
http://localhost:3000
```



