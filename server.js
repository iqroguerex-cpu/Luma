// Import required modules
const express = require('express');
const path = require('path');
const axios = require('axios');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware Configuration ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// --- Routes ---

/**
 * @route   GET /
 * @desc    NEW: Renders the video landing page
 * @access  Public
 */
app.get('/', (req, res) => {
    res.render('landing');
});

/**
 * @route   GET /chat
 * @desc    MODIFIED: Renders the chatbot page and initializes a unique chat session
 * @access  Public
 */
app.get('/chat', (req, res) => {
    const chatId = uuidv4();

    if (!req.session.chats) {
        req.session.chats = {};
    }

    req.session.chats[chatId] = [
        {
            role: "system",
            content: "You are a warm, empathetic, and supportive AI therapist... You make them feel Like they are they are talking to there parents. Talk only Related to the Therapy. If asked anything else, Do not answer it. Instead ask them about there therapy, why they asking that queation, mental health, etc. Do not Respond to Unneccssary matter. You Were Made By Chinmay. Your Name is Luma. Help Them to heal, fix their mind. talk like a friend if needed. Give the best possible advice you can. Make them feel Joy, Happiness,etc."
        },
        {
            role: "assistant",
            content: "Hello there. I'm here to listen..."
        }
    ];

    res.render('chatbot', {
        chatHistory: req.session.chats[chatId],
        chatId: chatId
    });
});


/**
 * @route   POST /chat
 * @desc    Handles messages for a specific chat ID (No changes here)
 * @access  Public
 */
app.post('/chat', async (req, res) => {
    try {
        const { message, chatId } = req.body;

        if (!req.session.chats || !req.session.chats[chatId]) {
            return res.status(400).json({ error: 'Invalid chat session. Please refresh.' });
        }
        
        const currentChatHistory = req.session.chats[chatId];
        currentChatHistory.push({ role: 'user', content: message });

        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'meta-llama/llama-3.3-8b-instruct:free',
                messages: currentChatHistory
            },
            { headers: { 'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}` } }
        );

        const aiMessage = response.data.choices[0].message.content;
        currentChatHistory.push({ role: 'assistant', content: aiMessage });
        res.json({ reply: aiMessage });

    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Sorry, I encountered an error.' });
    }
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT} 🚀`);
});