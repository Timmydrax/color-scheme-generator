# 🎨 Color Scheme Generator

A simple and interactive Color Scheme Generator built using **HTML**, **CSS**, and **JavaScript**. It allows users to select a seed color and scheme mode, then fetch matching color palettes using [TheColorAPI.com](https://www.thecolorapi.com/) API. Users can copy hex codes or the full color scheme to the clipboard with a click.

---

## 🚀 Features

- 🎯 Choose a **seed color** using an `<input type="color">`
- 🎛 Select from various **color scheme modes** (e.g., monochrome, analogous, triad, etc.)
- 🔄 Fetch a **color palette** using **TheColorAPI** based on user selections
- 🎨 Display **5-color schemes** with their **hex codes**
- 📋 Click **individual hex codes** to copy to clipboard
- 📦 Click a button to **copy the entire color scheme** as hex values

---

## 📦 Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Fetch API**
- [TheColorAPI](https://www.thecolorapi.com/) for palette generation

---

## 🧠 How It Works

1. User selects a **seed color**
2. User chooses a **scheme mode** from the dropdown
3. On clicking the **“Get Color Scheme”** button:
   - A `fetch()` call is made to TheColorAPI with the selected color and mode
   - A 5-color palette is returned
4. The colors and their **hex values** are displayed in a styled layout
5. Clicking any hex code **copies it to clipboard**

---

