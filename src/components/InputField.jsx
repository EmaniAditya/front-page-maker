// src/components/InputField.jsx
import React from 'react';

export const InputField = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className="mb-2">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
