
Action: file_editor create /app/frontend/src/components/InteractiveMap.jsx --file-text "import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

export const InteractiveMap = ({ destinations }) => {
  const mapRef = useRef(null);

  // Create a simple interactive map visualization
  useEffect(() => {
    if (!mapRef.current || !destinations) return;

    // This is a simplified map representation
    // In a real implementation, you could integrate Google Maps, Mapbox, or Leaflet
  }, [destinations]);

  return (
    <div className=\"relative w-full h-[500px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner\">
      {/* World Map Background */}
      <div 
        ref={mapRef}
        className=\"absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300\"
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23f1f5f9'/%3E%3Cpath d='M0 0L50 50M50 0L0 50M50 50L100 100M100 50L50 100' stroke='%23cbd5e1' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")`,
          backgroundSize: '50px 50px'
        }}
      >
        {/* Decorative world map illustration */}
        <div className=\"absolute inset-0 flex items-center justify-center opacity-20\">
          <svg viewBox=\"0 0 800 400\" className=\"w-full h-full\">
            {/* Simplified continents illustration */}
            <path
              d=\"M100,150 Q150,130 200,140 T300,150 L350,120 L400,130 L450,110 L500,120 Q550,115 600,125 L650,130 L700,140\"
              fill=\"none\"
              stroke=\"currentColor\"
              strokeWidth=\"2\"
              className=\"text-slate-400\"
            />
            <path
              d=\"M150,200 Q200,190 250,200 L300,220 L350,210 L400,230 L450,220 Q500,225 550,220\"
              fill=\"none\"
              stroke=\"currentColor\"
              strokeWidth=\"2\"
              className=\"text-slate-400\"
            />
            <path
              d=\"M200,280 Q250,270 300,280 L350,300 L400,290 L450,285 L500,295\"
              fill=\"none\"
              stroke=\"currentColor\"
              strokeWidth=\"2\"
              className=\"text-slate-400\"
            />
          </svg>
        </div>

        {/* Destination Markers */}
        <div className=\"absolute inset-0\">
          {destinations?.slice(0, 6).map((destination, index) => {
            // Calculate pseudo-random but consistent positions
            const positions = [
              { top: '25%', left: '65%' },  // Asia
              { top: '35%', left: '50%' },  // Europe
              { top: '30%', left: '20%' },  // Americas
              { top: '50%', left: '55%' },  // Asia
              { top: '60%', left: '15%' },  // Americas
              { top: '40%', left: '48%' }   // Europe
            ];

            const position = positions[index] || { top: '50%', left: '50%' };

            return (
              <div
                key={destination.id}
                className=\"absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer\"
                style={{ top: position.top, left: position.left }}
              >
                {/* Pulse animation */}
                <div className=\"absolute inset-0 animate-ping\">
                  <div className=\"w-6 h-6 bg-amber-500 rounded-full opacity-75\"></div>
                </div>
                
                {/* Marker */}
                <div className=\"relative flex items-center justify-center\">
                  <MapPin className=\"h-8 w-8 text-amber-600 drop-shadow-lg\" fill=\"currentColor\" />
                </div>

                {/* Tooltip */}
                <div className=\"absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none\">
                  <div className=\"bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl\">
                    <div className=\"font-semibold\">{destination.title}</div>
                    <div className=\"text-slate-300 text-xs\">{destination.country}</div>
                    {/* Arrow */}
                    <div className=\"absolute top-full left-1/2 transform -translate-x-1/2 -mt-1\">
                      <div className=\"w-2 h-2 bg-slate-900 transform rotate-45\"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Map Legend */}
      <div className=\"absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg\">
        <h4 className=\"font-semibold text-slate-900 mb-2 text-sm\">Destinations Map</h4>
        <div className=\"flex items-center space-x-2 text-sm text-slate-600\">
          <MapPin className=\"h-4 w-4 text-amber-600\" fill=\"currentColor\" />
          <span>{destinations?.length || 0} locations explored</span>
        </div>
      </div>
    </div>
  );
};
"
Observation: Create successful: /app/frontend/src/components/InteractiveMap.jsx
