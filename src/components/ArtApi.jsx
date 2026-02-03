import { useState, useEffect } from "react";

function ArtApi() { 
  const [artworks, setArtworks] = useState([]);  
  const [selectedArt, setSelectedArt] = useState(null);
  const [searchType, setSearchType] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => { 
    if (searchType.length < 1) {
      setArtworks([]);
      setShowDropdown(false);
      return;
    }

    setSearchLoading(true);
    const timer = setTimeout(() => {
      fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchType}&fields=id,title,image_id,artist_title,date_display`)
        .then((response) => response.json())
        .then((data) => {
          if (data.data && data.data.length > 0) {
            setArtworks(data.data);
            setShowDropdown(true);
          } else {
            setArtworks([]);
            setShowDropdown(false);
          }
          setSearchLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching artworks:", error);
          setArtworks([]);
          setSearchLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchType]);

  return (
    <div className="art-api-page">
      <h2>🎨 Art Gallery Search</h2>
      
      <div className="search-container">
        <input 
          type="text"
          placeholder="Search for artworks, artists, or themes..."
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="search-input"
        />
        {searchLoading && <p className="search-loading">✨ Searching...</p>}
        
        {showDropdown && artworks.length > 0 && (
          <div className="dropdown">
            {artworks.map((art) => (
              <div 
                key={art.id} 
                className="dropdown-item"
                onClick={() => {
                  setSelectedArt(art);
                  setShowDropdown(false);
                }}
              >
                <strong>{art.title}</strong>
                <small>{art.artist_title}</small>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedArt && (
        <div className="selected-art">
          <h3>{selectedArt.title}</h3>
          <p className="artist-name">👨‍🎨 {selectedArt.artist_title}</p>
          <p className="art-date">📅 {selectedArt.date_display}</p>
          {selectedArt.image_id && (
            <img 
              src={`https://www.artic.edu/iiif/2/${selectedArt.image_id}/full/843,/0/default.jpg`}
              alt={selectedArt.title}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ArtApi;