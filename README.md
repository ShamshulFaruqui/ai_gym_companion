# 🏋️♂️ IronAI - Your Intelligent Gym Companion

## 🌟 Features
- **AI-Powered Workout Advice** via OpenRouter's LLMs
- **Form Correction** with visual cues (coming soon)
- **Personalized Routines** based on fitness level
- **Nutrition Tracking** with macro calculations
- **Dark/Light Mode** UI toggle

## 🚀 Quick Start

### Prerequisites
bash
Node.js v18+ | Python 3.10+ | OpenRouter API Key
Installation
bash
git clone https://github.com/ShamshulFaruqui/IronAI.git
cd IronAI

## Setup
- npm install 
- npm run dev
- Site link should be at: http://localhost:3000

🛠️ Tech Stack
Area	Technologies
Frontend	TypeScript, Vite, TailwindCSS
Backend	Node.js, Express, OpenRouter API
AI	LangChain.js, Llama 3 70B
Styling	Animate.css, FontAwesome

📂 Project Structure
AI_gym_companion/
├── client/
│   ├── public/
|   |   ├── index.html
|   └── package.json        
├── server/
│   ├── src/
│   │   ├── index.ts/    
│   |── package.json
|   └── tsconfig.json
|── package.json
└── tsconfig.json

⚙️ OpenRouter Setup
Get API key at OpenRouter.ai

Supported models:

meta-llama/llama-3-70b-instruct (default)

anthropic/claude-3-opus

google/gemini-pro

Example API call:

javascript
const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "HTTP-Referer": "https://github.com/ShamshulFaruqui/IronAI",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "meta-llama/llama-3-70b-instruct",
    messages: [{ role: "user", content: "How do I perfect my deadlift form?" }]
  })
});

🤝 Contributing
Fork the repository

Create feature branch (git checkout -b feature/your-feature)

Commit changes (git commit -m 'Add awesome feature')

Push to branch (git push origin feature/your-feature)

Open a Pull Request
