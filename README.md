# 🎬 Movie Night — Cinema Discovery & Watchlist Web App

A sleek, modern, and interactive movie discovery web application built with pure **HTML5**, **CSS3 (Custom Design System & CSS Variables)**, and vanilla **JavaScript (ES6+)**.

---

## ✨ Features & Highlights

- **🌙 Sleek Dark Mode (Default) & Light Mode**: Seamless theme switching with smooth transitions and persistent state via `localStorage`.
- **🔍 Real-Time Instant Search**: Live filtering across movie titles, directors, cast members, and synopses with a quick-focus shortcut (`/`) and instant clear button.
- **🏷️ Dynamic Genre & Decade Filtering**:
  - Filter movies across genres (*Sci-Fi, Action, Drama, Thriller, Animation, Adventure, Comedy, Crime, Fantasy, Family, etc.*) using interactive pill chips or dropdown selector with live movie counts.
  - Filter by release era (*2020s Modern Hits, 2010s Golden Era, 2000s Millennium Hits, 1990s & Classics*).
- **⚡ Multi-Option Sorting**: Sort movies by IMDb Rating (Highest / Lowest), Release Year (Newest / Oldest), and Title (A-Z / Z-A).
- **🌟 Featured Spotlight Hero Banner**: Showcase top-rated films with cinematic backdrops, ratings, synopsis, direct trailer launch, and watchlist actions.
- **📌 Interactive Details Modal**: Click any movie card to explore high-res poster, detailed synopsis, director, screenwriters, full cast pills, awards, and an interactive 5-star rating system.
- **💬 User Reviews & Comments Section**: Share your personal review and star rating directly in the movie modal, with instant local persistence and review management.
- **🎥 Embedded Trailer Video Player**: Watch official movie trailers directly within a responsive video player modal.
- **⭐ Watchlist & Favorites System**: Save and remove movies from your personal Watchlist with one click, persisted locally in `localStorage`, plus a dedicated Watchlist view tab with counter badges and empty-state recommendations.
- **🎰 "Surprise Me" Slot-Machine Randomizer**: An animated slot-machine shuffle that rapidly cycles through movie cards with glowing borders, scrolls to the winning pick, and launches its details modal.
- **✨ Ultra-Responsive Skeleton Screens**: Subtle shimmer effects during filtering and state changes for a native app feel.
- **📱 Fully Responsive Design**: Optimized for seamless viewing on mobile phones, tablets, laptops, and ultra-wide desktops.
- **🔔 Toast Notification System**: Real-time visual feedback for all user actions (adding/removing from watchlist, posting reviews, rating movies, copying share links).

---

## 🚀 Technologies Used

- **HTML5**: Semantic tags, accessible ARIA roles, and SEO-optimized metadata.
- **CSS3**: Modern Flexbox & Grid layouts, Glassmorphism, CSS Custom Properties (Theming), fluid typography, and micro-animations.
- **JavaScript (ES6+)**: Modular state management, real-time DOM manipulation, array filtering & sorting pipelines, modal management, and `localStorage` synchronization.
- **Lucide Icons**: Retina-crisp SVG icons for a modern UI.
- **Google Fonts**: *Outfit* & *Plus Jakarta Sans* typography.

---

## 📂 Project Structure

```
├── index.html        # Main HTML structure, hero banner, filters bar, modals, reviews & toasts
├── styles.css        # CSS design system, dark/light themes, skeletons, animations & responsive styling
├── app.js            # Movie dataset, filtering/sorting logic, reviews system, roulette picker & state persistence
└── README.md         # Documentation & setup guide
```

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shreyakumari2006/Movie-night.git
   cd Movie-night
   ```

2. **Open in Browser**:
   - Simply open `index.html` in any web browser, OR
   - Run a local server:
     ```bash
     # Using Python 3
     python3 -m http.server 8080
     ```
   - Navigate to `http://localhost:8080`

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `/` | Instantly focus and activate the search bar |
| `ESC` | Close any open movie detail modal or trailer video |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
