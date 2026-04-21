# 🍽️ Chefy – Food Recipe Sharing App

A full-stack **MERN** web application where users can **discover, create, and share recipes** with a smooth and modern UI.

---

## 🚀 Live Demo

🌐 Frontend: https://chefyy.vercel.app
⚙️ Backend: https://chefyy-backend.onrender.com

---

## 📌 Features

* 🔐 User Authentication (Login / Signup)
* 📝 Create, Edit, Delete Recipes
* 📸 Upload Recipe Images
* 🔍 Browse and Search Recipes
* ❤️ Like / Save Recipes
* 👤 User Profile System

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
chefy/
│
├── client/        # React Frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── server/        # Node + Express Backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/amanjain-31/chefy.git
cd chefy
```

---

### 2️⃣ Install Dependencies

#### Backend

```
cd server
npm install
```

#### Frontend

```
cd client
npm install
```

---

### 3️⃣ Setup Environment Variables

#### Backend (`server/.env`)

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

#### Frontend (`client/.env`)

```
VITE_SERVER_URI=https://chefyy-backend.onrender.com
```

---

### 4️⃣ Run the Project

#### Start Backend

```
cd server
npm start
```

#### Start Frontend

```
cd client
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint                            |
| ------ | ----------------------------------- |
| GET    | /api/v1/recipe/get-recipes          |
| GET    | /api/v1/recipe/get-recipe-by-id/:id |
| POST   | /api/v1/recipe/create-recipe        |
| POST   | /api/v1/auth/login                  |
| POST   | /api/v1/auth/register               |

---

## 📸 Screenshots


<img width="1920" height="1021" alt="image" src="https://github.com/user-attachments/assets/d9ea33fe-939b-433d-93f4-274eb27ec891" />

---

## 📌 Future Improvements

* 🔔 Notifications system
* ⭐ Ratings & reviews
* 🌐 Social sharing
* 📊 Analytics dashboard

---

## 👨‍💻 Author

**Aman Jain**
🔗 GitHub: https://github.com/amanjain-31

---
