import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartPage from './CartPage'; // CartPage bileşeni
import products from './data/products'; // Ürün verilerini içe aktar
import './styles.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quantities, setQuantities] = useState({}); // Ürün miktarları
    const [balance, setBalance] = useState(22100); // Bakiye

    // Kategoriler
    const categories = [
        'Kahvaltılık',
        'Ara Öğün',
        'Akşam Yemeği',
        'Atıştırmalık',
        'İçecekler'
    ];

    // Kategori seçildiğinde filtreleme
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // Sepete ürün ekleme
    const addToCart = (product) => {
        const quantity = quantities[product.id] || 0; // Varsayılan miktar 0
        if (quantity === 0) return; // Eğer miktar 0 ise sepete eklenmesin

        const updatedCart = [...cart];

        // Sepette var olan ürünü bulup miktarı artırma
        const existingProduct = updatedCart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += quantity; // Eğer ürün zaten varsa, miktarı artır
        } else {
            updatedCart.push({ ...product, quantity }); // Yeni ürün ekle
        }

        setCart(updatedCart);
        setBalance(balance - product.price * quantity); // Bakiyeden düş
    };

    // Miktarı artırma
    const increaseQuantity = (productId) => {
        setQuantities({
            ...quantities,
            [productId]: (quantities[productId] || 0) + 1, // Başlangıçta 0'dan başlar
        });
    };

    // Miktarı azaltma
    const decreaseQuantity = (productId) => {
        setQuantities({
            ...quantities,
            [productId]: Math.max((quantities[productId] || 0) - 1, 0), // Başlangıçta 0'dan başlar, negatif olamaz
        });
    };

    return (
        <Router>
            <div className="app-container">
                <h1 className="font-bold text-3xl italic">🛒 Enflasyon Market 🛒</h1>

                {/* Yönlendirme */}
                <Routes>
                    {/* Ürünler Sayfası */}
                    <Route path="/" element={
                        <div>
                            {/* Bakiye */}
                            <div className="balance">
                                <h2>Bakiye: {balance} TL</h2>
                            </div>

                            {/* Kategoriler ve Sepete Git Butonu */}
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

                                {/* Sepete Git Butonu */}
                                <Link to="/cart" className="go-to-cart-btn">
                                    Sepete Git
                                </Link>
                            </div>

                            {/* Ürünler Listesi */}
                            <div className="products">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <div key={product.id} className="product-card">
                                            {/* Ürün Resmi */}
                                            <img src={product.image} alt={product.name} className="product-image" />
                                            <h3>{product.name}</h3>
                                            <p>{product.category}</p>
                                            <p>Price: {product.price} ₺</p>

                                            {/* Miktar Kontrolü */}
                                            <div className="quantity-controls">
                                                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                                <span>{quantities[product.id] || 0}</span> {/* Başlangıçta 0 olacak */}
                                                <button onClick={() => increaseQuantity(product.id)}>+</button>
                                            </div>

                                            {/* Sepete Ekle Butonu */}
                                            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                                                Sepete Ekle
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p>Bu kategoriye ait ürün bulunmamaktadır.</p>
                                )}
                            </div>
                        </div>
                    } />

                    {/* Sepet Sayfası */}
                    <Route path="/cart" element={<CartPage cart={cart} balance={balance} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;