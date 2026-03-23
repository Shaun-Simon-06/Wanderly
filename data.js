Now I'll create the elegant travel blog frontend with mock data:
Action: file_editor create /app/frontend/src/mock/data.js --file-text "// Mock data for Travel Blog
export const destinations = [
  {
    id: 1,
    title: \"Santorini, Greece\",
    country: \"Greece\",
    category: \"Beach\",
    image: \"https://images.unsplash.com/photo-1554366347-897a5113f6ab\",
    description: \"Experience the iconic white-washed buildings and stunning sunsets of this Greek paradise.\",
    excerpt: \"Santorini is a dream destination with its blue-domed churches, crystal-clear waters, and breathtaking caldera views.\",
    latitude: 36.3932,
    longitude: 25.4615,
    date: \"March 15, 2024\",
    featured: true,
    gallery: [
      \"https://images.unsplash.com/photo-1554366347-897a5113f6ab\",
      \"https://images.unsplash.com/photo-1606944331341-72bf6523ff5e\",
      \"https://images.unsplash.com/photo-1585278596402-440e1f9b40d2\"
    ],
    content: `
      <h2>A Journey to Paradise</h2>
      <p>Santorini exceeded all expectations. From the moment I arrived, I was captivated by the stunning views of the Aegean Sea and the iconic architecture that makes this island so distinctive.</p>
      
      <h3>The Caldera Views</h3>
      <p>Watching the sunset from Oia is a must-do experience. The sky transforms into a canvas of oranges, pinks, and purples as the sun dips below the horizon. It's no wonder this is one of the most photographed sunsets in the world.</p>
      
      <h3>Local Cuisine</h3>
      <p>The food in Santorini is incredible. Fresh seafood, Greek salads with local tomatoes, and the famous Santorini wine made from grapes grown in volcanic soil. Each meal was a celebration of Mediterranean flavors.</p>
      
      <h3>Hidden Gems</h3>
      <p>Beyond the popular spots, I discovered quiet beaches with black volcanic sand, charming local tavernas, and winding paths that led to breathtaking viewpoints. Santorini is a place that rewards exploration.</p>
    `
  },
  {
    id: 2,
    title: \"Positano, Italy\",
    country: \"Italy\",
    category: \"Coastal\",
    image: \"https://images.pexels.com/photos/36478165/pexels-photo-36478165.jpeg\",
    description: \"The jewel of the Amalfi Coast with colorful cliffside villages and Mediterranean charm.\",
    excerpt: \"Positano's cascading pastel houses and stunning coastal views make it one of Italy's most romantic destinations.\",
    latitude: 40.6280,
    longitude: 14.4850,
    date: \"April 22, 2024\",
    featured: true,
    gallery: [
      \"https://images.pexels.com/photos/36478165/pexels-photo-36478165.jpeg\",
      \"https://images.unsplash.com/photo-1589126195846-63c385f76468\",
      \"https://images.unsplash.com/photo-1594661745200-810105bcf054\"
    ],
    content: `
      <h2>La Dolce Vita on the Amalfi Coast</h2>
      <p>Positano is the epitome of Italian coastal elegance. This vertical village, with its buildings stacked like a colorful wedding cake against the cliffside, offers some of the most stunning views in all of Italy.</p>
      
      <h3>The Beach Life</h3>
      <p>Spiaggia Grande, the main beach, is the heart of Positano. Rent a sunbed, sip on limoncello, and watch the boats bobbing in the turquoise water. The beach clubs here offer exceptional service and cuisine right on the sand.</p>
      
      <h3>Shopping & Wandering</h3>
      <p>The narrow streets are lined with boutiques selling handmade sandals, linen clothing, and local ceramics. Getting lost in these winding alleys, with glimpses of the sea at every turn, is part of Positano's magic.</p>
      
      <h3>Culinary Delights</h3>
      <p>From fresh pasta with local seafood to the famous lemon desserts, Positano's restaurants showcase the best of Campanian cuisine. Don't miss trying the local specialty - spaghetti alle vongole.</p>
    `
  },
  {
    id: 3,
    title: \"New York City, USA\",
    country: \"USA\",
    category: \"Urban\",
    image: \"https://images.unsplash.com/photo-1605130284535-11dd9eedc58a\",
    description: \"The city that never sleeps - iconic skylines, world-class museums, and endless energy.\",
    excerpt: \"From Central Park to Times Square, NYC offers an unparalleled urban adventure with something for everyone.\",
    latitude: 40.7128,
    longitude: -74.0060,
    date: \"May 10, 2024\",
    featured: true,
    gallery: [
      \"https://images.unsplash.com/photo-1605130284535-11dd9eedc58a\",
      \"https://images.unsplash.com/photo-1606944331341-72bf6523ff5e\",
      \"https://images.unsplash.com/photo-1554366347-897a5113f6ab\"
    ],
    content: `
      <h2>The Pulse of America</h2>
      <p>New York City is unlike anywhere else on Earth. The energy is palpable from the moment you step onto the streets. This concrete jungle has a rhythm all its own, and it's intoxicating.</p>
      
      <h3>Iconic Landmarks</h3>
      <p>Visiting the Statue of Liberty, walking across the Brooklyn Bridge at sunset, and seeing the city from the Top of the Rock - these experiences are quintessentially New York and absolutely unmissable.</p>
      
      <h3>Cultural Riches</h3>
      <p>The Metropolitan Museum of Art, MoMA, and countless other world-class museums offer enough art and culture to keep you busy for months. Broadway shows provide entertainment that's truly world-class.</p>
      
      <h3>The Food Scene</h3>
      <p>From dollar pizza slices to Michelin-starred restaurants, NYC's food scene is as diverse as its population. Every neighborhood offers distinct culinary experiences that reflect the city's incredible cultural tapestry.</p>
    `
  },
  {
    id: 4,
    title: \"Kyoto, Japan\",
    country: \"Japan\",
    category: \"Cultural\",
    image: \"https://images.unsplash.com/photo-1589126195846-63c385f76468\",
    description: \"Ancient temples, serene gardens, and traditional geisha culture in Japan's cultural heart.\",
    excerpt: \"Kyoto preserves Japan's rich heritage with thousands of temples, traditional tea houses, and stunning gardens.\",
    latitude: 35.0116,
    longitude: 135.7681,
    date: \"February 8, 2024\",
    featured: false,
    gallery: [
      \"https://images.unsplash.com/photo-1589126195846-63c385f76468\",
      \"https://images.unsplash.com/photo-1554366347-897a5113f6ab\",
      \"https://images.unsplash.com/photo-1606944331341-72bf6523ff5e\"
    ],
    content: `
      <h2>Timeless Beauty and Tradition</h2>
      <p>Kyoto is where Japan's ancient soul lives on. With over 2,000 temples and shrines, this city offers a glimpse into Japan's rich cultural heritage that has been preserved for centuries.</p>
      
      <h3>Temple Hopping</h3>
      <p>The golden Kinkaku-ji, the thousands of red torii gates at Fushimi Inari, and the peaceful Zen gardens of Ryoan-ji - each temple offers a unique spiritual experience and architectural marvel.</p>
      
      <h3>Cherry Blossom Season</h3>
      <p>Visiting during sakura season is magical. The Philosopher's Path becomes a tunnel of pink blossoms, and locals and tourists alike gather for hanami parties beneath the flowering trees.</p>
    `
  },
  {
    id: 5,
    title: \"Bali, Indonesia\",
    country: \"Indonesia\",
    category: \"Beach\",
    image: \"https://images.unsplash.com/photo-1594661745200-810105bcf054\",
    description: \"Tropical paradise with lush rice terraces, ancient temples, and world-class surf beaches.\",
    excerpt: \"Bali combines spiritual culture, natural beauty, and warm hospitality in an island paradise.\",
    latitude: -8.3405,
    longitude: 115.0920,
    date: \"January 18, 2024\",
    featured: false,
    gallery: [
      \"https://images.unsplash.com/photo-1594661745200-810105bcf054\",
      \"https://images.unsplash.com/photo-1585278596402-440e1f9b40d2\",
      \"https://images.unsplash.com/photo-1554366347-897a5113f6ab\"
    ],
    content: `
      <h2>Island of the Gods</h2>
      <p>Bali is more than just beaches - it's a spiritual journey through lush landscapes, ancient traditions, and warm Balinese hospitality that touches your soul.</p>
      
      <h3>Rice Terraces & Nature</h3>
      <p>The Tegalalang rice terraces are a testament to centuries of agricultural artistry. Walking through these emerald-green landscapes, with coconut palms swaying in the breeze, is pure tranquility.</p>
      
      <h3>Spiritual Heart</h3>
      <p>From the sea temple of Tanah Lot to the mountain sanctuary of Besakih, Bali's temples are active places of worship that welcome respectful visitors to witness daily ceremonies and offerings.</p>
    `
  },
  {
    id: 6,
    title: \"Paris, France\",
    country: \"France\",
    category: \"Urban\",
    image: \"https://images.unsplash.com/photo-1606944331341-72bf6523ff5e\",
    description: \"The City of Light - romance, art, fashion, and extraordinary cuisine at every corner.\",
    excerpt: \"Paris captivates with its elegant boulevards, world-renowned museums, and timeless charm.\",
    latitude: 48.8566,
    longitude: 2.3522,
    date: \"June 5, 2024\",
    featured: false,
    gallery: [
      \"https://images.unsplash.com/photo-1606944331341-72bf6523ff5e\",
      \"https://images.pexels.com/photos/36478165/pexels-photo-36478165.jpeg\",
      \"https://images.unsplash.com/photo-1589126195846-63c385f76468\"
    ],
    content: `
      <h2>Eternal Romance</h2>
      <p>Paris is a city that needs no introduction. From the Eiffel Tower to the Louvre, from sidewalk cafés to the Seine, every corner exudes elegance and history.</p>
      
      <h3>Artistic Treasures</h3>
      <p>The Louvre, Musée d'Orsay, and countless galleries house some of humanity's greatest artistic achievements. You could spend weeks exploring Paris's museums and still only scratch the surface.</p>
      
      <h3>Parisian Life</h3>
      <p>The true magic of Paris is in the simple pleasures - a croissant at a corner boulangerie, an evening stroll along the Seine, watching the world go by from a café terrace.</p>
    `
  }
];

export const categories = [\"All\", \"Beach\", \"Urban\", \"Cultural\", \"Coastal\", \"Mountain\", \"Adventure\"];

export const aboutContent = {
  title: \"Wanderlust Chronicles\",
  subtitle: \"Exploring the world, one destination at a time\",
  bio: `Hello! I'm a passionate traveler who believes that the world is a book, and those who don't travel read only one page. For the past decade, I've been exploring diverse cultures, tasting exotic cuisines, and collecting stories from every corner of the globe.

  My journey began with a solo backpacking trip through Southeast Asia, and since then, I've been fortunate enough to visit over 50 countries across six continents. From the bustling streets of Tokyo to the serene beaches of the Maldives, from the historical sites of Rome to the vibrant markets of Marrakech - each destination has left an indelible mark on my soul.

  Through this blog, I share not just the beautiful photos and travel guides, but the deeper connections I've made, the lessons I've learned, and the transformative power of stepping outside your comfort zone. Travel isn't just about the places you visit; it's about the person you become along the way.

  Join me on this journey as we explore hidden gems, discover local cultures, and find beauty in the unexpected. Whether you're a seasoned traveler or planning your first adventure, I hope to inspire you to see the world with curious eyes and an open heart.`,
  image: \"https://images.pexels.com/photos/3885535/pexels-photo-3885535.jpeg\",
  stats: [
    { number: \"50+\", label: \"Countries Visited\" },
    { number: \"200+\", label: \"Cities Explored\" },
    { number: \"10+\", label: \"Years Traveling\" },
    { number: \"1000+\", label: \"Memories Made\" }
  ]
};

export const contactInfo = {
  email: \"hello@wanderlustchronicles.com\",
  social: {
    instagram: \"https://instagram.com/wanderlustchronicles\",
    youtube: \"https://youtube.com\",
    twitter: \"https://twitter.com/wanderlustchron\",
    facebook: \"https://facebook.com/wanderlustchronicles\"
  }
};
"
Observation: Create successful: /app/frontend/src/mock/data.js
