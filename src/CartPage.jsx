import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, balance }) => {
    // Sepet toplamını hesapla (fiyat * miktar)
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Sepetim</h1>

            {/* Bakiye */}
            <div className="balance">
                <h2>Bakiye: {balance} TL</h2>
            </div>

            {/* Sepet boşsa mesaj göster */}
            {cart.length === 0 ? (
                <div>
                    <p>Sepetiniz boş</p>
                    <Link to="/">Ürünler Sayfasına Git</Link>
                </div>
            ) : (
                <div>
                    {/* Sepetteki ürünler listeleniyor */}
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <span>{item.name}</span>
                                <span>{item.quantity} x {item.price} ₺ = {item.quantity * item.price} ₺</span>
                            </li>
                        ))}
                    </ul>
                    <h3>Toplam: {totalAmount} ₺</h3>
                </div>
            )}

            {/* Ürünlere Geri Dön Butonu */}
            <div className="back-to-products">
                <Link to="/" className="back-button">
                    Ürünlere Geri Dön
                </Link>
            </div>
        </div>
    );
};

export default CartPage;