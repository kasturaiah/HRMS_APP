# 🏢 HRMS — Human Resource Management System

A full-stack web application for managing employees and teams within an organization. This system supports organization registration, secure authentication, CRUD operations for employees and teams, many-to-many team assignments, and complete audit logging of all backend actions.

---

## ✅ Features

### 🔐 Authentication & Security
- Register an organization and admin user
- Login/logout using **JWT tokens**
- Password hashing using **bcryptjs**
- Protected API routes
- Role: Organization-level access isolation

### 👨‍💼 Employee Management
- Create, Read, Update, Delete employees
- View employee details
- Assign employees to multiple teams
- Remove employee-team assignments

### 👥 Team Management
- Create, Read, Update, Delete teams
- View assigned employees per team

### 🔗 Team Assignments
- Many-to-many relationship (Employees ↔ Teams)
- Assign and remove employees from teams

### 🧾 Audit Logging
- Logs stored in both database and log file
- Logged events include:
  - Login / Logout
  - Employee CRUD
  - Team CRUD
  - Assignment changes

### 💻 Responsive Frontend
- Built with React.js
- Axios for API calls
- React Router for navigation
- Pure CSS for responsive design

### 🗄 Database
- **SQLite** for easy setup
- Auto-created via Sequelize ORM

---

## 🛠 Technologies Used

### Backend
- Node.js (Express.js)
- Sequelize ORM
- SQLite
- bcryptjs
- jsonwebtoken
- winston (logging)
- cors
- dotenv

### Frontend
- React.js
- Axios
- React Router
- CSS

### Tools (Optional)
- Postman (API Testing)
- DB Browser for SQLite
- VS Code

---

## 📦 Prerequisites

- Node.js (v16+)
- npm (bundled with Node.js)
- Git (optional)

SQLite is included by default—no installation required.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the project
```bash
git clone <repo-url>
cd <project-folder>

⚙️ Backend Setup
cd backend
npm install

Create .env in the backend folder:
JWT_SECRET=<your-secure-random-string>
PORT=5000


✅ The SQLite database (database.sqlite) will be auto-created on first run.

Start Backend:
npm start


Expected:

Server running on port 5000
Database synced successfully

🎨 Frontend Setup
cd frontend
npm install
npm start


Frontend runs at:

http://localhost:3000


Backend API runs at:

http://localhost:5000

🗄 Database Schema

Auto-generated tables:

Table	Description
Organizations	Organization details
Users	Admin accounts
Employees	Employee records
Teams	Team records
EmployeeTeams	Many-to-many join table
Logs	Audit logs
Relationships

Organization → Users / Employees / Teams (1:N)

Employees ↔ Teams (N:M via EmployeeTeams)

🌐 Application Workflow

Register organization + admin user

Login to get JWT token

Manage employees and teams

Assign employees to teams

View audit logs

Logout securely
