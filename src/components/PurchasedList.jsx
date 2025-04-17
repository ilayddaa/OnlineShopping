import React from 'react';

const PurchasedList = ({ purchases }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Purchased Items</h2>
            <ul className="space-y-4">
                {purchases.map((purchase, index) => (
                    <li key={index} className="flex justify-between bg-gray-100 p-4 rounded-lg">
                        <span>{purchase.name}</span>
                        <span>
                            {purchase.quantity} x ${purchase.price.toLocaleString()} = ${purchase.total.toLocaleString()}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PurchasedList;