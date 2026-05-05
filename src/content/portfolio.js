const base = import.meta.env.BASE_URL;

export const profile = {
  name: "C'est Moi!",
  title: "Zeenath Sulthana Sivakumar",
  location: "Marketing | Brand Management | Storytelling",
  blurb:
    "I enjoy figuring out why things work and why they don’t. With a background in technology and a growing focus on marketing and strategy, I like building ideas that sit at the intersection of data, creativity, and real business impact. This space is a collection of my work, thoughts, and experiments. Take a look around!",
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
    "I picked Computer Science and Engineering because it felt like the obvious choice, technology was booming, AI was everywhere, and it just made sense to be part of it. But somewhere along the way, it stopped being just a “smart decision” and became something I genuinely enjoyed. I liked figuring out how things worked, breaking them, fixing them, and making them better, That naturally pulled me toward data and digital products and eventually to Bank of America, where I worked as a Product Analyst. My role looked pretty structured from the outside: dashboards, CRM data, KPIs, go-to-market plans. But in reality, I was right in the middle of everything talking to tech teams, aligning with marketing, understanding operations, and trying to turn messy data into something people could actually use. And that’s where I noticed a pattern. The part I enjoyed most wasn’t just building or analyzing it was understanding people. Why users behave a certain way. Why some ideas work and others don’t. Why one strategy clicks and another just… doesn’t. That’s what pushed me to explore the business side more seriously. So in 2025, I joined EDHEC Business School for an MSc in Marketing Management. Since then, I’ve worked on projects with brands like L’Oréal, Nespresso, Carrefour, and Lacoste which honestly just made things more interesting. You start seeing how much thought goes into even the smallest decisions. What I’ve learned through all of this is simple: data is useful, but it’s not enough. You need to understand it, question it, and explain it in a way that actually drives action. That’s the kind of work I enjoy. Being in that space where tech, business, and creativity overlap connecting dots, making sense of things, and helping shape decisions. Long term? I just want to get really good at that."  },
  {
    id: "about-ai",
    title: "What do I think about AI?",
    image: `${base}media/images/CCG.webp`,
    content:
      "From 2019 to today (2026), take it from someone who started with AI when there was no chatgpt or any gen-AI, just plain old regression and prediction models, and neural networks; AI has grown exponentially big. Me and my friends would discuss how AI will actually be in the future 5 years, and trust me when I say this: Today's scenario is eerily close to what we imagined/predicted back in 2019. AI has become a part of our daily lives, whether you accept it or not. Even our universities and workplaces are encouraging the use of AI, do you see how sticky it has become? Thats the biggest achievement any product can make, its becoming sticky. Being sticky refers to something becoming a part of so many things and processes that you can no more avoid using it. Its in your life already. I personally believe that AI is a part of our evolution. If you havent noticed it already, our attention span, as well as mental calculation/creativity/imagination has reduced quite a bit. We often find ourselves offloading a lot of these tasks to AI, you just take your phone out and use your favorite AI's mobile app for almost everything. Am I against it? Nope. But you gotta make sure that with AI, you are better, faster and more productive. So if you are still not there yet, jump onto the train as fast as you can, because everyone else around you is there. "
  },
  {
    id: "about-2",
    title: "I love Football",
    image: `${base}media/images/football.png`,
    content:
      "Football has shaped at least 30-40% of my personality. It has taught me perseverance and discipline: virtues which I believe are insanely important. Just like a lot of other people in the world, football to me is way bigger than just a game. Its an emotion itself. Favorite teams? Real Madrid and PSG, Portugal and France. But hey, every team and every player is amazing."
  }
  ,
  {
    id: "about-5",
    title: "GAMING",
    image: `${base}media/images/pop.webp`,
    content:
      "Got my first PC when I was 11 or 12, and yeah some how my very first game was Prince of Persia: Warrior Within and guys, believe me when I say this. NO GAME TILL TODAY'S DATE HAS COME CLOSE TO THE EXPERIENCE THE 11 YEAR OLD ME HAD. Even for todays date, the graphics, the motion physics of this game is insane. Perfectly engineered game, UBISOFT has mastered the art of creating RPG games. Yeah, Fromsoft also has been doing amazing. Loved playing Sekiro: shadows die twice and ofcourse, Elden ring. Cant wait to see what these two companies will bring next!"
  },
  {
    id: "about-3",
    title: "F1: Loved AMG even before they became popular!",
    image: `${base}media/images/merc.webp`,
    content:
      "Since childhood, I always loved Mercedes. I remember seeing a mercedes and asking my dad what car it is. He said mercedes. It took the kid me 2 days to learn the pronounciation, and it has been on my mind ever since. My favourite car brand and my favorite F1 team."
  },
  {
    id: "about-4",
    title: "MUSIC et EDM",
    image: `${base}media/images/mg.jpg`,
    content:
      "For the longest time, I wanted to become a Dj. Heard Martin Garrix in teenages and suddenly had shift a in my personality, I still Dj whenver I get the chance to. Favourite genres? Bass House, Big room, techno. Fav EDM artists: Garrix, Vluarr, Knock2, Illenium,Rezz. Favourite singers/Bands? Evanescence, Linkin Park, Charlie Puth, Ariana Grande, Motionless in White, Paramore, Juice wrld, Mitraz, Maroon5, Yungblud (The list wont ever stop so imma stop here)"
  }
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
    summary: "Nespresso thanks each and every mother for all their untold and unrewarded efforts.",
    description: "Nestle's Nespresso never had a specific emotional connection with its customers. Just plain old random adrenaline videos surrounding coffee. But what if a cup of coffee meant something much more?",
    video: {
      youtube:
        "https://www.youtube.com/watch?v=TvGvWOVwrOk",
      // OR: src: `${base}media/video/demo-reel.mp4`,
    },
  }
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
    thumbnail: `${base}media/images/carrefour.png`,
    summary:
      "Finalist in carrefour challenge on the future of grocery and omnichannel.",
    description:
      "Worked with a team to imagine how Carrefour could serve tomorrow’s shoppers better. We dug into how people buy groceries across markets and turned those insights into ideas for smarter assortments, smoother omnichannel journeys, and more fun, experience-led stores.",
         link: "https://www.linkedin.com/posts/zeenath-sulthana-sivakumar-72845a171_carrefourchallenge-edhec-learningbydoing-ugcPost-7414441631896162304-3tj6",
  },
  {
    id: "award-3",
    title: "L'Oréal Brandstorm / Challenge Finalist",
    issuer: "L'Oréal",
    year: "2025",
    thumbnail: `${base}media/images/Loreal.jpg`,
    summary:
      "Finalist in a global innovation challenge for L'Oréal Brandstrom.",
    description:
      "Co‑created a concept that mixed beauty, tech and new usage moments for younger consumers. It was a chance to play inside the L'Oréal universe—blending brand storytelling, insight work and concrete activation ideas instead of just talking theory.",
     link: "https://www.linkedin.com/posts/zeenath-sulthana-sivakumar-72845a171_innovation-luxuryfragrance-brandstorm-ugcPost-7436857205473226752-1ge0",
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
    logo: `${base}media/images/Bank-of-America-logo.png`,
    role: "Product Analyst",
    location: "Chennai, India",
    start: "Apr 2022",
    end: "Jun 2025",
    description:
      "Bank of America is one of the biggest banks in the world, serving millions of customers across payments, banking, and financial services. I was part of the Merchant Services team in Chennai, working on products that help businesses actually get paid—things like onboarding flows, payment journeys, and merchant experience. My day-to-day was a mix of product + marketing analysis—digging into dashboards, tracking KPIs, and figuring out where users were dropping off and why. But what made it really interesting was getting pulled into innovation programs and patent clustering work. I got to pitch ideas around improving onboarding and risk scoring, and a few of them were even shortlisted internally. That’s when I started thinking less like “just an analyst” and more like someone owning the product end-to-end.",
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
      "Hebesec is a cybersecurity and SaaS startup helping businesses protect themselves from digital threats. I joined when they were starting to think about international markets, so things were moving fast. My work was mostly around understanding new markets—what different countries care about when it comes to cybersecurity, which industries are more sensitive, and where the real opportunities were. I worked on segmentation, simple personas, and helping shape how we spoke to different regions so it didn’t feel generic or copied. It was my first real exposure to how much strategy changes when you move across geographies—and how small tweaks in positioning can completely change how a product is received.",
  },
  {
    id: "frc-jlp",
    company: "Future Retail Challenge 2026 – John Lewis & Partners",
    logo: `${base}media/images/wrc.png`,
    role: "Student Consultant",
    location: "Lille, France",
    start: "Jan 2026",
    end: "Apr 2026",
    description:
      "John Lewis & Partners is a major UK retail brand known for its department stores and strong customer experience focus. As part of EDHEC’s team for the World Retail Congress Future Retail Challenge, I worked on rethinking what the brand could look like in 2030. The idea was to move it from a traditional retail store to something more experience-driven and relevant for younger shoppers. I focused mainly on customer journeys and storytelling—taking research, trends, and insights and turning them into a clear narrative that explained how digital, services, and in-store experiences could come together. It was a lot about simplifying complex ideas so they actually stick with people.",
  },
  // add more...
];
