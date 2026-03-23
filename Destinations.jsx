
Action: file_editor create /app/frontend/src/pages/Destinations.jsx --file-text "import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DestinationCard } from '../components/DestinationCard';
import { InteractiveMap } from '../components/InteractiveMap';
import { destinations, categories } from '../mock/data';
import { Search, Filter, MapIcon, Grid3x3 } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'

  // Filter destinations based on search and category
  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className=\"min-h-screen bg-white\">
      <Navbar />

      {/* Header Section */}
      <section className=\"pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white\">
        <div className=\"max-w-7xl mx-auto\">
          <h1 className=\"text-5xl sm:text-6xl font-serif font-bold text-slate-900 mb-4 text-center\">
            All Destinations
          </h1>
          <p className=\"text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12\">
            Explore all the incredible places I've visited and find inspiration for your next adventure.
          </p>

          {/* Search and Filter */}
          <div className=\"flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-6 rounded-2xl shadow-lg border border-slate-100\">
            {/* Search Bar */}
            <div className=\"relative w-full md:w-96\">
              <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400\" />
              <Input
                type=\"text\"
                placeholder=\"Search destinations...\"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=\"pl-10 pr-4 py-6 w-full border-slate-200 focus:border-amber-500 focus:ring-amber-500\"
              />
            </div>

            {/* View Mode Toggle */}
            <div className=\"flex items-center gap-2 bg-slate-100 p-1 rounded-lg\">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size=\"sm\"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-white shadow-sm' : ''}
              >
                <Grid3x3 className=\"h-4 w-4 mr-2\" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size=\"sm\"
                onClick={() => setViewMode('map')}
                className={viewMode === 'map' ? 'bg-white shadow-sm' : ''}
              >
                <MapIcon className=\"h-4 w-4 mr-2\" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className=\"py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-100\">
        <div className=\"max-w-7xl mx-auto\">
          <div className=\"flex items-center gap-2 mb-4\">
            <Filter className=\"h-5 w-5 text-slate-600\" />
            <span className=\"font-semibold text-slate-900\">Filter by category:</span>
          </div>
          <div className=\"flex flex-wrap gap-2\">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 hover:bg-amber-700 text-white border-amber-600'
                    : 'border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className=\"py-12 px-4 sm:px-6 lg:px-8\">
        <div className=\"max-w-7xl mx-auto\">
          {/* Results Count */}
          <div className=\"mb-8\">
            <p className=\"text-slate-600\">
              Showing <span className=\"font-semibold text-slate-900\">{filteredDestinations.length}</span> destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <>
              {filteredDestinations.length > 0 ? (
                <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
                  {filteredDestinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                  ))}
                </div>
              ) : (
                <div className=\"text-center py-20\">
                  <div className=\"text-6xl mb-4\">🌍</div>
                  <h3 className=\"text-2xl font-semibold text-slate-900 mb-2\">
                    No destinations found
                  </h3>
                  <p className=\"text-slate-600 mb-6\">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className=\"bg-amber-600 hover:bg-amber-700\"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}

          {/* Map View */}
          {viewMode === 'map' && (
            <div className=\"space-y-8\">
              <InteractiveMap destinations={filteredDestinations} />
              
              {/* Quick list below map */}
              <div className=\"bg-slate-50 rounded-2xl p-6\">
                <h3 className=\"text-xl font-semibold text-slate-900 mb-4\">
                  Destinations List
                </h3>
                <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\">
                  {filteredDestinations.map((dest) => (
                    <a
                      key={dest.id}
                      href={`/blog/${dest.id}`}
                      className=\"flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 group\"
                    >
                      <img
                        src={dest.image}
                        alt={dest.title}
                        className=\"w-16 h-16 object-cover rounded-lg\"
                      />
                      <div>
                        <div className=\"font-semibold text-slate-900 group-hover:text-amber-600 transition-colors duration-200\">
                          {dest.title}
                        </div>
                        <div className=\"text-sm text-slate-500\">{dest.country}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
"
Observation: Create successful: /app/frontend/src/pages/Destinations.jsx
