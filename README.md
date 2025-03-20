# 💰 Personal Finance Dashboard
A web application that helps users visualize and manage their personal finances efficiently. Built with **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## ✨ Features
- 🔐 **User Authentication** (Signup, Login, Logout) with JWT
- 📊 **Financial Dashboard** to track income and expenses
- 📝 **Edit & Manage Transactions**
- 📁 **Secure User Data Storage** with MongoDB
- ⚡ **Fast & Responsive UI** using React + Vite

---

## 🛠️ Tech Stack
### **Frontend**
- ⚛️ React (Vite)
- 🎨 CSS Modules
- 🔄 React Context API for Auth

### **Backend**
- 🌐 Node.js + Express.js
- 🗄️ MongoDB (Mongoose)
- 🔐 JWT Authentication

---

## 🚀 Getting Started
Clone the Repository**
```bash
git clone https://github.com/yourusername/personal-finance-dashboard.git
cd personal-finance-dashboard
```

Navigate to the server folder**
```
cd server
```
Install dependencies**
```
npm install
```
Create a .env file in the server/ directory**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the server**
```
npm run dev
```

The backend should now be running on http://localhost:5001.


Set Up the Client

Open a new terminal and go to the client folder**
```
cd client
```
Install dependencies**
```
npm install
```
Start the frontend**
```
npm run dev
```
The frontend should now be running on http://localhost:5173.

🔑 Authentication:
Users can signup, login, and logout securely.
JWT tokens are used for authentication.
ProtectedRoute ensures only logged-in users can access the dashboard.

🐛 Issues & Contributions:
If you find any bugs or have suggestions, feel free to open an issue or create a pull request.

📄 License:
This project is open-source and free to use.

🏆 Acknowledgments:
Built with ❤️ by Isael Ramirez
Inspired by the need for better financial tracking tools.


