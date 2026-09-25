/**
 * Movie Night - Cinema Discovery Application
 * Modern Vanilla JavaScript (ES6+) Implementation
 */

// --- Comprehensive Curated Movie Dataset ---
const MOVIES_DATA = [
  {
    id: "m1",
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    year: 2010,
    rating: 8.8,
    runtime: "2h 28m",
    certification: "PG-13",
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Cillian Murphy"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    longSynopsis: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption: one last job could give him his life back if he can accomplish the impossible, inception.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    trailerId: "YoHD9XEInc0",
    awards: "Winner of 4 Academy Awards (Cinematography, Sound Editing, Sound Mixing, Visual Effects)",
    featured: true
  },
  {
    id: "m2",
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    year: 2014,
    rating: 8.7,
    runtime: "2h 49m",
    certification: "PG-13",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine", "Matt Damon"],
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft along with a team of researchers to find a new home.",
    longSynopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper and a team of researchers through the wormhole and across the galaxy to discover which of three planets could be mankind's new home.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1200&auto=format&fit=crop&q=80",
    trailerId: "zSWdZVtXT7E",
    awards: "Winner of 1 Academy Award (Best Visual Effects) & 4 Oscar Nominations",
    featured: false
  },
  {
    id: "m3",
    title: "The Dark Knight",
    tagline: "Welcome to a world without rules.",
    year: 2008,
    rating: 9.0,
    runtime: "2h 32m",
    certification: "PG-13",
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman"],
    synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    longSynopsis: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism. Heath Ledger delivers an iconic, legendary performance as the anarchic Joker.",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    trailerId: "EXeTwQWrcwY",
    awards: "Winner of 2 Academy Awards including Best Supporting Actor (Heath Ledger)",
    featured: false
  },
  {
    id: "m4",
    title: "Spider-Man: Across the Spider-Verse",
    tagline: "It's how you wear the mask that matters.",
    year: 2023,
    rating: 8.7,
    runtime: "2h 20m",
    certification: "PG",
    genres: ["Animation", "Action", "Sci-Fi", "Adventure"],
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    writer: "Phil Lord, Christopher Miller, Dave Callaham",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Jake Johnson", "Daniel Kaluuya"],
    synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    longSynopsis: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    trailerId: "cqGjhVJWtEg",
    awards: "Academy Award Nominee for Best Animated Feature Film",
    featured: false
  },
  {
    id: "m5",
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    year: 2023,
    rating: 8.9,
    runtime: "3h 00m",
    certification: "R",
    genres: ["Drama", "Biography", "History"],
    director: "Christopher Nolan",
    writer: "Christopher Nolan (Based on American Prometheus)",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr.", "Florence Pugh"],
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during the Manhattan Project.",
    longSynopsis: "Written and directed by Christopher Nolan, Oppenheimer is an IMAX-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. The film explores the profound moral dilemmas, bureaucratic trials, and scientific triumphs of the Manhattan Project.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&auto=format&fit=crop&q=80",
    trailerId: "uYPbbksJxIg",
    awards: "Winner of 7 Academy Awards including Best Picture, Best Director, and Best Actor",
    featured: true
  },
  {
    id: "m6",
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    year: 2024,
    rating: 8.6,
    runtime: "2h 46m",
    certification: "PG-13",
    genres: ["Sci-Fi", "Adventure", "Action"],
    director: "Denis Villeneuve",
    writer: "Denis Villeneuve, Jon Spaihts",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem", "Austin Butler", "Florence Pugh"],
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    longSynopsis: "Dune: Part Two explores the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80",
    trailerId: "Way9Dexny3w",
    awards: "Critically Acclaimed Global Box Office Phenomenon",
    featured: false
  },
  {
    id: "m7",
    title: "Spirited Away",
    tagline: "Beyond the tunnel lies a world of spirits and mystery.",
    year: 2001,
    rating: 8.6,
    runtime: "2h 05m",
    certification: "PG",
    genres: ["Animation", "Adventure", "Fantasy", "Family"],
    director: "Hayao Miyazaki",
    writer: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naito", "Yasuko Sawaguchi"],
    synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    longSynopsis: "Chihiro and her parents are moving to a small Japanese town in the countryside. Taking a wrong turn, they arrive at an abandoned amusement park. When night falls, the park turns out to be a bathhouse for spirits, gods, and supernatural creatures. After her parents are turned into pigs by the sorceress Yubaba, Chihiro must summon immense courage and take a job at the bathhouse to rescue them.",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    trailerId: "ByXuk9QqQkk",
    awards: "Winner of the Academy Award for Best Animated Feature (First hand-drawn anime win)",
    featured: false
  },
  {
    id: "m8",
    title: "Parasite",
    tagline: "Act like you own the place.",
    year: 2019,
    rating: 8.5,
    runtime: "2h 12m",
    certification: "R",
    genres: ["Thriller", "Drama", "Comedy"],
    director: "Bong Joon-ho",
    writer: "Bong Joon-ho, Han Jin-won",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    longSynopsis: "The Kim family — father Ki-taek, mother Chung-sook, daughter Ki-jung, and son Ki-woo — live in a squalid semi-basement apartment, struggling with odd jobs. When Ki-woo secures a tutoring gig with the wealthy Park family, the Kims systematically infiltrate the household by posing as unrelated, highly qualified master professionals, setting off a chain of unforeseen events.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&auto=format&fit=crop&q=80",
    trailerId: "5xH0R_ux3gk",
    awards: "Historic Winner of 4 Academy Awards including Best Picture & Palme d'Or at Cannes",
    featured: false
  },
  {
    id: "m9",
    title: "Whiplash",
    tagline: "The road to greatness can take you to the edge.",
    year: 2014,
    rating: 8.5,
    runtime: "1h 46m",
    certification: "R",
    genres: ["Drama", "Music"],
    director: "Damien Chazelle",
    writer: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser", "Melissa Benoist", "Austin Stowell"],
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    longSynopsis: "Andrew Neiman is an ambitious young jazz drummer, single-minded in his pursuit to rise to the top of his elite East Coast music conservatory. Plagued by the failed writing career of his father, Andrew hungers day and night to become one of the greats. Terence Fletcher, an instructor equally known for his teaching talent as for his terrifying methods, discovers Andrew and transfers the aspiring drummer into his top jazz ensemble.",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80",
    trailerId: "7d_jQycdQGo",
    awards: "Winner of 3 Academy Awards including Best Supporting Actor for J.K. Simmons",
    featured: false
  },
  {
    id: "m10",
    title: "Everything Everywhere All At Once",
    tagline: "The universe is so much bigger than you think.",
    year: 2022,
    rating: 8.6,
    runtime: "2h 19m",
    certification: "R",
    genres: ["Sci-Fi", "Adventure", "Comedy", "Fantasy"],
    director: "Daniel Kwan, Daniel Scheinert",
    writer: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Stephanie Hsu", "Jamie Lee Curtis", "James Hong"],
    synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    longSynopsis: "Directed by Daniel Kwan and Daniel Scheinert, the film is a hilarious and big-hearted sci-fi action adventure about an exhausted Chinese American woman who can't seem to finish her taxes. Suddenly swept up in a multiverse catastrophe, Evelyn Wang must channel unexpected powers across parallel realities to reconcile with her daughter, husband, and herself.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    trailerId: "wxN1T1uxQ2g",
    awards: "Swept the Academy Awards winning 7 Oscars including Best Picture & Best Actress",
    featured: false
  },
  {
    id: "m11",
    title: "The Matrix",
    tagline: "Welcome to the Real World.",
    year: 1999,
    rating: 8.7,
    runtime: "2h 16m",
    certification: "R",
    genres: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
    writer: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving", "Joe Pantoliano"],
    synopsis: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    longSynopsis: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity has been captured by a race of machines.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    trailerId: "vKQi3bBA1y8",
    awards: "Winner of 4 Academy Awards including Best Visual Effects & Best Editing",
    featured: false
  },
  {
    id: "m12",
    title: "Blade Runner 2049",
    tagline: "The key to the future is finally unearthed.",
    year: 2017,
    rating: 8.0,
    runtime: "2h 44m",
    certification: "R",
    genres: ["Sci-Fi", "Mystery", "Drama", "Action"],
    director: "Denis Villeneuve",
    writer: "Hampton Fancher, Michael Green",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks", "Robin Wright"],
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    longSynopsis: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years. A breathtaking masterclass in visual storytelling and philosophical science fiction.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    trailerId: "gCcx85zbxz4",
    awards: "Winner of 2 Academy Awards including Best Cinematography (Roger Deakins)",
    featured: false
  },
  {
    id: "m13",
    title: "Coco",
    tagline: "The celebration of a lifetime.",
    year: 2017,
    rating: 8.4,
    runtime: "1h 45m",
    certification: "PG",
    genres: ["Animation", "Adventure", "Family", "Music", "Fantasy"],
    director: "Lee Unkrich, Adrian Molina",
    writer: "Lee Unkrich, Jason Katz, Matthew Aldrich",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt", "Alanna Ubach", "Renée Victor"],
    synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    longSynopsis: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Héctor, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
    trailerId: "Rvr68u6k5sI",
    awards: "Winner of 2 Academy Awards (Best Animated Feature & Best Original Song)",
    featured: false
  },
  {
    id: "m14",
    title: "Pulp Fiction",
    tagline: "You won't know the facts until you've seen the fiction.",
    year: 1994,
    rating: 8.9,
    runtime: "2h 34m",
    certification: "R",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    writer: "Quentin Tarantino, Roger Avary",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis", "Ving Rhames"],
    synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    longSynopsis: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Quentin Tarantino revolutionized modern cinema with this razor-sharp, non-linear masterpiece packed with iconic dialogue, needle-drop soundtrack choices, and pop culture reverence.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    trailerId: "s7EdQ4FqbhY",
    awards: "Winner of the Palme d'Or & Academy Award for Best Original Screenplay",
    featured: false
  },
  {
    id: "m15",
    title: "La La Land",
    tagline: "Here's to the fools who dream.",
    year: 2016,
    rating: 8.0,
    runtime: "2h 08m",
    certification: "PG-13",
    genres: ["Comedy", "Drama", "Music", "Romance"],
    director: "Damien Chazelle",
    writer: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt", "J.K. Simmons"],
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    longSynopsis: "Sebastian and Mia are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart in a vibrant celebration of jazz, cinema, and Los Angeles.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&auto=format&fit=crop&q=80",
    trailerId: "0pdqf4P9MB8",
    awards: "Winner of 6 Academy Awards including Best Director & Best Actress (Emma Stone)",
    featured: false
  },
  {
    id: "m16",
    title: "Knives Out",
    tagline: "Nothing brings a family together like murder.",
    year: 2019,
    rating: 7.9,
    runtime: "2h 10m",
    certification: "PG-13",
    genres: ["Comedy", "Crime", "Mystery", "Thriller"],
    director: "Rian Johnson",
    writer: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas", "Jamie Lee Curtis", "Michael Shannon", "Toni Collette"],
    synopsis: "A detective investigates the death of a patriarch of an eccentric, combative family in a stylish modern whodunit mystery.",
    longSynopsis: "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely demise.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    trailerId: "qGqiHJTsR4Q",
    awards: "Academy Award Nominee for Best Original Screenplay & AFI Movie of the Year",
    featured: false
  }
];

// --- App State ---
const state = {
  searchQuery: "",
  selectedGenre: "ALL",
  sortBy: "rating-desc",
  activeView: "all", // "all" | "watchlist"
  watchlist: new Set(),
  userRatings: {},
  theme: "dark",
  currentModalMovieId: null,
  featuredMovieId: "m5" // Default featured movie (Oppenheimer)
};

// --- DOM Element References ---
const elements = {
  themeToggleBtn: document.getElementById("theme-toggle-btn"),
  tabAllMovies: document.getElementById("tab-all-movies"),
  tabWatchlist: document.getElementById("tab-watchlist"),
  badgeAllCount: document.getElementById("badge-all-count"),
  badgeWatchlistCount: document.getElementById("badge-watchlist-count"),
  btnSurpriseMe: document.getElementById("btn-surprise-me"),
  
  // Hero Elements
  heroSpotlight: document.getElementById("hero-spotlight"),
  heroBackdropImg: document.getElementById("hero-backdrop-img"),
  heroTitle: document.getElementById("hero-title"),
  heroTagline: document.getElementById("hero-tagline"),
  heroMeta: document.getElementById("hero-meta"),
  heroDescription: document.getElementById("hero-description"),
  heroBtnDetails: document.getElementById("hero-btn-details"),
  heroBtnTrailer: document.getElementById("hero-btn-trailer"),
  heroBtnWatchlist: document.getElementById("hero-btn-watchlist"),
  heroWatchlistIcon: document.getElementById("hero-watchlist-icon"),
  heroWatchlistText: document.getElementById("hero-watchlist-text"),

  // Search & Filters
  movieSearchInput: document.getElementById("movie-search-input"),
  searchClearBtn: document.getElementById("search-clear-btn"),
  genreSelect: document.getElementById("genre-select"),
  sortSelect: document.getElementById("sort-select"),
  genrePillsContainer: document.getElementById("genre-pills-container"),
  resultsCountText: document.getElementById("results-count-text"),
  activeFilterChips: document.getElementById("active-filter-chips"),
  btnResetFilters: document.getElementById("btn-reset-filters"),

  // Grid & Empty States
  movieGrid: document.getElementById("movie-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyStateTitle: document.getElementById("empty-state-title"),
  emptyStateDescription: document.getElementById("empty-state-description"),
  btnEmptyReset: document.getElementById("btn-empty-reset"),

  // Modals
  movieDetailModal: document.getElementById("movie-detail-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalBackdropBlur: document.getElementById("modal-backdrop-blur"),
  modalInnerContent: document.getElementById("modal-inner-content"),

  trailerPlayerModal: document.getElementById("trailer-player-modal"),
  trailerCloseBtn: document.getElementById("trailer-close-btn"),
  trailerBackdropBlur: document.getElementById("trailer-backdrop-blur"),
  trailerModalTitle: document.getElementById("trailer-modal-title"),
  trailerVideoContainer: document.getElementById("trailer-video-container"),

  // Toasts
  toastContainer: document.getElementById("toast-container")
};

// --- Storage Handlers ---
function loadFromStorage() {
  try {
    const savedWatchlist = localStorage.getItem("movienight_watchlist");
    if (savedWatchlist) {
      state.watchlist = new Set(JSON.parse(savedWatchlist));
    }

    const savedRatings = localStorage.getItem("movienight_ratings");
    if (savedRatings) {
      state.userRatings = JSON.parse(savedRatings);
    }

    const savedTheme = localStorage.getItem("movienight_theme");
    if (savedTheme) {
      state.theme = savedTheme;
    }
  } catch (e) {
    console.warn("Could not access localStorage:", e);
  }
}

function saveWatchlistToStorage() {
  try {
    localStorage.setItem("movienight_watchlist", JSON.stringify([...state.watchlist]));
  } catch (e) {
    console.warn("Failed to save watchlist to localStorage:", e);
  }
}

function saveRatingsToStorage() {
  try {
    localStorage.setItem("movienight_ratings", JSON.stringify(state.userRatings));
  } catch (e) {
    console.warn("Failed to save ratings to localStorage:", e);
  }
}

function saveThemeToStorage(theme) {
  try {
    localStorage.setItem("movienight_theme", theme);
  } catch (e) {
    console.warn("Failed to save theme to localStorage:", e);
  }
}

// --- Theme Toggling ---
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  saveThemeToStorage(theme);
}

function toggleTheme() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  showToast(
    nextTheme === "dark" ? "Switched to Dark Mode 🌙" : "Switched to Light Mode ☀️",
    "info"
  );
}

// --- Genre Aggregation ---
function getAllGenres() {
  const genresSet = new Set();
  MOVIES_DATA.forEach(movie => {
    movie.genres.forEach(g => genresSet.add(g));
  });
  return Array.from(genresSet).sort();
}

function getGenreCount(genre) {
  if (genre === "ALL") return MOVIES_DATA.length;
  return MOVIES_DATA.filter(m => m.genres.includes(genre)).length;
}

// --- Render Controls & Filter Bar ---
function setupGenreControls() {
  const genres = getAllGenres();

  // Populate Select Dropdown
  elements.genreSelect.innerHTML = `<option value="ALL">All Genres (${MOVIES_DATA.length})</option>`;
  genres.forEach(genre => {
    const count = getGenreCount(genre);
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = `${genre} (${count})`;
    elements.genreSelect.appendChild(option);
  });

  // Populate Pills Bar
  elements.genrePillsContainer.innerHTML = "";
  
  // "All" Pill
  const allPill = document.createElement("button");
  allPill.className = `genre-pill-btn ${state.selectedGenre === "ALL" ? "active" : ""}`;
  allPill.dataset.genre = "ALL";
  allPill.innerHTML = `<span>All</span><span class="pill-count">${MOVIES_DATA.length}</span>`;
  allPill.addEventListener("click", () => handleGenreChange("ALL"));
  elements.genrePillsContainer.appendChild(allPill);

  // Individual Genre Pills
  genres.forEach(genre => {
    const count = getGenreCount(genre);
    const pill = document.createElement("button");
    pill.className = `genre-pill-btn ${state.selectedGenre === genre ? "active" : ""}`;
    pill.dataset.genre = genre;
    pill.innerHTML = `<span>${genre}</span><span class="pill-count">${count}</span>`;
    pill.addEventListener("click", () => handleGenreChange(genre));
    elements.genrePillsContainer.appendChild(pill);
  });
}

function handleGenreChange(newGenre) {
  state.selectedGenre = newGenre;
  elements.genreSelect.value = newGenre;
  
  // Update Active Pill Class
  document.querySelectorAll(".genre-pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.genre === newGenre);
  });

  renderCatalog();
}

// --- Filtering & Sorting Pipeline ---
function getFilteredAndSortedMovies() {
  return MOVIES_DATA.filter(movie => {
    // Watchlist View Filter
    if (state.activeView === "watchlist" && !state.watchlist.has(movie.id)) {
      return false;
    }

    // Genre Filter
    if (state.selectedGenre !== "ALL" && !movie.genres.includes(state.selectedGenre)) {
      return false;
    }

    // Search Query Filter
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = movie.title.toLowerCase().includes(q);
      const matchDirector = movie.director.toLowerCase().includes(q);
      const matchCast = movie.cast.some(actor => actor.toLowerCase().includes(q));
      const matchGenre = movie.genres.some(genre => genre.toLowerCase().includes(q));
      const matchSynopsis = movie.synopsis.toLowerCase().includes(q);

      if (!matchTitle && !matchDirector && !matchCast && !matchGenre && !matchSynopsis) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    switch (state.sortBy) {
      case "rating-desc":
        return b.rating - a.rating;
      case "rating-asc":
        return a.rating - b.rating;
      case "year-desc":
        return b.year - a.year;
      case "year-asc":
        return a.year - b.year;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
}

// --- Render Movie Cards & Catalog ---
function renderCatalog() {
  const filteredMovies = getFilteredAndSortedMovies();

  // Update Nav Badges
  elements.badgeAllCount.textContent = MOVIES_DATA.length;
  elements.badgeWatchlistCount.textContent = state.watchlist.size;

  // Update Summary Strip & Active Filter Chips
  updateFilterSummary(filteredMovies.length);

  // Clear Grid
  elements.movieGrid.innerHTML = "";

  if (filteredMovies.length === 0) {
    elements.movieGrid.style.display = "none";
    elements.emptyState.style.display = "block";
    
    if (state.activeView === "watchlist") {
      elements.emptyStateTitle.textContent = "Your Watchlist is Empty";
      elements.emptyStateDescription.textContent = "You haven't added any movies to your watchlist yet. Tap the bookmark icon on any movie card to save it for later!";
    } else {
      elements.emptyStateTitle.textContent = "No Movies Found";
      elements.emptyStateDescription.textContent = `No movies match your current search "${state.searchQuery}" or genre filter "${state.selectedGenre}".`;
    }
  } else {
    elements.emptyState.style.display = "none";
    elements.movieGrid.style.display = "grid";

    filteredMovies.forEach(movie => {
      const card = createMovieCard(movie);
      elements.movieGrid.appendChild(card);
    });
  }

  // Refresh Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Create single movie card DOM element
function createMovieCard(movie) {
  const isSaved = state.watchlist.has(movie.id);
  const card = document.createElement("article");
  card.className = "movie-card";
  card.dataset.movieId = movie.id;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${movie.title}, Rating ${movie.rating} out of 10`);

  const genresPills = movie.genres.slice(0, 2).map(g => `<span class="card-genre-pill">${g}</span>`).join("");

  card.innerHTML = `
    <div class="movie-poster-wrapper">
      <img
        src="${movie.poster}"
        alt="${movie.title} Poster"
        class="movie-poster-img"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80';"
      />
      <div class="card-floating-badge card-rating-badge" title="IMDb Rating: ${movie.rating}">
        <i data-lucide="star"></i>
        <span>${movie.rating.toFixed(1)}</span>
      </div>
      <button
        type="button"
        class="card-watchlist-btn ${isSaved ? "in-watchlist" : ""}"
        data-action="watchlist"
        data-movie-id="${movie.id}"
        title="${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}"
        aria-label="${isSaved ? "Remove from Watchlist" : "Add to Watchlist"}"
      >
        <i data-lucide="bookmark"></i>
      </button>
      <div class="poster-hover-overlay">
        <span class="quick-view-label">
          <i data-lucide="eye"></i> Quick View
        </span>
      </div>
    </div>
    <div class="movie-card-body">
      <div class="card-meta-line">
        <div class="card-year-cert">
          <span>${movie.year}</span>
          <span>•</span>
          <span>${movie.runtime}</span>
          <span class="cert-badge">${movie.certification}</span>
        </div>
      </div>
      <h3 class="movie-card-title">${movie.title}</h3>
      <div class="movie-card-genres">${genresPills}</div>
      <p class="movie-card-desc">${movie.synopsis}</p>
    </div>
  `;

  // Click event: Watchlist button vs Open Modal
  card.addEventListener("click", (e) => {
    const watchlistBtn = e.target.closest("[data-action='watchlist']");
    if (watchlistBtn) {
      e.stopPropagation();
      toggleWatchlist(movie.id);
    } else {
      openMovieModal(movie.id);
    }
  });

  // Keyboard accessibility
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMovieModal(movie.id);
    }
  });

  return card;
}

// Update Active Filter Summary and Chips
function updateFilterSummary(count) {
  let summaryText = "";
  if (state.activeView === "watchlist") {
    summaryText = `Showing ${count} ${count === 1 ? "movie" : "movies"} in your Watchlist`;
  } else if (state.selectedGenre !== "ALL") {
    summaryText = `Showing ${count} ${count === 1 ? "movie" : "movies"} in ${state.selectedGenre}`;
  } else {
    summaryText = `Showing ${count} ${count === 1 ? "movie" : "movies"}`;
  }
  elements.resultsCountText.textContent = summaryText;

  // Active Chips
  elements.activeFilterChips.innerHTML = "";
  let hasFilters = false;

  if (state.activeView === "watchlist") {
    hasFilters = true;
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.innerHTML = `Watchlist View <span class="filter-chip-remove" data-action="clear-view"><i data-lucide="x"></i></span>`;
    chip.querySelector("[data-action='clear-view']").addEventListener("click", () => switchView("all"));
    elements.activeFilterChips.appendChild(chip);
  }

  if (state.selectedGenre !== "ALL") {
    hasFilters = true;
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.innerHTML = `Genre: ${state.selectedGenre} <span class="filter-chip-remove" data-action="clear-genre"><i data-lucide="x"></i></span>`;
    chip.querySelector("[data-action='clear-genre']").addEventListener("click", () => handleGenreChange("ALL"));
    elements.activeFilterChips.appendChild(chip);
  }

  if (state.searchQuery.trim() !== "") {
    hasFilters = true;
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.innerHTML = `Search: "${state.searchQuery}" <span class="filter-chip-remove" data-action="clear-search"><i data-lucide="x"></i></span>`;
    chip.querySelector("[data-action='clear-search']").addEventListener("click", () => {
      elements.movieSearchInput.value = "";
      state.searchQuery = "";
      elements.searchClearBtn.classList.remove("visible");
      renderCatalog();
    });
    elements.activeFilterChips.appendChild(chip);
  }

  elements.btnResetFilters.style.display = hasFilters ? "inline-flex" : "none";
}

// Reset all filters to default
function resetAllFilters() {
  state.searchQuery = "";
  state.selectedGenre = "ALL";
  state.sortBy = "rating-desc";
  elements.movieSearchInput.value = "";
  elements.genreSelect.value = "ALL";
  elements.sortSelect.value = "rating-desc";
  elements.searchClearBtn.classList.remove("visible");
  
  document.querySelectorAll(".genre-pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.genre === "ALL");
  });

  if (state.activeView === "watchlist") {
    switchView("all");
  } else {
    renderCatalog();
  }

  showToast("All filters have been reset", "info");
}

// --- Hero Spotlight Feature ---
function renderHeroSpotlight(movieId) {
  const movie = MOVIES_DATA.find(m => m.id === movieId) || MOVIES_DATA[0];
  state.featuredMovieId = movie.id;
  const isSaved = state.watchlist.has(movie.id);

  elements.heroBackdropImg.src = movie.backdrop;
  elements.heroBackdropImg.alt = `${movie.title} Backdrop`;
  elements.heroTitle.textContent = movie.title;
  elements.heroTagline.textContent = movie.tagline ? `"${movie.tagline}"` : "";
  elements.heroDescription.textContent = movie.synopsis;

  // Meta pills
  elements.heroMeta.innerHTML = `
    <span class="meta-pill rating">
      <i data-lucide="star"></i> ${movie.rating.toFixed(1)} Rating
    </span>
    <span class="meta-pill">${movie.year}</span>
    <span class="meta-pill">${movie.runtime}</span>
    <span class="meta-pill">${movie.certification}</span>
    <span class="meta-pill">${movie.genres.join(", ")}</span>
  `;

  // Watchlist state on hero button
  updateHeroWatchlistBtn(isSaved);

  // Hero Actions
  elements.heroBtnDetails.onclick = () => openMovieModal(movie.id);
  elements.heroBtnTrailer.onclick = () => openTrailerModal(movie.trailerId, movie.title);
  elements.heroBtnWatchlist.onclick = () => toggleWatchlist(movie.id);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateHeroWatchlistBtn(isSaved) {
  if (isSaved) {
    elements.heroBtnWatchlist.classList.add("active");
    elements.heroWatchlistText.textContent = "Saved to Watchlist";
    elements.heroWatchlistIcon.setAttribute("data-lucide", "bookmark-check");
  } else {
    elements.heroBtnWatchlist.classList.remove("active");
    elements.heroWatchlistText.textContent = "Add to Watchlist";
    elements.heroWatchlistIcon.setAttribute("data-lucide", "bookmark");
  }
}

// --- Watchlist Management ---
function toggleWatchlist(movieId) {
  const movie = MOVIES_DATA.find(m => m.id === movieId);
  if (!movie) return;

  const wasSaved = state.watchlist.has(movieId);
  if (wasSaved) {
    state.watchlist.delete(movieId);
    showToast(`Removed "${movie.title}" from Watchlist`, "ruby");
  } else {
    state.watchlist.add(movieId);
    showToast(`Added "${movie.title}" to Watchlist! ⭐`, "success");
  }

  saveWatchlistToStorage();

  // Update Hero if it's the featured movie
  if (state.featuredMovieId === movieId) {
    updateHeroWatchlistBtn(!wasSaved);
  }

  // Update Modal if open
  if (state.currentModalMovieId === movieId) {
    updateModalWatchlistBtn(!wasSaved);
  }

  // Re-render Catalog
  renderCatalog();
}

// --- User Rating Feature ---
function setUserRating(movieId, rating) {
  state.userRatings[movieId] = rating;
  saveRatingsToStorage();

  const movie = MOVIES_DATA.find(m => m.id === movieId);
  showToast(`You rated "${movie ? movie.title : "this movie"}" ${rating} / 5 Stars! ✨`, "success");

  // Re-render modal star active states
  renderModalStarRating(movieId);
}

function renderModalStarRating(movieId) {
  const currentRating = state.userRatings[movieId] || 0;
  const starsContainer = document.getElementById("interactive-stars-container");
  if (!starsContainer) return;

  starsContainer.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const starBtn = document.createElement("button");
    starBtn.type = "button";
    starBtn.className = `star-btn ${i <= currentRating ? "active" : ""}`;
    starBtn.dataset.star = i;
    starBtn.setAttribute("aria-label", `Rate ${i} star${i > 1 ? "s" : ""}`);
    starBtn.innerHTML = `<i data-lucide="star"></i>`;

    // Hover effect
    starBtn.addEventListener("mouseenter", () => {
      starsContainer.querySelectorAll(".star-btn").forEach((btn, idx) => {
        btn.classList.toggle("hovered", idx < i);
      });
    });

    starBtn.addEventListener("click", () => {
      setUserRating(movieId, i);
    });

    starsContainer.appendChild(starBtn);
  }

  starsContainer.addEventListener("mouseleave", () => {
    starsContainer.querySelectorAll(".star-btn").forEach((btn, idx) => {
      btn.classList.remove("hovered");
      btn.classList.toggle("active", idx < currentRating);
    });
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- Movie Details Modal ---
function openMovieModal(movieId) {
  const movie = MOVIES_DATA.find(m => m.id === movieId);
  if (!movie) return;

  state.currentModalMovieId = movieId;
  const isSaved = state.watchlist.has(movieId);

  const castPills = movie.cast.map(actor => `<span class="modal-meta-item">${actor}</span>`).join("");
  const genreTags = movie.genres.map(genre => `<span class="modal-genre-tag">${genre}</span>`).join("");

  elements.modalInnerContent.innerHTML = `
    <div class="modal-header-banner">
      <img src="${movie.backdrop}" alt="${movie.title} Backdrop" class="modal-banner-img" onerror="this.src='${movie.poster}';" />
      <div class="modal-banner-gradient"></div>
    </div>
    <div class="modal-body-container">
      <div class="modal-main-grid">
        <div class="modal-poster-col">
          <div class="modal-poster-wrapper">
            <img src="${movie.poster}" alt="${movie.title} Poster" class="modal-poster-img" />
          </div>
        </div>
        <div class="modal-details-col">
          <div class="modal-title-row">
            <h2 class="modal-movie-title" id="modal-movie-title">${movie.title}</h2>
            ${movie.tagline ? `<p class="modal-movie-tagline">"${movie.tagline}"</p>` : ""}
          </div>

          <div class="modal-meta-badges">
            <span class="modal-meta-item rating">
              <i data-lucide="star"></i> ${movie.rating.toFixed(1)} / 10
            </span>
            <span class="modal-meta-item">${movie.year}</span>
            <span class="modal-meta-item">${movie.runtime}</span>
            <span class="modal-meta-item">${movie.certification}</span>
          </div>

          <div class="modal-genres-list">
            ${genreTags}
          </div>

          <div class="modal-synopsis-section">
            <h4 class="modal-section-heading">Synopsis</h4>
            <p class="modal-synopsis-text">${movie.longSynopsis || movie.synopsis}</p>
          </div>

          <div class="modal-credits-grid">
            <div class="credit-item">
              <span class="credit-label">Director</span>
              <span class="credit-value">${movie.director}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">Writer</span>
              <span class="credit-value">${movie.writer || movie.director}</span>
            </div>
            ${movie.awards ? `
              <div class="credit-item" style="grid-column: 1 / -1;">
                <span class="credit-label">Awards & Recognition</span>
                <span class="credit-value">${movie.awards}</span>
              </div>
            ` : ""}
          </div>

          <div class="modal-synopsis-section">
            <h4 class="modal-section-heading">Top Cast</h4>
            <div class="modal-meta-badges">
              ${castPills}
            </div>
          </div>

          <div class="user-rating-box">
            <span class="user-rating-title">Your Personal Rating</span>
            <div class="star-rating-interactive" id="interactive-stars-container">
              <!-- Rendered by renderModalStarRating -->
            </div>
          </div>

          <div class="modal-actions-footer">
            <button type="button" class="btn-primary" id="modal-btn-trailer">
              <i data-lucide="play-circle"></i> Watch Trailer
            </button>
            <button type="button" class="btn-secondary ${isSaved ? "btn-ghost active" : ""}" id="modal-btn-watchlist">
              <i data-lucide="bookmark" id="modal-watchlist-icon"></i>
              <span id="modal-watchlist-label">${isSaved ? "In Watchlist" : "Add to Watchlist"}</span>
            </button>
            <button type="button" class="btn-ghost" id="modal-btn-share">
              <i data-lucide="share-2"></i> Share Film
            </button>
          </div>

        </div>
      </div>
    </div>
  `;

  // Attach interactive rating
  renderModalStarRating(movieId);

  // Attach button listeners inside modal
  document.getElementById("modal-btn-trailer").onclick = () => {
    openTrailerModal(movie.trailerId, movie.title);
  };

  document.getElementById("modal-btn-watchlist").onclick = () => {
    toggleWatchlist(movie.id);
  };

  document.getElementById("modal-btn-share").onclick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link to "${movie.title}" copied to clipboard! 📋`, "info");
    } else {
      showToast(`Sharing "${movie.title}"`, "info");
    }
  };

  // Show modal
  elements.movieDetailModal.style.display = "flex";
  setTimeout(() => {
    elements.movieDetailModal.classList.add("active");
  }, 10);
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateModalWatchlistBtn(isSaved) {
  const btn = document.getElementById("modal-btn-watchlist");
  const label = document.getElementById("modal-watchlist-label");
  const icon = document.getElementById("modal-watchlist-icon");
  if (!btn || !label) return;

  if (isSaved) {
    btn.classList.add("active");
    label.textContent = "In Watchlist";
  } else {
    btn.classList.remove("active");
    label.textContent = "Add to Watchlist";
  }
}

function closeMovieModal() {
  elements.movieDetailModal.classList.remove("active");
  setTimeout(() => {
    elements.movieDetailModal.style.display = "none";
    document.body.style.overflow = "";
    state.currentModalMovieId = null;
  }, 250);
}

// --- Trailer Player Modal ---
function openTrailerModal(trailerId, movieTitle) {
  elements.trailerModalTitle.textContent = `${movieTitle} — Official Trailer`;
  elements.trailerVideoContainer.innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${trailerId}?autoplay=1&rel=0&modestbranding=1"
      title="${movieTitle} Official Trailer"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;

  elements.trailerPlayerModal.style.display = "flex";
  setTimeout(() => {
    elements.trailerPlayerModal.classList.add("active");
  }, 10);
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeTrailerModal() {
  elements.trailerPlayerModal.classList.remove("active");
  setTimeout(() => {
    elements.trailerPlayerModal.style.display = "none";
    elements.trailerVideoContainer.innerHTML = ""; // Stop video playback
    if (!state.currentModalMovieId) {
      document.body.style.overflow = "";
    }
  }, 250);
}

// --- Toast Notification System ---
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = "toast";

  let iconName = "info";
  if (type === "success") iconName = "check-circle-2";
  if (type === "ruby") iconName = "bookmark-minus";

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="toast-icon ${type}"></i>
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);
  
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Trigger smooth slide in
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto dismiss after 3.5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// --- View Switcher (All vs Watchlist) ---
function switchView(viewName) {
  state.activeView = viewName;
  elements.tabAllMovies.classList.toggle("active", viewName === "all");
  elements.tabWatchlist.classList.toggle("active", viewName === "watchlist");
  renderCatalog();
}

// --- Surprise Me Recommendation ---
function surpriseMe() {
  const randomIndex = Math.floor(Math.random() * MOVIES_DATA.length);
  const randomMovie = MOVIES_DATA[randomIndex];
  showToast(`🎲 Movie Night Pick: "${randomMovie.title}"!`, "info");
  openMovieModal(randomMovie.id);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Theme Toggle
  elements.themeToggleBtn.addEventListener("click", toggleTheme);

  // Nav Tabs
  elements.tabAllMovies.addEventListener("click", () => switchView("all"));
  elements.tabWatchlist.addEventListener("click", () => switchView("watchlist"));

  // Surprise Me Button
  elements.btnSurpriseMe.addEventListener("click", surpriseMe);

  // Search Input Real-Time
  elements.movieSearchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    elements.searchClearBtn.classList.toggle("visible", state.searchQuery.length > 0);
    renderCatalog();
  });

  // Search Clear Button
  elements.searchClearBtn.addEventListener("click", () => {
    elements.movieSearchInput.value = "";
    state.searchQuery = "";
    elements.searchClearBtn.classList.remove("visible");
    elements.movieSearchInput.focus();
    renderCatalog();
  });

  // Genre Dropdown Select
  elements.genreSelect.addEventListener("change", (e) => {
    handleGenreChange(e.target.value);
  });

  // Sort Dropdown Select
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderCatalog();
  });

  // Reset Filters Buttons
  elements.btnResetFilters.addEventListener("click", resetAllFilters);
  elements.btnEmptyReset.addEventListener("click", resetAllFilters);

  // Modals Close Events
  elements.modalCloseBtn.addEventListener("click", closeMovieModal);
  elements.modalBackdropBlur.addEventListener("click", closeMovieModal);

  elements.trailerCloseBtn.addEventListener("click", closeTrailerModal);
  elements.trailerBackdropBlur.addEventListener("click", closeTrailerModal);

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // Press 'Esc' to close modal
    if (e.key === "Escape") {
      if (elements.trailerPlayerModal.classList.contains("active")) {
        closeTrailerModal();
      } else if (elements.movieDetailModal.classList.contains("active")) {
        closeMovieModal();
      }
    }

    // Press '/' to focus search bar
    if (e.key === "/" && document.activeElement !== elements.movieSearchInput) {
      e.preventDefault();
      elements.movieSearchInput.focus();
      elements.movieSearchInput.select();
    }
  });

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    const siteHeader = document.getElementById("site-header");
    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", window.scrollY > 20);
    }
  }, { passive: true });
}

// --- Initialization ---
function init() {
  loadFromStorage();
  applyTheme(state.theme);
  setupGenreControls();
  renderHeroSpotlight(state.featuredMovieId);
  setupEventListeners();
  renderCatalog();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Run on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
