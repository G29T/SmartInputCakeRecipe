import React from 'react';

const Input = ({ attribution, type, placeholder, value, onChange, required }) => {
    return (
        <input
            className="w-full p-2 md:p-3 lg:p-4 mb-4 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            data-testid={`${attribution}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    );
};

export default Input;
