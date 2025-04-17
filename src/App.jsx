import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartPage from './CartPage';
import products from './data/products';
import './styles.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
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

    const addToCart = (product, quantity) => {
        const totalCost = product.price * quantity;

        if (totalCost > balance) {
            alert(`Yetersiz bakiye! Bu ürün için ${totalCost} TL gerekiyor, ama sadece ${balance} TL'niz var.`);
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

    // Sepetten belirli bir miktar ürün çıkarma ve bakiye artırma
    const removeFromCart = (productId, quantity) => {
        const updatedCart = [...cart];
        const existingProduct = updatedCart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity -= quantity;

            if (existingProduct.quantity <= 0) {
                updatedCart.splice(updatedCart.indexOf(existingProduct), 1);
            }

            // Sepetten çıkarılan ürünün fiyatını bakiyeye ekle
            setBalance(balance + existingProduct.price * quantity);
        }

        setCart(updatedCart);
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
                                        return (
                                            <div key={product.id} className="product-card">
                                                <img src={product.image} alt={product.name} className="product-image" />
                                                <h3>{product.name}</h3>
                                                <p>{product.category}</p>
                                                <p>Fiyat: {product.price} ₺</p>

                                                <button
                                                    onClick={() => addToCart(product, 1)}
                                                    className="add-to-cart-btn"
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

                    <Route path="/cart" element={<CartPage cart={cart} balance={balance} removeFromCart={removeFromCart} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;