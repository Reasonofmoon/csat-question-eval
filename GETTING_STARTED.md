# 🎓 English Exam Question Evaluator - Complete Setup

## ✅ Project Successfully Built!

Your **Korean SAT (Suneung) English Question Analysis System** is now ready to use!

---

## 📦 What This System Does

This is an **AI-powered web application** that analyzes Korean SAT English exam questions using:

- **Two-Way Specification Table (이원목적분류표)**: Content domain × Behavioral domain matrix
- **Bloom's Taxonomy**: 6-level cognitive analysis
- **Claude AI**: Anthropic's Claude Sonnet 4.5 for deep analysis
- **Export Features**: PDF, HTML, and Markdown formats

---

## 🚀 Quick Start (3 Minutes)

### Step 1: Open the Application ✅ DONE
The application should already be open in your browser!
- **File**: `F:\english-exam-question-evaluator\index.html`

### Step 2: Get Your API Key (2 minutes)
1. Visit: https://console.anthropic.com/
2. Sign up or log in
3. Go to **API Keys** section
4. Click **Create Key**
5. Copy the key (format: `sk-ant-api03-...`)
6. Paste it into the system

### Step 3: Test with Example (30 seconds)
Copy this example question and paste it into the system:

```
출처: 2023학년도 대학수학능력시험 영어 21번

문제:
When you encounter a stressful situation, your mind narrows its focus to the immediate problem at hand. This is a useful adaptation that helps you deal with threats. However, this narrow focus comes at a cost. When your attention is focused on the stressor, you have fewer cognitive resources available for other tasks. This is why it's hard to concentrate on work when you're worried about a personal problem. Researchers have found that people who experience chronic stress show reduced cognitive flexibility and have difficulty shifting their attention from one task to another. They also struggle to update their mental representations when new information becomes available. In other words, stress makes you mentally inflexible. On the other hand, when you're feeling relaxed and safe, your mind is free to wander and make unexpected connections. You're more likely to notice interesting details in your environment and to think creatively. In this state, you're like a scuba diver exploring the ocean depths, whereas when you're stressed, you zip along the surface like a guy on a Jet Ski, missing the rich world beneath the waves.

선택지:
① getting deeply engaged with internal thoughts
② making quick but superficial observations  
③ exploring various perspectives methodically
④ maintaining focus despite external distractions
⑤ synthesizing information from multiple sources

정답: ②
```

Click **"🔍 AI 분석 시작"** and wait 10-30 seconds!

---

## 📁 Project Files Overview

```
F:\english-exam-question-evaluator\
├── index.html              (37 KB) ⭐ Main application - OPEN THIS
├── analysis-template.js    (7 KB)  📋 Analysis template engine
├── export-utils.js         (11 KB) 📤 PDF/HTML/Markdown export
├── README.md              (12 KB) 📖 Full documentation (Korean)
├── EXAMPLES.md            (9 KB)  📝 Example questions
├── DEPLOY.md              (6 KB)  🚀 GitHub Pages deployment
├── PROJECT_SUMMARY.md     (11 KB) 📊 Technical summary
├── START_HERE.md          (7 KB)  🎯 Quick start guide
└── LICENSE                (1 KB)  📜 MIT License
```

**Total**: 9 files, ~101 KB

---

## 🎯 Key Features

### 1. 📊 Two-Way Specification Table Analysis
- **Content Domain**: Topic, subject matter, curriculum alignment
- **Behavioral Domain**: Bloom's 6 cognitive levels

### 2. 🔬 Question Design Principle Analysis
- Intent of the question
- Passage structure analysis
- Choice strategy evaluation

### 3. 💡 Solution Strategy
- Step-by-step solving process
- Evidence identification
- Wrong answer analysis

### 4. 📚 Learning Materials Recommendation
- Concept summary
- Related question types
- Study strategies

### 5. 📤 Multi-Format Export
- **PDF**: Print-optimized reports
- **HTML**: Web sharing
- **Markdown**: Text editing

---

## 💰 Cost Information

### Claude API Pricing
- **Model**: Claude Sonnet 4.5
- **Cost per question**: $0.05 - $0.15
- **Monthly estimates**:
  - 10 analyses: $0.50 - $1.50
  - 50 analyses: $2.50 - $7.50
  - 100 analyses: $5.00 - $15.00

---

## 🌐 Optional: Deploy to GitHub Pages

If you want to share this online:

```powershell
# 1. Initialize Git repository
git init
git add .
git commit -m "Initial commit: Korean SAT Analysis System"

# 2. Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch
```

Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 🛠️ How It Works

```
User Input (Question + Choices)
    ↓
Structured Prompt Generation
    ↓
Claude API Call
    ↓
AI Analysis (Template-based)
    ↓
HTML Rendering
    ↓
Display + Export Options (PDF/HTML/MD)
```

---

## 🎨 Customization Options

### Change Colors
Edit CSS variables in `index.html`:

```css
:root {
    --primary-color: #3498db;      /* Main color */
    --secondary-color: #9b59b6;    /* Secondary color */
    --success-color: #27ae60;      /* Success color */
}
```

### Modify Analysis Prompt
Edit `generateAnalysisPrompt()` function in `index.html` to customize AI instructions.

---

## 🆘 Troubleshooting

### Problem: API Error
**Solution**:
1. Check API key format (`sk-ant-api03-...`)
2. Verify credits at Anthropic Console
3. Check internet connection

### Problem: Analysis Not Working
**Solution**:
1. Ensure question text and choices are filled
2. Check choice format (①②③④⑤)
3. Press F12 and check browser console for errors

### Problem: PDF Download Fails
**Solution**:
1. Allow pop-ups in browser
2. Update browser to latest version
3. Try a different browser (Chrome recommended)

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| `GETTING_STARTED.md` | This file - quick reference |
| `README.md` | Complete Korean documentation |
| `EXAMPLES.md` | Sample questions to test |
| `DEPLOY.md` | GitHub Pages deployment guide |
| `START_HERE.md` | Quick start in Korean |
| `PROJECT_SUMMARY.md` | Technical summary |

---

## 🎓 Use Cases

### For Teachers
- Create teaching materials
- Analyze question quality
- Prepare customized explanations
- Research question patterns

### For Students
- Create error note books
- Understand question types
- Self-directed learning
- Identify weak areas

### For Researchers
- Large-scale question analysis
- Trend analysis
- Curriculum research
- Statistical validation

---

## 🔐 Security & Privacy

- **API Key**: Stored in browser localStorage only
- **Data**: Processed client-side only
- **Server**: No server needed (static site)
- **Privacy**: No data collection or logging

---

## ✨ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: Claude API (Anthropic)
- **Export**: html2pdf.js, Custom Markdown converter
- **Hosting**: GitHub Pages compatible
- **No dependencies**: Works offline except API calls

---

## 📝 License

**MIT License** - Free to use, modify, and distribute

---

## 🎉 You're All Set!

### Next Steps:

1. ✅ Application is open in your browser
2. ⏳ Get your API key from Anthropic
3. 🧪 Test with the example question above
4. 🚀 Start analyzing real exam questions!

---

## 📞 Support

- **GitHub Issues**: Report bugs or request features
- **Documentation**: Read README.md for detailed info
- **Examples**: Check EXAMPLES.md for more test cases

---

**Happy Analyzing! 🎓📊✨**

---

*Last Updated: 2025-01-13*
*Version: 1.0.0*
