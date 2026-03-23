
Action: file_editor create /app/frontend/src/components/DestinationCard.jsx --file-text "import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className=\"group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2\"
      onClick={() => navigate(`/blog/${destination.id}`)}
    >
      {/* Image Container */}
      <div className=\"relative h-64 overflow-hidden\">
        <img
          src={destination.image}
          alt={destination.title}
          className=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent\"></div>
        
        {/* Category Badge */}
        <Badge className=\"absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 text-white border-0\">
          {destination.category}
        </Badge>

        {/* Featured Badge */}
        {destination.featured && (
          <Badge className=\"absolute top-4 left-4 bg-white/90 text-slate-900 border-0 font-semibold\">
            Featured
          </Badge>
        )}

        {/* Title Overlay */}
        <div className=\"absolute bottom-4 left-4 right-4\">
          <h3 className=\"text-2xl font-serif font-bold text-white mb-1\">
            {destination.title}
          </h3>
          <div className=\"flex items-center text-white/90 text-sm\">
            <MapPin className=\"h-4 w-4 mr-1\" />
            <span>{destination.country}</span>
          </div>
        </div>
      </div>

      <CardContent className=\"p-6\">
        {/* Description */}
        <p className=\"text-slate-600 mb-4 line-clamp-2 leading-relaxed\">
          {destination.excerpt}
        </p>

        {/* Footer */}
        <div className=\"flex items-center justify-between pt-4 border-t border-slate-100\">
          <div className=\"flex items-center text-sm text-slate-500\">
            <Calendar className=\"h-4 w-4 mr-1\" />
            <span>{destination.date}</span>
          </div>
          <div className=\"flex items-center text-amber-600 font-medium text-sm group-hover:text-amber-700 transition-colors duration-200\">
            <span>Read More</span>
            <ArrowRight className=\"ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200\" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
"
Observation: Create successful: /app/frontend/src/components/DestinationCard.jsx
