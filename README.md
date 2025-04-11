# 📦 React Shopping Site

A fully functional and beautifully styled **e-commerce frontend project**, built using **React**, **React Router**, and the **Fake Store API**.

---

## 🛠 Tech Stack

- ⚛️ React.js (CRA)
- 🧭 React Router v6
- 🎣 React Hooks
- 🎨 Plain CSS (custom styling, no frameworks)
- 🔗 Fake Store API

---

## ✨ Features

### 🔐 Login Page
- Username & password form
- Authenticates using Fake Store API `/auth/login`
- Stores JWT in `localStorage`
- Redirects to product listing after successful login

### 🏠 Product Listing Page
- Fetches & displays all products using `/products`
- Filter by category using `/products/category/:category`
- Responsive grid layout (mobile-first)
- Beautiful custom product card UI with hover effects

### 🛍️ Product Detail Page
- Shows product image, title, description (as bullet points), and price
- Add to Cart button with animated "Item added" popup from top

### 🛒 Cart Page
- View items added to cart
- Update quantity or remove items
- View total price in INR
- Checkout clears the cart and shows confirmation popup

### 🧭 Navigation
- Header links: Home | Cart | Logout
- Cart icon shows total item count (badge)
- Logout clears JWT and redirects to login

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm start
 ```

### 🔗 API Reference

- Fake Store API Docs

###    👤 Author

💼 Designed & developed by: AYUSHI SINGH
