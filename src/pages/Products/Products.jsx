import { useState } from 'react';
import { Search, Filter, Star, TrendingUp, Sparkles } from 'lucide-react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import mockData from '../../data/mockData.json';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...new Set(mockData.products.map(p => p.category))];

  const filteredProducts = mockData.products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="products-page fade-in">
      <div className="products-header">
        <h1 className="products-title">Product Catalog</h1>
        <p className="products-subtitle">
          Explore our collection of {mockData.products.length} premium products
        </p>
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="search-box">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={20} />}
          />
        </div>

        <div className="filter-controls">
          <Button
            variant="outline"
            icon={<Filter size={18} />}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>

          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      {showFilters && (
        <div className="category-filters slide-in">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Results Count */}
      <div className="results-info">
        <p>Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}</p>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <Card key={product.id} hover className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              {product.new && (
                <span className="product-badge badge-new">
                  <Sparkles size={14} /> New
                </span>
              )}
              {product.trending && (
                <span className="product-badge badge-trending">
                  <TrendingUp size={14} /> Trending
                </span>
              )}
            </div>

            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-rating">
                <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
                <span className="rating-value">{product.rating}</span>
                <span className="rating-count">({product.reviews} reviews)</span>
              </div>

              <div className="product-footer">
                <div className="product-price-section">
                  <span className="product-price">${product.price}</span>
                  <span className="product-stock">
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
                <Button 
                  variant="primary" 
                  size="small"
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
          <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
