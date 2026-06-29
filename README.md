#  Full-Stack Loan Management System

A comprehensive Full-Stack web application designed to help users calculate, compare, and manage loans effectively. It features a modern, interactive dashboard with data visualization, secure user authentication, and loan history tracking.

---

##  Key Features

*   ** Secure Authentication**: User registration and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
*   ** Interactive Dashboard**: Visualizes loan data, history, and statistics using **Chart.js** and **Recharts**.
*   ** Loan Calculation & Comparison**: Compare different loan options, interest rates, and calculate EMIs instantly.
*   ** History Tracking**: Saves user loan calculations to a MongoDB database for future reference.
*   ** Modern UI/UX**: Built with React, styled seamlessly using **Tailwind CSS**, and enhanced with smooth animations via **Framer Motion**.

---

##  Tech Stack

### **Frontend (Client)**
*   **Framework**: React 19 (via Vite)
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **Data Visualization**: Chart.js, react-chartjs-2, Recharts
*   **Animations**: Framer Motion
*   **HTTP Client**: Axios

### **Backend (Server)**
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (via Mongoose)
*   **Authentication**: JWT (jsonwebtoken), bcryptjs
*   **Middleware**: CORS, Express Validator

---

## Project Structure

```text
FullStackProject/
│
├── Backend/                 # Node.js & Express API
│   ├── config/              # Database configurations
│   ├── controllers/         # Route logic (Auth, Loans)
│   ├── middleware/          # JWT Verification, Validation
│   ├── models/              # Mongoose Schemas (User, Loan)
│   ├── routes/              # API Endpoints
│   ├── server.js            # Express Entry Point
│   └── .env                 # Backend Environment Variables
│
└── Frontend/loan-project/   # React & Vite Application
    ├── src/
    │   ├── assets/          # Static files
    │   ├── Components/      # Reusable UI components
    │   ├── pages/           # Views (Dashboard, Login, History, Compare, etc.)
    │   ├── api.js           # Axios instance & API calls
    │   ├── App.jsx          # Main Router Setup
    │   └── main.jsx         # React Entry Point
    └── vite.config.js       # Vite Configuration
```

---

##  Setup & Installation

### 1. Backend Setup
```bash
cd ../../Backend
npm install
```
**Environment Variables**: Create a `.env` file in the `Backend` directory and configure the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
**Start the Server**:
```bash
npm start
# The server will run on http://localhost:5000
```

### 2. Frontend Setup
```bash
# Assuming you are in Frontend/loan-project
npm install
```
**Start the Client**:
```bash
npm run dev
# The frontend will run on http://localhost:5173 (or as configured by Vite)
```

---

##  Usage
1. Register a new account or log in with an existing one.
2. Navigate to the **Dashboard** to view your loan summary.
3. Use the **Calculator** to estimate EMIs and interest.
4. Go to **Compare** to analyze different loan options side-by-side.
5. Check your **History** to view previously saved calculations.
