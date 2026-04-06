# finance-backend
# Finance Backend Project

#About this project

This project is a backend application built for managing financial data with proper access control.

The idea behind this project is to simulate a system where different users (like admin, analyst, viewer) can interact with financial records based on their roles. It also provides some basic summary data which can be used in a dashboard.

I focused more on keeping the logic simple, clean, and understandable rather than making it overly complex.

---

 #Technologies used

* Node.js
* Express.js
* MongoDB (using Mongoose)
* JWT (for authentication)
* bcrypt (for password hashing)

---

#What this backend can do

### 👤 User management

* Users can register and login
* Each user has a role:

  * Admin
  * Analyst
  * Viewer
* Access is controlled based on role

---

#Financial records

* Admin can:

  * Create records
  * Update records
  * Delete records
* All logged-in users can:

  * View records

Each record contains:

* amount
* type (income or expense)
* category
* date
* note

---

#Dashboard summary

There is an endpoint that gives:

* total income
* total expenses
* balance (income - expense)

This is useful for showing data on a dashboard.

---

#Authentication

* JWT token is used after login
* Passwords are hashed using bcrypt
* Protected routes require token in headers

---

#Folder structure

```id="kq0r9r"
finance-backend/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│
├── server.js
├── .env
├── package.json
```

---

#How to run this project

### 1. Clone the repository

```id="zlgwls"
git clone https://github.com/your-username/finance-backend.git
cd finance-backend
```

---

### 2. Install dependencies

```id="4u5v61"
npm install
```

---

### 3. Setup environment variables

Create a `.env` file and add:

```id="v1p2tq"
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_secret_key
PORT=5000
```

---

### 4. Run the server

```id="q6f4wd"
npx nodemon server.js
```

or

```id="av7v4t"
npm run dev
```

---

#API routes

### User routes

* POST `/users/register`
* POST `/users/login`

---

### Record routes

* POST `/records` (admin only)
* GET `/records`
* PUT `/records/:id` (admin only)
* DELETE `/records/:id` (admin only)

---

### Dashboard

* GET `/dashboard/summary`

---

#How to use token

After login, you will get a token.

Use it like this in headers:

```id="x9q9rt"
Authorization: your_token_here
```

---

#Assumptions I made

* Only admin can modify data
* Analyst and viewer can only view data
* Basic validation is handled, not too strict
* Focus was more on backend logic than UI

---

#Things that can be improved

If I had more time, I would add:

* Filtering records (by date, category)
* Pagination
* Better validation
* Swagger documentation
* Deployment

---

#Submission

* GitHub Repo: https://github.com/your-username/finance-backend
* API Testing: (Postman collection or deployed link)

---

#Author

Ashwani Srivastava

---
