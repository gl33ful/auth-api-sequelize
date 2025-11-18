# 🔐 Node.js Authentication & Role-Based Access Control API  
A production-ready authentication system built with **Node.js, Express, Sequelize ORM, MySQL, JWT, and bcrypt**.  
Features full authentication flow, role-based access control (RBAC), secure password hashing, and protected routes.

---

## 🚀 Features
- User Registration (with hashed passwords)
- Login with JWT Authentication
- Role-Based Authorization (admin, user)
- Protected Routes
- Sequelize ORM + MySQL Database
- Environment Variables Support
- Clean, Scalable Project Structure

---

## 🛠️ Tech Stack
| Technology | Purpose |
|-----------|---------|
| Node.js | Server runtime |
| Express | Routing & middleware |
| Sequelize ORM | Database modeling |
| MySQL | Relational data storage |
| JWT | Authentication tokens |
| bcrypt | Password hashing |
| dotenv | Secure config management |

---

## 📁 Project Structure
```
auth-api/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── migrations/
 ├── seeders/
 ├── app.js
 └── .env
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/auth-api.git
cd auth-api
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a **.env** file:

```
DB_USER=root
DB_PASS=
DB_NAME=auth_api
DB_HOST=127.0.0.1

JWT_SECRET=supersecretkey
JWT_EXPIRES=1d
```

### 4️⃣ Run Migrations
```bash
npx sequelize-cli db:migrate
```

### 5️⃣ Start the Server
```bash
npm start
```

Server runs on:  
👉 **http://localhost:3000**

---

## 🔌 API Endpoints

### **Auth Routes**
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get logged-in user |
| GET | `/api/auth/admin` | Admin-only access |

---

## 🧪 Testing (Postman / RESTFox Collection Included)

Import the collection JSON inside **/tests/collection.json**  
(to test register, login, protected routes).

---

## 🔐 Example Login Response
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

Use the token like this:
```
Authorization: Bearer <token>
```

---

## 👤 Roles
- **admin** → can access everything
- **user** → restricted access

---

## 🛡️ Security Implementations
- Password hashing with bcrypt  
- JWT token signing  
- Protected routes middleware  
- Role authorization middleware  

---

## 📸 Demo (Optional GIF)
You can add a GIF showing:
- Register on Postman
- Login
- Accessing `/profile`
- Admin route returning "Access Denied" for normal user

**See instructions below for how to record it.**

---

## 📄 License
MIT License © 2025 YourName

