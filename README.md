# 📚 PaperTrail – Minimal Library Management System

A clean, responsive library management app built with **React**, **TypeScript**, and **Redux Toolkit Query**.  
Manage books effortlessly: add, edit, delete, borrow, and view borrow summaries — all without authentication.  
Focuses on simplicity, type safety, and smooth real-time UI updates.

---

## ✨ Features

✅ View all books in a clean, responsive table  
✅ Add, edit, and delete books  
✅ Borrow books with quantity and due date  
✅ Borrow summary page showing total quantity borrowed per book  
✅ Instant UI updates with RTK Query cache  
✅ Type-safe forms with React Hook Form & TypeScript  
✅ Toast notifications on actions  
✅ Fully responsive design built with Tailwind CSS and ShadCN UI

---

## ⚙️ Tech Stack

| Layer        | Technology                             |
| ------------ | ---------------------------------------|
| Frontend     | React, TypeScript, Tailwind CSS        |
| State        | Redux Toolkit + RTK Query              |
| Backend      | Node.js, Express.js, MongoDB, Mongoose |

---

## 📂 Project Structure (Frontend)

```plaintext
src/
├── assets/ 
├── components/          # Shared components (Loading, Navbar, etc.)
├── Layouts/ 
├── pages/               # Pages: AllBooks, CreateBook, EditBook, BorrowSummary, etc.
├── redux/API/          # RTK Query API slices
├── routs/ 
├── types/               # TypeScript interfaces and types
└── App.tsx
└── main.tsx
```

## 🛠 Setup & Run

1️⃣ **Clone this repo**
```bash
git clone https://github.com/yourusername/papertrail.git
cd papertrail
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Start development server**
```bash
npm run dev
```

4️⃣ **Make sure your backend server is running**
Example: http://localhost:5000/api


## 🌱 Backend Overview
Built with **Node.js**, **Express**, and **MongoDB**:
- CRUD for books
- Borrow books & maintain borrow summary
- Modular controller-service-repository structure
- Aggregation pipeline to get borrow summary

---

## 📌 Pages

- `/books` – View all books with Edit, Delete, Borrow
- `/create-book` – Add new book
- `/books/:id` – Book detail view
- `/edit-book/:id` – Edit book details
- `/borrow-summary` – View borrow summary

---

## 🧰 Key Highlights

- 📦 **RTK Query** for API integration & cache updates
- 🧪 **Type-safe** forms and API responses
- 🍞 **Toast notifications** on CRUD actions
- ⚡ **Optimistic UI updates** for better UX
- 📱 **Fully responsive design**
