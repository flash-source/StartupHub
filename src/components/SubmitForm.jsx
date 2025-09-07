import React, { useState } from "react";

const SubmitForm = ({ addStartup, onClose}) => {
  const [formData, setFormData] = useState({
    name: "", industry: "", location: "", founded: "", funding: "", logo: "", website: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    addStartup({ ...formData, id: Date.now() });
    setFormData({ name: "", industry: "", location: "", founded: "", funding: "", logo: "", website: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add a New Startup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name","industry","location","founded","funding","logo","website"].map((field) => (
            <input
              key={field}
              type={field==="founded"?"number":"text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Add Startup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
