import { useState } from 'react';
import InputField from '../components/InputField';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate & Submit
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Form Submitted", formData);
    //POST API here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-6">Sign Up</h2>
      <InputField label="First Name" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
      <InputField label="Last Name" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
      <InputField label="Email" name="email" id="email" type="email" value={formData.email} onChange={handleChange} />
      <InputField label="Username" name="username" id="username" value={formData.username} onChange={handleChange} />
      <InputField label="Password" name="password" id="password" type="password" value={formData.password} onChange={handleChange} />
      <InputField label="Confirm Password" name="confirmPassword" id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
