import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartPage from './CartPage';
import products from './data/products';
import './styles.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quantities, setQuantities] = useState({});
    const [balance, setBalance] = useState(22100);

    const categories = [
        'Kahvaltılık',
        'Ara Öğün',
        'Akşam Yemeği',
        'Atıştırmalık',
        'İçecekler'
    ];

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    const addToCart = (product) => {
        const quantity = quantities[product.id] || 0;
        if (quantity === 0) return;

        const totalCost = product.price * quantity;

        if (totalCost > balance) {
            alert(`Yetersiz bakiye! Bu ürün için ${totalCost} TL gerekiyor, ama sadece ${balance} TL'n var.`);
            return;
        }

        const updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            updatedCart.push({ ...product, quantity });
        }

        setCart(updatedCart);
        setBalance(balance - totalCost);
    };

    const increaseQuantity = (productId) => {
        setQuantities({
            ...quantities,
            [productId]: (quantities[productId] || 0) + 1,
        });
    };

    const decreaseQuantity = (productId) => {
        setQuantities({
            ...quantities,
            [productId]: Math.max((quantities[productId] || 0) - 1, 0),
        });
    };

    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={
                        <div>
                            <header className="header">
                                <h1 className="font-bold text-3xl italic">🛒 WebMarketim 🛒</h1>
                                <div className="balance">
                                    <h2>Bakiye: {balance} TL</h2>
                                </div>
                            </header>

                            <div className="category-buttons">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                                <button onClick={() => setSelectedCategory('')} className="category-btn">
                                    Tümü
                                </button>

                                <Link to="/cart" className="go-to-cart-btn">
                                    Sepete Git
                                </Link>
                            </div>

                            <div className="products">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => {
                                        const quantity = quantities[product.id] || 0;
                                        const totalCost = product.price * quantity;
                                        const disabled = quantity === 0;

                                        return (
                                            <div key={product.id} className="product-card">
                                                <img src={product.image} alt={product.name} className="product-image" />
                                                <h3>{product.name}</h3>
                                                <p>{product.category}</p>
                                                <p>Fiyat: {product.price} ₺</p>

                                                <div className="quantity-controls">
                                                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                                    <span>{quantity}</span>
                                                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                                                </div>

                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="add-to-cart-btn"
                                                    disabled={disabled}
                                                >
                                                    Sepete Ekle
                                                </button>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>Bu kategoriye ait ürün bulunmamaktadır.</p>
                                )}
                            </div>
                        </div>
                    } />

                    <Route path="/cart" element={<CartPage cart={cart} balance={balance} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;