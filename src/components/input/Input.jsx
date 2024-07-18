import React from 'react';

const Input = ({ type, placeholder, value, onChange, onBlur, required }) => {
    return (
        <input
            className="w-full p-2 md:p-3 lg:p-4 mb-4 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
        />
    );
};

export default Input;
