import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, balance }) => {
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (!cart || cart.length === 0) {
        return (
            <div className="cart-page">
                <h1>Sepetim</h1>
                <p className="empty-cart-message">Sepetiniz boş</p>
                <Link to="/" className="go-to-products-btn">Ürünler Sayfasına Git</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1>Sepetim</h1>

            {/* Bakiye */}
            <div className="balance">
                <h2>Bakiye: {balance} TL</h2>
            </div>

            {/* Sepet Ürünleri */}
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="item-details">
                            <span className="item-name">{item.name}</span>
                            <span className="item-quantity">{item.quantity} x {item.price} ₺</span>
                        </div>
                        <div className="item-total">
                            <span>{item.quantity * item.price} ₺</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Toplam Tutar */}
            <div className="total-section">
                <h3>Toplam Tutar:</h3>
                <p className="total-amount">{totalAmount} ₺</p>
            </div>

            {/* Geri Dön Butonu */}
            <div className="back-to-products">
                <Link to="/" className="back-button">
                    Ürünlere Geri Dön
                </Link>
            </div>
        </div>
    );
};

export default CartPage;