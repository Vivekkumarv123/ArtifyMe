import React, { useState } from 'react';
import './CatalogPage.css'; // Importing a CSS file for responsive styling

function CatalogPage() {
  const [catalog] = useState([
    {
      id: 1,
      name: 'Modern Kitchen',
      description: 'A spacious modern kitchen with sleek cabinets and high-end appliances.',
      dimension: '15x20 ft',
      image: 'https://www.decorpot.com/images/535328501main-image.jpg',
    },
    {
      id: 2,
      name: 'Classic Bedroom',
      description: 'A classic bedroom with elegant wooden furniture and warm lighting.',
      dimension: '12x15 ft',
      image: 'https://fabdiz.com/wp-content/uploads/2023/05/luxury-bedroom-light-colours-with-golden-furniture-details-big-comfortable-double-royal-bed-elegant-classic-interior-generative-ai.jpg',
    },
    {
      id: 3,
      name: 'Luxury Bathroom',
      description: 'A luxurious bathroom with a spacious shower area and modern design.',
      dimension: '10x12 ft',
      image: 'https://www.alhabibpaneldoors.com/images/interior-item/elegant-bathroom-design-ipc243.jpeg',
    },
    {
      id: 4,
      name: 'Cozy Living Room',
      description: 'A cozy living room with plush furniture and ambient lighting.',
      dimension: '20x25 ft',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NyuZN2F2u3aHM70v02Ot5WvZmLOzPfbUCA&s',
    },
    {
      id: 5,
      name: 'Elegant Dining Hall',
      description: 'An elegant dining hall with a long dining table and modern decor.',
      dimension: '18x22 ft',
      image: 'https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2021/11/30-Dining-Room-Ideas-For-A-Glamorous-And-Contemporary-Home-38.jpg',
    },
    // More items...
  ]);

  const [filteredCatalog, setFilteredCatalog] = useState(catalog);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setFilter(filterValue);
    const filteredItems = catalog.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );
    setFilteredCatalog(filteredItems);
  };

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Interior Design Catalog</h1>
      <input
        type="text"
        placeholder="🔎Search designs..."
        value={filter}
        onChange={handleFilterChange}
        className="catalog-filter"
      />
      <div className="catalog-grid">
        {filteredCatalog.length ? (
          filteredCatalog.map(item => (
            <div key={item.id} className="catalog-item">
              <img
                src={item.image}
                alt={item.name}
                className="catalog-item-image"
              />
              <div className="catalog-item-info">
                <h2 className="catalog-item-name">{item.name}</h2>
                <p className="catalog-item-description">{item.description}</p>
                <p className="catalog-item-dimension"><strong>Dimensions:</strong> {item.dimension}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No designs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
