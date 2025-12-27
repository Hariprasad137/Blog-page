# 📝 Blog Application

A responsive, full-stack blog application built with **Node.js**, **Express**, and **EJS**. This project allows users to compose new journal entries, view a feed of recent posts, and read full articles on dynamically generated pages.

## 🚀 Features

* **Create Posts:** A dedicated "Compose" interface to write and publish new articles.
* **Dynamic Templating:** Uses EJS (Embedded JavaScript) to render HTML pages dynamically based on user input.
* **Post Previews:** The home page automatically truncates long posts to 100 characters, offering a "Read More" link for the full content.
* **RESTful Architecture:** Implements standard GET and POST routes to handle data flow.
* **Responsive Design:** Clean and minimal UI that works on both desktop and mobile devices.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, EJS
* **Backend:** Node.js, Express.js
* **Middleware:** Body-Parser (to handle form data)
* **Version Control:** Git & GitHub

## ⚙️ Installation & Usage

Follow these steps to run the project locally on your machine.

**1. Clone the repository**
```bash
git clone [https://github.com/hariprasad137/Blog-page.git](https://github.com/hariprasad137/Blog-page.git)
```
**2. Navigate to the project directory**
```bash
cd Blog page
```
**3. Install dependencies**
```bash
npm install
```
**4. Start the server**
```bash
node index.js
```
**5. View the application Open your web browser and go to: http://localhost:3000 (or whatever port you set in your code)**
**Project Structure**
```bash
├── public/              # Static files (CSS, Images)
├── views/               # EJS Templates
│   ├── partials/        # Reusable Header and Footer components
│   ├── index.ejs        # Home page (Feed)
│   ├── compose.ejs      # Form to create posts
│   └── about.ejs        # About page
├── index.js             # Main server logic
└── package.json         # Project dependencies
```
👤 Author
Hariprasad V

GitHub: @hariprasad137

LinkedIn: silvercloud137
