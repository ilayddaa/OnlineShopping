import React from 'react';

const Header = ({ balance }) => {
    return (
        <header className="p-4 bg-blue-600 text-white text-center">
            <h1 className="text-3xl">WebMarketim</h1>
            <div className="mt-2 text-xl">
                <strong>Bakiye: </strong>${balance.toLocaleString()}
            </div>
        </header>
    );
};

export default Header;