
Action: file_editor create /app/frontend/src/pages/About.jsx --file-text "import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { aboutContent } from '../mock/data';
import { Plane, Camera, Map, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Plane,
      title: 'Authentic Experiences',
      description: 'I believe in immersing myself in local cultures and sharing genuine, unfiltered experiences.'
    },
    {
      icon: Camera,
      title: 'Visual Storytelling',
      description: 'Every photograph tells a story. I capture moments that evoke emotion and inspire wanderlust.'
    },
    {
      icon: Map,
      title: 'Sustainable Travel',
      description: 'Respecting local communities and minimizing environmental impact is at the heart of my travels.'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Detailed guides, honest reviews, and practical tips to help you plan your perfect adventure.'
    }
  ];

  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />

      {/* Hero Section */}
      <section className=\"pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white\">
        <div className=\"max-w-4xl mx-auto text-center\">
          <h1 className=\"text-5xl sm:text-6xl font-serif font-bold text-slate-900 mb-6\">
            {aboutContent.title}
          </h1>
          <p className=\"text-xl text-slate-600 leading-relaxed\">
            {aboutContent.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className=\"py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"grid grid-cols-2 md:grid-cols-4 gap-8\">
            {aboutContent.stats.map((stat, index) => (
              <div key={index} className=\"text-center\">
                <div className=\"text-4xl sm:text-5xl font-bold text-amber-400 mb-2\">
                  {stat.number}
                </div>
                <div className=\"text-slate-300 text-sm sm:text-base\">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8\">
        <div className=\"max-w-6xl mx-auto\">
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center\">
            {/* Image */}
            <div className=\"order-2 lg:order-1\">
              <div className=\"relative rounded-2xl overflow-hidden shadow-2xl\">
                <img
                  src={aboutContent.image}
                  alt=\"Travel blogger\"
                  className=\"w-full h-[600px] object-cover\"
                />
                <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent\"></div>
              </div>
            </div>

            {/* Content */}
            <div className=\"order-1 lg:order-2\">
              <h2 className=\"text-4xl font-serif font-bold text-slate-900 mb-6\">
                My Story
              </h2>
              <div className=\"prose prose-lg\">
                {aboutContent.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className=\"text-slate-600 mb-4 leading-relaxed\">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-slate-50\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"text-center mb-16\">
            <h2 className=\"text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4\">
              What I Stand For
            </h2>
            <p className=\"text-lg text-slate-600 max-w-2xl mx-auto\">
              These core values guide every journey and every story I share with you.
            </p>
          </div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">
            {values.map((value, index) => (
              <div 
                key={index}
                className=\"bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100\"
              >
                <div className=\"bg-amber-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6\">
                  <value.icon className=\"h-7 w-7 text-amber-600\" />
                </div>
                <h3 className=\"text-2xl font-semibold text-slate-900 mb-3\">
                  {value.title}
                </h3>
                <p className=\"text-slate-600 leading-relaxed\">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=\"py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 to-amber-700 text-white\">
        <div className=\"max-w-4xl mx-auto text-center\">
          <h2 className=\"text-4xl sm:text-5xl font-serif font-bold mb-6\">
            Let's Connect
          </h2>
          <p className=\"text-xl text-amber-100 mb-10 leading-relaxed\">
            Have questions about a destination? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you!
          </p>
          <a
            href=\"/contact\"
            className=\"inline-block bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg\"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
"
Observation: Create successful: /app/frontend/src/pages/About.jsx
