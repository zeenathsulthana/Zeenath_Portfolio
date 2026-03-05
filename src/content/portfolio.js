const base = import.meta.env.BASE_URL;

export const profile = {
  name: "HIT ME UP! If you find my work impressive (I know you will)",
  title: "Pratik D Deo",
  location: "Consulting / Strategy / Marketing - Portfolio",
  blurb:
    "I build strategy + storytelling backed by research. Here are a few projects, decks, and videos to understand me better!",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pratikddeo/" }
  ],
};

export const projects = [
  {
    id: "Skechers: Active running rebranding",
    type: "pdf",
    title: "Skechers: Active running rebranding",
    year: "2026",
    thumbnail: `${base}media/images/Screenshot 2026-03-04 230825.png`,
    summary:
      "Rebranding Skechers to place it alongside the leaders of active running footwear!",
    description: "When we hear Skechers, we think comfort and comfortable running. But when active runners hears Skechers, they think of a lazy afternoon run, not their everyday track running. Why? Check out my analysis on this!",
    pdf: `${base}media/pdf/SKECHERS_ANALYSIS.pdf`,
  },
  {
    id: "vid-1",
    type: "video",
    title: "Alchime by YSL",
    year: "2025",
    thumbnail: `${base}media/images/alchime.png`,
    summary: "The unique scent of connection, that you cant buy.",
    description: "What if you, your partner, your friend can create something that only both of you know the secret to? We introduce you Alchime by Yves Saint Laurent, a series of perfumes which is engineered specifically in a way that lets you combine any 2 perfumes together, and the result will produce a registered-named 3rd perfume which isnt available in any of the other bottles. Its unique. Its something that only both of you know the secret to!",
    video: {
      youtube:
        "https://www.youtube.com/watch?v=oaZb9m_RgBc",
      // OR: src: `${base}media/video/demo-reel.mp4`,
    },
  },
  {
    id: "vid-2",
    type: "video",
    title: "Nespresso - Thankyou Mom.",
    year: "2026",
    thumbnail: `${base}media/images/nestle.png`,
    summary: "Nespresso thanks each and every mother for all their untold and unrewarded efforts.",
    description: "Nestle's Nespresso never had a specific emotional connection with its customers. Just plain old random adrenaline videos surrounding coffee. But what if a cup of coffee meant something much more?",
    video: {
      youtube:
        "https://www.youtube.com/watch?v=TvGvWOVwrOk",
      // OR: src: `${base}media/video/demo-reel.mp4`,
    },
  },
];
