// components/InputField.jsx
import React from 'react';

const InputField = ({ label, type = 'text', name, id, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
      required
    />
  </div>
);

export default InputField;
