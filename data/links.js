let data = [
  {
    url: 'https://www.cnn.com/',
    title: 'CNN',
    description:
      'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.',
  },
  {
    url: 'https://www.nytimes.com/',
    title: 'The New York Times',
    description:
      'The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.',
  },
  {
    url: 'https://www.bbc.com/news',
    title: 'BBC News',
    description:
      'Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
  },
  {
    url: 'https://www.amazon.com/',
    title:
      'Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more',
    description:
      "Free delivery on millions of items with Prime. Low prices across earth's biggest selection of books, music, DVDs, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else.",
  },
  {
    url: 'https://www.youtube.com/',
    title: 'YouTube',
    description:
      'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
  },
  {
    url: 'https://www.reddit.com/',
    title: 'reddit: the front page of the internet',
    description:
      "Reddit is a network of communities based on people's interests. Find communities you're interested in, and become part of an online community!",
  },
  {
    url: 'https://www.wikipedia.org/',
    title: 'Wikipedia',
    description:
      'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.',
  },
  {
    url: 'https://www.nike.com/',
    title: 'Nike. Just Do It. Nike.com',
    description:
      'Nike delivers innovative products, experiences and services to inspire athletes.',
  },
  {
    url: 'https://www.espn.com/',
    title: 'ESPN: Serving sports fans. Anytime. Anywhere.',
    description:
      'Visit ESPN to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.',
  },
  {
    url: 'https://www.netflix.com/',
    title: 'Netflix - Watch TV Shows Online, Watch Movies Online',
    description:
      'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  },
  {
    url: 'https://www.apple.com/',
    title: 'Apple',
    description:
      'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
  },
  {
    url: 'https://www.spotify.com/',
    title: 'Music for everyone. - Spotify',
    description: 'Spotify is a digital music service',
  },
  {
    url: 'https://www.instagram.com/',
    title: 'Instagram',
    description:
      'Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
  },
  {
    url: 'https://www.quora.com/',
    title: 'Quora - A place to share knowledge and better understand the world',
    description:
      "Quora is a place to gain and share knowledge. It's a platform to ask questions and connect with people who contribute unique insights and quality answers. This empowers people to learn from each other and to better understand the world.",
  },
  {
    url: 'https://www.bloomberg.com/',
    title: 'Bloomberg - Are you a robot?',
    description:
      'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
  },
  {
    url: 'https://www.etsy.com/',
    title:
      'Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone',
    description:
      'Find the perfect handmade gift, vintage & on-trend clothes, unique jewelry, and more… lots more.',
  },
  {
    url: 'https://www.ted.com/',
    title: 'TED: Ideas worth spreading',
    description:
      'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream and download.',
  },
  {
    url: 'https://www.imdb.com/',
    title:
      'IMDb: Ratings, Reviews, and Where to Watch the Best Movies & TV Shows',
    description:
      "IMDb is the world's most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows. Get personalized recommendations, and learn where to watch across hundreds of streaming providers.",
  },
  {
    url: 'https://www.huffpost.com/',
    title: 'HuffPost - Breaking News, U.S. and World News',
    description:
      'Read the latest headlines, news stories, and opinion from Politics, Entertainment, Life, Perspectives, and more.',
  },
  {
    url: 'https://www.tripadvisor.com/',
    title: 'Tripadvisor: Read Reviews, Compare Prices & Book',
    description:
      "World's largest travel platform. Browse hundreds of millions of traveler reviews and opinions. Compare low prices on hotels, flights, and cruises. Book popular tours and attractions as well as reserve tables at great restaurants.",
  },
  {
    url: 'https://www.zillow.com/',
    title: 'Zillow: Real Estate, Apartments, Mortgages & Home Values',
    description:
      'The leading real estate marketplace. Search millions of for-sale and rental listings, compare Zestimate® home values and connect with local professionals.',
  },
  {
    url: 'https://www.coursera.org/',
    title: 'Coursera | Build Skills with Online Courses from Top Institutions',
    description:
      'Join Coursera for free and learn online. Build skills with courses from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM. Advance your career with degrees, certificates, Specializations, &amp; MOOCs in data science, computer science, business, and dozens of other topics.',
  },
  {
    url: 'https://www.theverge.com/',
    title: 'The Verge',
    description:
      "The Verge was founded in 2011 in partnership with Vox Media, and covers the intersection of technology, science, art, and culture. Its mission is to offer in-depth reporting and long-form feature stories, breaking news coverage, product information, and community content in a unified and cohesive manner. The site is powered by Vox Media's Chorus platform, a modern media stack built for web-native news in the 21st century.",
  },
  {
    url: 'https://www.buzzfeed.com/',
    title: 'BuzzFeed',
    description:
      "BuzzFeed has breaking news, vital journalism, quizzes, videos, celeb news, Tasty food videos, recipes, DIY hacks, and all the trending buzz you'll want to share.",
  },
  {
    url: 'https://www.npr.org/',
    title:
      'NPR : National Public Radio : News & Analysis, World, US, Music & Arts : NPR',
    description:
      'NPR delivers breaking national and world news. Also top stories from business, politics, health, science, technology, music, arts and culture. Subscribe to podcasts and RSS feeds.',
  },
  {
    url: 'https://www.medium.com/',
    title: 'Medium – Where good ideas find you.',
    description:
      'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.',
  },
  {
    url: 'https://www.github.com/',
    title: "The world's leading software development platform · GitHub",
    description:
      'GitHub brings together the world’s largest community of developers to discover, share, and build better software. From open source projects to private team repositories, we’re your all-in-one platform for collaborative development.',
  },
];

export default data;
