
Action: file_editor create /app/frontend/src/pages/Home.jsx --file-text "import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { DestinationCard } from '../components/DestinationCard';
import { InteractiveMap } from '../components/InteractiveMap';
import { destinations } from '../mock/data';
import { Globe, Camera, Map, Heart } from 'lucide-react';

const Home = () => {
  const featuredDestinations = destinations.filter(d => d.featured);

  const features = [
    {
      icon: Globe,
      title: 'Discover Hidden Gems',
      description: 'Explore off-the-beaten-path destinations and uncover the world\'s best-kept secrets.'
    },
    {
      icon: Camera,
      title: 'Stunning Photography',
      description: 'Immerse yourself in breathtaking visuals that capture the essence of each destination.'
    },
    {
      icon: Map,
      title: 'Detailed Guides',
      description: 'Get comprehensive travel guides with insider tips and local recommendations.'
    },
    {
      icon: Heart,
      title: 'Authentic Stories',
      description: 'Read genuine experiences and heartfelt stories from real adventures around the globe.'
    }
  ];

  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-slate-50\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4\">
              Why Travel With Us
            </h2>
            <p className=\"text-lg text-slate-600 max-w-2xl mx-auto\">
              Every journey is an opportunity to grow, learn, and create memories that last a lifetime.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\">
            {features.map((feature, index) => (
              <div 
                key={index}
                className=\"bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100\"
              >
                <div className=\"bg-amber-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6\">
                  <feature.icon className=\"h-7 w-7 text-amber-600\" />
                </div>
                <h3 className=\"text-xl font-semibold text-slate-900 mb-3\">
                  {feature.title}
                </h3>
                <p className=\"text-slate-600 leading-relaxed\">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4\">
              Featured Destinations
            </h2>
            <p className=\"text-lg text-slate-600 max-w-2xl mx-auto\">
              Discover our handpicked selection of extraordinary places that will ignite your wanderlust.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className=\"text-center\">
            <a
              href=\"/destinations\"
              className=\"inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl\"
            >
              View All Destinations
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-slate-50\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"text-center mb-12\">
            <h2 className=\"text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4\">
              Explore the Map
            </h2>
            <p className=\"text-lg text-slate-600 max-w-2xl mx-auto\">
              Follow my journey across the globe. Hover over markers to see where I've been.
            </p>
          </div>

          <InteractiveMap destinations={destinations} />
        </div>
      </section>

      {/* CTA Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden\">
        {/* Decorative elements */}
        <div className=\"absolute inset-0 opacity-10\">
          <div className=\"absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl\"></div>
          <div className=\"absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl\"></div>
        </div>

        <div className=\"max-w-4xl mx-auto text-center relative z-10\">
          <h2 className=\"text-4xl sm:text-5xl font-serif font-bold mb-6\">
            Ready to Start Your Journey?
          </h2>
          <p className=\"text-xl text-slate-300 mb-10 leading-relaxed\">
            Join our community of travelers and get inspired to explore the world. 
            Subscribe for travel tips, destination guides, and exclusive stories.
          </p>
          <div className=\"flex flex-col sm:flex-row items-center justify-center gap-4\">
            <input
              type=\"email\"
              placeholder=\"Enter your email\"
              className=\"px-6 py-4 rounded-lg w-full sm:w-96 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500\"
            />
            <button className=\"px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 w-full sm:w-auto shadow-lg\">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
"
Observation: Create successful: /app/frontend/src/pages/Home.jsx
