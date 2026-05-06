import { image } from "framer-motion/client";

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Bonjour!!",
  title: "Zeenath Sulthana Sivakumar",
  location: "Marketing | Brand Management | Storytelling",
  blurb:
  "I’ve always been curious about why some things just work and why others don’t and that curiosity has really shaped my journey. I started out in tech, but gradually found myself drawn to marketing and strategy, especially where data and creativity come together to create real impact. This space is a little window into that journey ideas I’ve explored, things I’ve built, and experiments I’m still figuring out. Have a look around, you might find something that sparks your interest! ",
    proPic: `${base}media/images/propic.jpg`,
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zeenath-sulthana-sivakumar-72845a171/" }
  ],
};

export const whoAmI = [
  {
    id: "about-1",
    title: "A marketer turning data patterns into brand stories that matter!",
    image: `${base}media/images/zee.JPG`,
    content:
    "Computer Science and Engineering felt like the obvious choice at first – tech was booming, AI was everywhere, and it made sense to be part of that wave. Somewhere along the way, it stopped being just a smart decision and turned into something genuinely fun: understanding how things work, breaking them, fixing them, and making them better. That curiosity pulled me toward data and digital products and eventually into a Product Analyst role at Bank of America. From the outside it looked like dashboards, CRM data and KPIs; on the inside it meant sitting between tech, marketing and operations, turning messy data into decisions people could actually use. Over time, the real pattern became clear: the most interesting part wasn’t the tools, it was the people behind them. Why users behave a certain way, why some ideas land and others don’t, why one strategy clicks and another completely misses. That curiosity is what pushed me deeper into the business and brand side. In 2025, that led to an MSc in Marketing Management at EDHEC and projects with brands like L’Oréal, Nespresso, Carrefour and Lacoste. Working with those teams showed just how much thought hides behind every ‘small’ decision. The main takeaway so far is simple: data alone isn’t enough. It has to be questioned, translated and turned into action. That overlap between tech, business and creativity is where the work feels most natural – connecting dots, making sense of things and helping shape decisions. Long term, the goal is just to keep getting better at that.",
    },
      {
    id: "about-ai",
    title: "Always chasing what’s next in tech",
    image: `${base}media/images/Creativity.png`,
    content:
    "I have fun keeping up with new technologies. Whenever something new comes out let it be AI tools, data products, platforms, or random productivity hacks, I’m that person who wants to try it, break it a bit, and see what it can actually do. I love understanding how it works under the hood, but even more, I like asking: okay, what does this change for people, for brands, for the way we work? That curiosity to fix things and make them better is what keeps pushing me beyond my “job description”. I’ve joined patent cluster programs, taken part in innovation summits, and contributed ideas that had to be both creative and realistic. It taught me how to balance big, bold ideas with real-world constraints. For me, tech is exciting because it never sits still and I like growing with it instead of watching from the side. " ,
  },
  {
    id: "about-2",
    title: "Travel, heritage and little stories everywhere",
    image: `${base}media/images/fest.png`,
    content:
   "I love exploring places that have stories built into them like old monuments, historic streets, heritage sites, even small towns that don’t show up on typical travel lists.I love beaches for their beautiful sunsets, and mountains for the quiet and the views. I really enjoy wandering through countryside areas and just seeing how people live day to day. I’m also obsessed with festivals and cultural experiences around the world. On my list: the Lantern Festival in Thailand, La Tomatina in Spain, Carnival in Rio de Janeiro, and Cherry Blossom season in Japan. For me, travel isn’t just about “ticking off” countries, it’s about understanding how people celebrate, remember, and create meaning in their lives." ,
  },  
  {
    id: "about-5",
    title: "ADVENTUROUS",
    image: `${base}media/images/adv.png`,
    content:
    "There’s definitely an ‘okay, this is slightly crazy but let’s do it anyway’ side to my personality. Ziplining, skydiving, trying new adventure parks, hiking tougher trails… I enjoy that little rush right before you step off the platform or jump. Those moments taught me how to manage fear, trust the process, and enjoy the experience instead of overthinking it. And honestly, that mindset spills into how I work too: I’m not afraid to test ideas, try something new, or take a calculated risk if I believe it can make things better " , 
},
  //,
  // {
  //   id: "about-6",
  //   title: "Anime",
  //   image: `${base}media/images/itachi.webp`,
  //   content:
  //     "Itachi Uchiha, from Naruto. Everyone needs to know this guy, and countless other characters and stories that you all are probably missing out. This style of visual entertainment has let artists express all the kinds of emotions to the fullest, something you cannot achieve in movies or though disney style animations. My favourites? Naruto, Anohana, jjk,Berserk, Kimi no nawa, Haikyu (List goes on again)"
  // }
];


export const projects = [
  {
    id: "vid-1",
    type: "video",
    title: "Alchime by YSL",
    year: "2025",
    thumbnail: `${base}media/images/alchime.png`,
      hook: "A fragrance collection that’s unique to your bond.",
    summary: "The unique scent of connection by YSL. A secret which you cant buy.",
    description: "What if you, your partner, your friend can create something that only both of you know the secret to? We introduce you Alchime by Yves Saint Laurent, a series of perfumes which is engineered specifically in a way that lets you combine any 2 perfumes together, and the result will produce a registered-named 3rd perfume which isnt available in any of the other bottles. Its unique. Its something that only both of you know the secret to!",
    video: {
      youtube:
        "https://www.youtube.com/watch?v=oaZb9m_RgBc",
      // OR: src: `${base}media/video/demo-reel.mp4`,
    },
  },
    {
    id: "Future Retail Challenge 2026: John Lewis & Partners",
    type: "pdf",
    title: "John Lewis: Reimagine the future of retail 2030",
    year: "2026",
    thumbnail: `${base}media/images/Frc.png`,
      hook: "The future of retail is built on real trends.",
    summary:
      "Turning retail pain points into seamless, AI-powered shopping experiences.",
    description: "Today’s retail trend is clearly moving towards hyper-personalisation, seamless omnichannel experiences, and faster, frictionless shopping journeys, but customers in stores like John Lewis still face pain points like difficulty finding products, stock inconsistencies, and long checkout queues. This project looks at how these gaps affect the overall experience despite rising expectations shaped by AI-driven digital platforms. To address this, it proposes an AI-powered retail ecosystem that uses real-time data to improve inventory availability and offers personalised recommendations, smart in-store navigation, and smoother checkout. In line with current retail innovation trends, it transforms the store into a more intelligent, responsive, and customer-centric environment.",
    pdf: `${base}media/pdf/Future Retail Challenge.pdf`,
  },
    {
    id: "vid-2",
    type: "video",
    title: "Nespresso - Thankyou Mom.",
    year: "2026",
    thumbnail: `${base}media/images/nestle.png`,
        hook: "A thank you, turned into a daily ritual.",
    summary: "Nespresso thanks each and every mother for all their untold and unrewarded efforts.",
    description: "Nestle's Nespresso never had a specific emotional connection with its customers. Just plain old random adrenaline videos surrounding coffee. But what if a cup of coffee meant something much more?",
    video: {
      youtube:
        "https://www.youtube.com/watch?v=TvGvWOVwrOk",
      // OR: src: `${base}media/video/demo-reel.mp4`,
    },
  },
    {
    id: "Carrefour Challenge",
    type: "pdf",
    title: "Carrefour is right here when you need it",
    year: "2026",
    thumbnail: `${base}media/images/car2.png`,
      hook: "Next‑gen shopping: the future of grocery is instant.",
    summary:
      "Turning retail pain points into seamless, AI-powered shopping experiences.",
    description: " This idea turns Carrefour into more than just a store it becomes a smart shopping companion that shows up exactly when you need it. By using geolocation and personalized push notifications, it blends online convenience with real-world proximity to nudge customers at the right time, place, and moment. The result? More spontaneous visits, higher engagement, and a shopping experience that feels intuitive, relevant, and almost a step ahead of the customer ",
    pdf: `${base}media/pdf/CARREFOUR PRESENTATION.pdf`,
  },
];



export const awards = [
  {
    id: "award-1",
    title: "Gold, Silver & Bronze Awards",
    issuer: "Bank of America",
    year: "2022–2025",
    thumbnail: `${base}media/images/gsb.jpg`,
    summary:
      "Multiple recognitions for innovation, delivery, and going beyond the day job.",
    description:
      "Across three years at Bank of America I picked up a mix of gold, silver and bronze awards for work on merchant services. Most of it came from spotting gaps in journeys, turning data into simple stories, and pushing ideas through to launch instead of just leaving them in a slide deck.",
    pdf: `${base}media/pdf/gsb.pdf`,
  },
  {
    id: "award-2",
    title: "Carrefour Challenge Finalist",
    issuer: "World Retail Congress / EDHEC",
    year: "2026",
    thumbnail: `${base}media/images/carr.jpg`,
    summary:
      "Finalist in carrefour challenge on the future of grocery and omnichannel.",
    description:
      "Worked with a team to imagine how Carrefour could serve tomorrow’s shoppers better. We dug into how people buy groceries across markets and turned those insights into ideas for smarter assortments, smoother omnichannel journeys, and more fun, experience-led stores.",
      link: "https://www.linkedin.com/posts/zeenath-sulthana-sivakumar-72845a171_carrefourchallenge-edhec-learningbydoing-ugcPost-7414441631896162304-3tj6",
    imageOnly: true,
    },
  {
    id: "award-3",
    title: "L'Oréal Brandstorm Challenge Finalist",
    issuer: "L'Oréal",
    year: "2025",
    thumbnail: `${base}media/images/brandstrom.png`,
    summary:
      "Finalist in a global innovation challenge for L'Oréal Brandstrom.",
    description:
      "Co‑created a concept that mixed beauty, tech and new usage moments for younger consumers. It was a chance to play inside the L'Oréal universe blending brand storytelling, insight work and concrete activation ideas instead of just talking theory.",
      link: "https://www.linkedin.com/posts/zeenath-sulthana-sivakumar-72845a171_innovation-luxuryfragrance-brandstorm-ugcPost-7436857205473226752-1ge0",
    imageOnly: true,
    },
  {
  id: "award-lvmh",
  title: "Inside LVMH Certificate",
  issuer: "LVMH",
  year: "2023",
  thumbnail: `${base}media/images/lvmh.jpeg`,
  summary: "Completed Inside LVMH, exploring how luxury brands are built from the inside.",
  description:
    "Went through Inside LVMH to understand how the group thinks about heritage, innovation, and brand equity. It was a nice bridge between my interest in marketing and my curiosity about how luxury really works behind the scenes.",
  pdf: `${base}media/pdf/lvmh.pdf`,
},
  {
    id: "award-4",
    title: "Smart India Hackathon Winner",
    issuer: "Smart India Hackathon",
    year: "2021",
    thumbnail: `${base}media/pdf/sih.pdf`,
    summary:
      "National-level hackathon win for an applied tech solution.",
    description:
      "Our team built a working prototype to solve a real-world problem for an Indian organisation. It was long nights, a lot of debugging, and a big lesson in how quickly you can move when everyone is obsessed with getting a useful solution out the door.",
    pdf: `${base}media/pdf/sih.pdf`,
  },
  {
    id: "award-5",
    title: "CompTIA Security+ Certified",
    issuer: "CompTIA",
    year: "2022",
    thumbnail: `${base}media/pdf/comptia.pdf`,
    summary:
      "Global certification in core cybersecurity concepts and best practices.",
    description:
      "Earned the CompTIA Security+ certification to ground my interest in cybersecurity in solid fundamentals. It gave me the vocabulary and structure to better understand risks, controls, and why security has to be baked into products from day one.",
    pdf: `${base}media/pdf/comptia.pdf`,
  },
];

export const experiences = [
  {
    id: "bofa",
    company: "Bank of America",
    logo: `${base}media/images/bofapng.png`,
    role: "Product Analyst",
    location: "Chennai, India",
    start: "Apr 2022",
    end: "Jun 2025",
    description:
     "Bank of America is one of the biggest global banks, so the scale of everything we worked on was huge. I was part of the Merchant Services team, working on digital products that help businesses get paid smoothly from onboarding and verification flows to payment journeys and merchant experience. A typical week for me was a mix of analysing data from dashboards, tracking product and marketing KPIs, digging into where users dropped off, and turning those findings into clear next steps for the teams. I worked closely with product, tech, risk and operations, so I got used to switching between “business language” and “tech language” depending on the room I was in. ",
  },
  {
    id: "hebesec",
    company: "Hebesec Technologies",
    logo: `${base}media/images/hbs.jpg`,
    role: "Marketing & Product Intern",
    location: "Chennai, India",
    start: "Sept 2021",
    end: "Aug 2022",
    description:
      "Hebesec is a cybersecurity and SaaS startup helping businesses protect themselves from digital threats. I joined when they were starting to think about international markets, so things were moving fast. My work was mostly around understanding new markets, what different countries care about when it comes to cybersecurity, which industries are more sensitive, and where the real opportunities were. I worked on segmentation, simple personas, and helping shape how we spoke to different regions so it didn’t feel generic or copied. It was my first real exposure to how much strategy changes when you move across geographies and how small tweaks in positioning can completely change how a product is received.",
  },
  {
    id: "frc-jlp",
    company: "Future Retail Challenge 2026 – John Lewis & Partners",
    logo: `${base}media/images/John_Lewis_&_Partners.png`,
    role: "Student Consultant",
    location: "Lille, France",
    start: "Jan 2026",
    end: "Apr 2026",
    description:
      "John Lewis & Partners is a major UK retail brand known for its department stores and strong customer experience focus. As part of EDHEC’s team for the World Retail Congress Future Retail Challenge, I worked on rethinking what the brand could look like in 2030. The idea was to move it from a traditional retail store to something more experience-driven and relevant for younger shoppers. I focused mainly on customer journeys and storytelling; taking research, trends, and insights and turning them into a clear narrative that explained how digital, services, and in-store experiences could come together" ,
  }
  // add more...
];
