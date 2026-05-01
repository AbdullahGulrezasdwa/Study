# 📚 GL Revision — Year 7 Study Tool

> A **high-performance, interactive study platform** for GL exam prep. Featuring 7 game modes, multiplayer competition, and AI-powered explanations.

![GitHub License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/built%20with-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)
![Live](https://img.shields.io/badge/status-live-brightgreen)

**Live Demo:** [https://AbdullahGulrezasdwa.github.io/Study](https://AbdullahGulrezasdwa.github.io/Study)

---

## ✨ Features

### 📖 7 Study Modes
- **🃏 Flashcards** — Spaced repetition with difficulty ratings (Again/Hard/Good/Easy)
- **🎯 Multiple Choice** — 4-option questions with instant feedback
- **✍️ Fill in the Blank** — True recall testing, type your answer
- **🔗 Match the Term** — Click to pair terms with definitions
- **⚡ Speed Round** — 10 seconds per question, race against the clock
- **💀 Elimination** — Survive with 3 lives, wrong answers cost a life
- **🌐 Multiplayer** — Real-time vs friend mode using PeerJS

### 🤖 AI Tutor (Powered by Gemini)
- Generate 5 custom questions on any topic
- AI-written reading passages with comprehension questions
- "Explain It" feature for instant concept explanations

### 📊 Comprehensive Content
- **English:** Reading comprehension, inference, figurative language, grammar, punctuation, literature analysis
- **Maths:** Numbers, algebra, statistics, geometry, sequences
- **Difficulty:** Year 4–9 coverage (auto-scaled per mode)
- **Total:** 500+ questions across all topics

### 🎨 Design & UX
- **Dark mode** with vibrant purple/cyan accents
- **Responsive** — mobile, tablet, and desktop optimized
- **Smooth animations** with CSS3 transitions
- **Progress tracking** with visual bars and statistics
- **Toast notifications** for feedback
- **Zero loading** — all content bundled, instant access

### ⚙️ Technical Highlights
- **Vanilla JavaScript** — no frameworks, super fast
- **PeerJS integration** — real-time multiplayer connections
- **LocalStorage** — save progress across sessions
- **Gemini API ready** — AI explanations and custom content generation
- **SEO optimized** — meta tags, semantic HTML

---

## 🎮 Quick Start

### **Online (No Setup)**
Visit: [https://AbdullahGulrezasdwa.github.io/Study](https://AbdullahGulrezasdwa.github.io/Study)

### **Local Development**
```bash
# Clone the repo
git clone https://github.com/AbdullahGulrezasdwa/Study.git
cd Study

# Serve locally (any simple HTTP server)
python3 -m http.server 8000
# or
npx http-server

# Open in browser
open http://localhost:8000
```

---

## 🕹️ How to Use

### **Solo Study**
1. Click a mode (Flashcards, Multiple Choice, etc.)
2. Select your subject, difficulty, and question count
3. Study and rate yourself
4. Get instant results and breakdown

### **Multiplayer**
1. Click "Multiplayer vs Friend"
2. Host a game or join with a room code
3. Configure settings (subject, difficulty, questions)
4. Race against your friend in real-time
5. Winner is determined by speed + accuracy

### **AI Tutor**
1. Go to "AI Tutor 🤖"
2. Choose mode: Quiz, Passage, or Explain It
3. Enter topic (or leave blank for random)
4. AI generates fresh content instantly
5. *Requires Gemini API key* (see [Setup](#-setup) below)

---

## 🔧 Setup

### **Enable AI Tutor**
1. Get a free **Gemini API key** from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. On first use of AI Tutor, you'll be prompted to enter your API key
3. Key is stored in browser only (not sent to any server)

### **Multiplayer Setup**
- Multiplayer uses **PeerJS** for peer-to-peer connections
- Works out of the box — no server needed
- Uses STUN/TURN servers for NAT traversal
- Room codes are randomly generated 6-character alphanumeric codes

---

## 📁 Project Structure

```
Study/
├── index.html          # Main app (all-in-one HTML file)
├── README.md           # Documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

**Why single HTML file?**
- ⚡ **Instant loading** — zero HTTP requests
- 📦 **Zero dependencies** — works offline
- 🔄 **Easy to deploy** — GitHub Pages ready
- 🛡️ **Secure** — no backend vulnerabilities

---

## 🎯 Features Breakdown

### **Question Bank**
- 500+ curated GL-standard questions
- Difficulty-tiered (Year 4–9)
- English: Retrieval, inference, techniques, grammar, punctuation, literature
- Maths: Numbers, algebra, statistics, geometry

### **Scoring System**
- **Accuracy:** Percentage correct
- **Speed:** Completion time
- **Grade:** A+ to F based on performance
- **Breakdown:** By subject, difficulty, topic

### **Progress Tracking**
- Visual progress bars per question set
- Stats pills showing attempts/score
- Result screens with detailed breakdown
- Toast notifications for feedback

---

## 🚀 Future Enhancements

- [ ] User accounts & cloud sync
- [ ] Custom question uploads
- [ ] Practice tests (60 min timed exams)
- [ ] Spaced repetition algorithm
- [ ] Mobile app (React Native)
- [ ] Teacher dashboard
- [ ] Leaderboards (online competition)
- [ ] Dark mode toggle
- [ ] Voice input for speed round
- [ ] Export results as PDF

---

## 🛠️ Technologies Used

| Tech | Purpose |
|------|---------|
| **HTML5** | Semantic structure |
| **CSS3** | Responsive design, animations |
| **Vanilla JS** | Logic, interactivity, state management |
| **PeerJS** | Real-time multiplayer |
| **Google Gemini API** | AI-powered content generation |
| **GitHub Pages** | Free hosting & deployment |

---

## 📊 Stats

- **Lines of Code:** ~2,500 (all in one file)
- **Load Time:** <100ms (fully cached)
- **Questions:** 500+
- **Modes:** 7
- **Subjects:** 2 (English, Maths)
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 🤝 Contributing

Found a bug or have an idea?

1. **Report bugs:** Open an [Issue](https://github.com/AbdullahGulrezasdwa/Study/issues)
2. **Suggest features:** Start a [Discussion](https://github.com/AbdullahGulrezasdwa/Study/discussions)
3. **Submit PRs:** Fork → Branch → Commit → Push → PR

### Contribution Guidelines
- Keep the single-file architecture
- Test on mobile and desktop
- Maintain the dark theme aesthetic
- Add questions with consistent format: `{s, t, d, q, a, o}`
- Update README if adding major features

---

## 📄 License

MIT License — feel free to use, modify, and distribute. See [LICENSE](LICENSE) file.

---

## 👨‍💻 Author

**Abdullah Gulrez**  
📧 [GitHub Profile](https://github.com/AbdullahGulrezasdwa)

---

## 🙏 Acknowledgments

- **Google Gemini API** — AI content generation
- **PeerJS** — WebRTC multiplayer
- **Google Fonts** — Syne & Space Mono typefaces
- **GL Assessment** — Exam-style question format inspiration

---

## 📞 Support

- **Live Demo:** [https://AbdullahGulrezasdwa.github.io/Study](https://AbdullahGulrezasdwa.github.io/Study)
- **Report Issues:** [GitHub Issues](https://github.com/AbdullahGulrezasdwa/Study/issues)
- **Question?** Check the [FAQ](#faq) below

---

## FAQ

**Q: Is my AI API key secure?**  
A: Yes! It's stored in your browser only. Never sent to any server except directly to Google's Gemini API.

**Q: Can I use this offline?**  
A: Yes! All content is bundled. AI Tutor requires internet for API calls.

**Q: How is multiplayer peer-to-peer?**  
A: PeerJS creates direct connections between browsers using WebRTC. No server required (only STUN/TURN servers for NAT).

**Q: Can teachers use this?**  
A: Absolutely! It's great for homework, revision, or in-class practice. Multiplayer mode is perfect for competitive quizzes.

**Q: Why is everything in one HTML file?**  
A: Speed, simplicity, and reliability. Single files load instantly and require zero build process.

---

**Made with ❤️ for Year 7 students everywhere**
