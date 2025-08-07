import React, { useState } from 'react';

const VerifyForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger API request or modal here
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Verify Your Information</h2>

        {/* Nama */}
            <label htmlFor="Nama">
                <span className="text-sm font-medium text-gray-700"> Nama </span>
                <input
                    type="text"
                    name="nama"
                    id="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    placeholder=" "
                />
            </label>

        {/* NIM */}
            <label htmlFor="NIM">
                <span className="text-sm font-medium text-gray-700"> NIM </span>
                <input
                    type="text"
                    name="nim"
                    id="nim"
                    value={formData.nim}
                    onChange={handleChange}
                    required
                    className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    placeholder=" "
                />
            </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition duration-300"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyForm;
