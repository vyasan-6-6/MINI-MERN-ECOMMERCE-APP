## 🛒 Mini MERN Commerce App

A production-ready mini e-commerce platform built with the MERN stack that allows users to browse products, search efficiently with debouncing, and add products with image uploads. The application focuses on performance, clean UI, and scalability.

---

## ✨ Features

- Product listing with search, filter, and sorting  
- **Debounced search** for optimized performance  
- Add new products  
- Image upload and storage using **Cloudinary**  
- Skeleton loading for smooth user experience  
- Error Boundaries for graceful error handling  
- Fully responsive design (desktop & mobile)

---

## 🧰 Tech Stack

### Frontend
- React  
- React Router  
- Context API  
- Tailwind CSS  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  

---

## 🌐 Deployment

- Frontend: **Vercel**  
- Backend: **Render**

---

## ☁️ Image Management

- Product images are uploaded to **Cloudinary**  
- Cloudinary is configured using environment variables for secure uploads  
- Image URLs are stored in MongoDB  
- Images are dynamically rendered on the frontend

---

## 📂 Project Structure

mini-commerce/
├── screenshots/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── contextApi/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ ├── .env
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── package-lock.json
│ ├── vite.config.js
│ └── README.md
├── server/
│ ├── public/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── config/
│ ├── uploads/
│ ├── .env
│ ├── .gitignore
│ ├── package.json
│ ├── package-lock.json
│ └── README.md
└── README.md


---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**
```bash
git clone https://github.com/vyasan-6-6/MINI-MERN-ECOMMERCE-APP.git
cd mini-commerce


2. Install dependencies

Frontend: 
cd client
npm install
 
Backend:
cd /server
npm install

3.Set up environment variables

Create a .env file in both client and server directories with the necessary keys (MongoDB URI, Cloudinary keys, etc.)

4.Run the project

Frontend:
cd /client
npm run dev

Backend:
cd /server
npm run dev


---

## 📸 Screenshots

### Desktop View
![Desktop Home](./screenshots/desktop-home.png)

### Mobile View
![Mobile Home](./screenshots/mobile-home.png)
 

---

## 🌐 Live Demo

- Frontend: https://mini-mern-ecommerce-app.vercel.app  
- Backend API: https://mini-mern-ecommerce-app.onrender.com  

---

## 🔮 Future Improvements

- Authentication & Authorization  
- Cart and Checkout Flow  
- Payment Gateway Integration  
- Admin Dashboard  
- Order Management System  

---

## 🤝 Contributing

Contributors are welcome!  
Feel free to fork the repository and submit a pull request.

---

## ⭐ Additional Highlights

- Clean and scalable folder structure  
- Performance-focused features (debouncing, skeleton loading)  
- Production-ready deployment setup  

---
## 👨‍💻 Author

**VYASAN K S**  
Full-Stack Developer  

- LinkedIn: [VYASAN K S](https://www.linkedin.com/in/vyasan-6-6)
