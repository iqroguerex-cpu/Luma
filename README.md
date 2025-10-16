# Luma - AI Therapist Chatbot 🌿

Luma is a calming, nature-themed web application designed to provide a safe and private space for users to express their thoughts and feelings. It leverages a powerful AI model through OpenRouter to offer empathetic and supportive conversation, all within a beautiful, modern interface featuring a frosted glass effect over a serene video background.

---

## 🚀 Live Demo

You can interact with a live version of Luma here:

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge)](https://luma-osc4.onrender.com)

---

## ✍️ Author

Created by **Chinmay Chatradamath**.

---

## ✨ Key Features

* **Soothing Video Background:** A full-screen video on both the landing and chat pages creates a calm and immersive environment.
* **Modern Frosted Glass UI:** The chat interface uses a semi-transparent, blurred effect for excellent readability and a polished aesthetic.
* **Real-time AI Conversation:** Powered by `meta-llama/llama-3.3-8b-instruct`, Luma provides intelligent and empathetic responses.
* **Completely Private Sessions:** Each chat tab is assigned a unique UUID, ensuring conversations are isolated and private from other sessions.
* **"AI is Typing" Animation:** A smooth, bouncing bubble animation provides feedback while the AI is generating a response.
* **Fully Responsive:** The design is optimized for a seamless experience on all devices, from mobile phones to desktops.

---

## 🛠️ Tech Stack

| Category     | Technology                                                                                                                              |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend** | ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **API** | ![OpenRouter](https://img.shields.io/badge/OpenRouter-8C52FF?style=for-the-badge)                                                        |

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You must have **Node.js** and **npm** installed on your machine.
* [Download Node.js](https://nodejs.org/) (npm is included)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/iqroguerex-cpu/luma.git](https://github.com/iqroguerex-cpu/luma.git)
    ```

2.  **Navigate into the project directory:**
    ```sh
    cd luma-chatbot
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Set up your Environment Variables:**
    * Create a new file named `.env` in the root of your project.
    * Use the template below:
        ```.env
        OPENROUTER_API_KEY="sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        SESSION_SECRET="your-long-random-secret-string-for-sessions"
        ```
    * Replace the placeholder values with your **OpenRouter API Key** and a **long, random string** for the session secret.

5.  **Add your background video:**
    * Place your video file inside the `public/videos/` directory.
    * Open `views/landing.ejs` and `views/chatbot.ejs` and update the `<source>` tag to point to your video file name.
        ```html
        <source src="/videos/your-video-name.mp4" type="video/mp4">
        ```

---


## ▶️ How to Run

Once the setup is complete, you can start the server with this command:

```sh
node server.js

