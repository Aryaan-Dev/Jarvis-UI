## Jarvis UI - Your Futuristic Assistant Interface 🤖

Meet the **Jarvis UI**, a stunning web-based interface that brings a JARVIS-inspired vibe to your desktop! Built with a sleek design, cool animations, and interactive features, this UI lets you chat with your AI assistant using voice or text, all wrapped in a sci-fi look. Ready to feel like a tech superhero? Let’s dive in !

## How to Access the Jarvis UI

Getting started is a breeze! Follow these steps to launch the UI:

1. **Clone the Repository**\
   Grab the code from GitHub:

   ```bash
   git clone https://github.com/yourusername/Jarvis-AI-UI.git
   cd Jarvis-AI-UI
   ```

2. **Set Up Your Environment**

   - Ensure you have Python 3.6+ and Microsoft Edge installed.
   - No `.env` file is needed yet (based on current files).

3. **Install Dependencies**\
   Run this to get the required Python package:

   ```bash
   pip install eel
   ```

4. **Launch the UI**\
   Start the interface with:

   ```bash
   python main.py
   ```

   - This opens Microsoft Edge with the UI at `http://localhost:8000/index.html`.
   - A futuristic window with a black background, glowing buttons, and animations will appear.

5. **Interact**

   - Click the mic button to start voice input (currently logs to console—more functionality may come later).
   - Type in the input field or use the chat/settings buttons to explore.

**Pro Tip**: Keep Edge updated and your internet on for smooth performance!

## 🛠️ Troubleshooting

Hit a snag? Here’s how to spot and fix common issues:

### 1. **UI Doesn’t Open**

- **Signs**: Running `python main.py` shows errors like “ModuleNotFoundError” or no window appears.
- **Fix**:
  - Install Eel: `pip install eel`.
  - Check Python version: Run `python --version` (needs 3.6+).
  - Ensure `www` folder with `index.html` exists.
  - Look at terminal errors for clues.

### 2. **Mic Button Doesn’t Respond**

- **Signs**: Clicking the mic button logs “Microphone button clicked!” but no audio input works.
- **Fix**:
  - Microphone may not be enabled—test it in another app (e.g., Edge).
  - Check if additional features are missing (pending future updates).
  - Ensure Edge has microphone permissions.

### 3. **Animations or Layout Look Weird**

- **Signs**: Particles don’t move, or the interface is misaligned.
- **Fix**:
  - Resize your window—run `resizeCanvas()` manually in browser console if needed.
  - Update your browser (Edge) to the latest version.
  - Check internet connection for CDN files (e.g., Bootstrap, Font Awesome).

### 4. **Page Loads but Stays Blank**

- **Signs**: White or black screen with no content.
- **Fix**:
  - Verify `www/index.html` and `www/script.js` are in place.
  - Clear browser cache or try a different browser (e.g., Chrome).
  - Check console (F12 in Edge) for JavaScript errors.

### 5. **App Crashes**

- **Signs**: Script stops or Edge closes unexpectedly.
- **Fix**:
  - Ensure `main.py` runs without port conflicts (change `port=8000` if needed).
  - Check terminal for errors (e.g., file not found).
  - Update Edge or reinstall Eel.

**Still Stuck?** Drop a note in GitHub issues with your error message!

## 📋 Requirements

To run Jarvis AI UI smoothly, you’ll need:

- **Python 3.6+**: The core language.
- **Microsoft Edge**: Used to display the UI (install from edge.com).
- **Internet Connection**: For loading CDN resources (Bootstrap, Font Awesome, etc.).
- **Dependencies**:
  - `eel` (install via `pip install eel`).
- **Optional**: A microphone for voice input (future functionality pending updates).

## 💻 Virtual Environment Tips

Keep your project neat with a virtual environment! Here’s how:

- **Create a Virtual Env**:

  ```bash
  python -m venv venv
  ```

- **Activate It**:

  - Windows: `venv\Scripts\activate`
  - Mac/Linux: `source venv/bin/activate`

- **Install Dependencies Inside**:

  ```bash
  pip install eel
  ```

- **Deactivate When Done**:

  ```bash
  deactivate
  ```

This keeps Jarvis AI UI’s packages separate from other projects!

## ✨ What’s Super Cool About Jarvis AI UI

- **Sci-Fi Style**: A black theme with glowing blue effects and orbiting animations.
- **Particle Magic**: Floating blue particles dance across the screen.
- **Glowy Buttons**: Mic, chat, and settings buttons light up when you hover.
- **Animated Text**: “Ask Me Anything” and messages fade in and out like a futuristic HUD.
- **Responsive Design**: Adjusts to your screen size with smooth transitions.

## 👨‍💻 Made By

Crafted with passion by B P ARYAAN \[ Aryaan-Dev \]. Special thanks to the open-source community for tools like Eel, Bootstrap, etc that power this project.

## 🤝 Join the Adventure

Love the Jarvis AI UI? Help us level it up! Fork the repo, add new features, or fix bugs. Got ideas? Share them in the GitHub issues section.

---

**Built with ❤️ for tech enthusiasts and sci-fi fans.** Power up Jarvis UI and step into the future! 🦸‍♂️
