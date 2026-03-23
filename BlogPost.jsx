
Action: file_editor create /app/frontend/src/pages/BlogPost.jsx --file-text "import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { destinations } from '../mock/data';
import { Calendar, MapPin, ArrowLeft, Share2, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { DestinationCard } from '../components/DestinationCard';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const destination = destinations.find(d => d.id === parseInt(id));

  if (!destination) {
    return (
      <div className=\"min-h-screen bg-white flex items-center justify-center\">
        <div className=\"text-center\">
          <h2 className=\"text-2xl font-bold text-slate-900 mb-4\">Destination not found</h2>
          <Button onClick={() => navigate('/destinations')}>
            View All Destinations
          </Button>
        </div>
      </div>
    );
  }

  // Get related destinations (same category, excluding current)
  const relatedDestinations = destinations
    .filter(d => d.category === destination.category && d.id !== destination.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: destination.title,
        text: destination.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />

      {/* Hero Image Section */}
      <section className=\"relative h-[70vh] w-full overflow-hidden\">
        <img
          src={destination.image}
          alt={destination.title}
          className=\"w-full h-full object-cover\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent\"></div>
        
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant=\"outline\"
          className=\"absolute top-24 left-4 md:left-8 bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white\"
        >
          <ArrowLeft className=\"h-4 w-4 mr-2\" />
          Back
        </Button>

        {/* Title Overlay */}
        <div className=\"absolute bottom-0 left-0 right-0 p-8 md:p-12\">
          <div className=\"max-w-4xl mx-auto\">
            <Badge className=\"mb-4 bg-amber-600 hover:bg-amber-700 text-white border-0\">
              {destination.category}
            </Badge>
            <h1 className=\"text-4xl md:text-6xl font-serif font-bold text-white mb-4\">
              {destination.title}
            </h1>
            <div className=\"flex flex-wrap items-center gap-4 text-white/90\">
              <div className=\"flex items-center\">
                <MapPin className=\"h-5 w-5 mr-2\" />
                <span>{destination.country}</span>
              </div>
              <div className=\"flex items-center\">
                <Calendar className=\"h-5 w-5 mr-2\" />
                <span>{destination.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className=\"py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-100 sticky top-20 bg-white/95 backdrop-blur-md z-40\">
        <div className=\"max-w-4xl mx-auto flex items-center justify-between\">
          <div className=\"text-sm text-slate-600\">
            {destination.excerpt}
          </div>
          <div className=\"flex items-center gap-2\">
            <Button
              variant=\"outline\"
              size=\"sm\"
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={isBookmarked ? 'bg-amber-50 border-amber-600 text-amber-600' : ''}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant=\"outline\"
              size=\"sm\"
              onClick={handleShare}
            >
              <Share2 className=\"h-4 w-4 mr-2\" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className=\"py-12 px-4 sm:px-6 lg:px-8\">
        <div className=\"max-w-4xl mx-auto\">
          {/* Main Content */}
          <div 
            className=\"prose prose-lg max-w-none mb-12\"
            dangerouslySetInnerHTML={{ __html: destination.content }}
            style={{
              color: 'rgb(71, 85, 105)',
              lineHeight: '1.8'
            }}
          />

          {/* Photo Gallery */}
          <div className=\"my-16\">
            <h2 className=\"text-3xl font-serif font-bold text-slate-900 mb-8\">Photo Gallery</h2>
            
            {/* Main Gallery Image */}
            <div className=\"relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-4\">
              <img
                src={destination.gallery[currentImageIndex]}
                alt={`${destination.title} - Image ${currentImageIndex + 1}`}
                className=\"w-full h-full object-cover\"
              />
              
              {/* Navigation Arrows */}
              {destination.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className=\"absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200\"
                  >
                    <ChevronLeft className=\"h-6 w-6 text-slate-900\" />
                  </button>
                  <button
                    onClick={nextImage}
                    className=\"absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200\"
                  >
                    <ChevronRight className=\"h-6 w-6 text-slate-900\" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className=\"absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm\">
                {currentImageIndex + 1} / {destination.gallery.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className=\"grid grid-cols-3 gap-4\">
              {destination.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-32 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index 
                      ? 'ring-4 ring-amber-600 shadow-lg' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${destination.title} thumbnail ${index + 1}`}
                    className=\"w-full h-full object-cover\"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Location Map Info */}
          <div className=\"bg-slate-50 rounded-2xl p-8 my-12\">
            <h3 className=\"text-2xl font-semibold text-slate-900 mb-4\">Location</h3>
            <div className=\"flex items-start space-x-4\">
              <MapPin className=\"h-6 w-6 text-amber-600 mt-1\" />
              <div>
                <p className=\"text-slate-700 text-lg font-medium\">{destination.title}</p>
                <p className=\"text-slate-600\">{destination.country}</p>
                <p className=\"text-sm text-slate-500 mt-2\">
                  Coordinates: {destination.latitude}°, {destination.longitude}°
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className=\"py-16 px-4 sm:px-6 lg:px-8 bg-slate-50\">
          <div className=\"max-w-7xl mx-auto\">
            <h2 className=\"text-3xl font-serif font-bold text-slate-900 mb-8\">
              More {destination.category} Destinations
            </h2>
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {relatedDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
"
Observation: Create successful: /app/frontend/src/pages/BlogPost.jsx
