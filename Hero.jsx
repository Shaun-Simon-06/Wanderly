
Action: file_editor create /app/frontend/src/components/Hero.jsx --file-text "import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className=\"relative h-screen w-full overflow-hidden\">
      {/* Background Image with Overlay */}
      <div className=\"absolute inset-0\">
        <img
          src=\"https://images.unsplash.com/photo-1649147391870-a170da925530\"
          alt=\"Travel destination\"
          className=\"w-full h-full object-cover\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70\"></div>
      </div>

      {/* Content */}
      <div className=\"relative h-full flex items-center justify-center\">
        <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">
          {/* Tag */}
          <div className=\"inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20\">
            <MapPin className=\"h-4 w-4 text-amber-400\" />
            <span className=\"text-white text-sm font-medium\">Discover Your Next Adventure</span>
          </div>

          {/* Main Heading */}
          <h1 className=\"text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight\">
            Explore the World with
            <span className=\"block text-amber-400 mt-2\">Wanderlust Chronicles</span>
          </h1>

          {/* Description */}
          <p className=\"text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed\">
            Journey through breathtaking destinations, immerse yourself in diverse cultures, 
            and discover stories that inspire your next adventure.
          </p>

          {/* CTA Buttons */}
          <div className=\"flex flex-col sm:flex-row items-center justify-center gap-4\">
            <Button
              onClick={() => navigate('/destinations')}
              size=\"lg\"
              className=\"bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg group\"
            >
              Explore Destinations
              <ArrowRight className=\"ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200\" />
            </Button>
            <Button
              onClick={() => navigate('/about')}
              size=\"lg\"
              variant=\"outline\"
              className=\"border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg backdrop-blur-sm\"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className=\"absolute bottom-8 left-1/2 transform -translate-x-1/2\">
            <div className=\"flex flex-col items-center space-y-2 animate-bounce\">
              <span className=\"text-white text-sm\">Scroll to explore</span>
              <div className=\"w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2\">
                <div className=\"w-1 h-3 bg-white rounded-full\"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
"
Observation: Create successful: /app/frontend/src/components/Hero.jsx
