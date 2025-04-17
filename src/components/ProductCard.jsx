// src/components/ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product, onAdd, onRemove, onPurchase, availableBalance }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        if (quantity < Math.floor(availableBalance / product.price)) {
            setQuantity(quantity + 1);
            onAdd(product.price);  // Bakiyeyi güncelle
        }
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onRemove(product.price);  // Bakiyeyi güncelle
        }
    };

    const handlePurchase = () => {
        if (quantity > 0) {
            onPurchase(product, quantity); // Satın alma işlemi
            setQuantity(0); // Satın alma işlemi sonrası miktarı sıfırla
        }
    };

    return (
        <div className="p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">${product.price.toLocaleString()}</p>

            <div className="flex items-center mt-4">
                <button
                    onClick={handleRemove}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    -
                </button>
                <span className="mx-2 text-xl">{quantity}</span>
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-gray-200 rounded-md"
                >
                    +
                </button>
            </div>

            {quantity > 0 && (
                <p className="mt-2 text-gray-600">Total: ${(quantity * product.price).toLocaleString()}</p>
            )}

            <button
                onClick={handlePurchase}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
                disabled={quantity === 0}
            >
                Purchase
            </button>
        </div>
    );
};

export default ProductCard;