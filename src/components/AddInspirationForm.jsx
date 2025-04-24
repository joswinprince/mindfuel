import React, { useState } from "react";
import axios from "axios";

const AddInspirationForm = ({ onInspirationAdded }) => {
  const [form, setForm] = useState({
    source: "",
    type: "",
    impactLevel: "",
    date: "",
    userId: 1, // temporary static user ID
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.source.trim()) newErrors.source = "Source is required";
    if (!form.type.trim()) newErrors.type = "Type is required";
    if (!form.impactLevel || form.impactLevel <= 0)
      newErrors.impactLevel = "Impact level must be greater than 0";
    if (!form.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addInspiration = async (inspiration) => {
    return axios.post("http://192.168.1.5:8085/api/inspiration", inspiration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    try {
      const response = await addInspiration(form);
      setSuccess("Inspiration added successfully!");
      setForm({
        source: "",
        type: "",
        impactLevel: "",
        date: "",
        userId: form.userId,
      });
      setErrors({});
      if (onInspirationAdded) onInspirationAdded(response.data);
    } catch (error) {
      console.error("Error saving inspiration:", error);
      setSuccess("Failed to save inspiration.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Inspiration</h2>

      <input
        type="text"
        placeholder="Source"
        value={form.source}
        onChange={(e) => setForm({ ...form, source: e.target.value })}
      />
      {errors.source && <p className="error">{errors.source}</p>}

      <input
        type="text"
        placeholder="Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      />
      {errors.type && <p className="error">{errors.type}</p>}

      <input
        type="number"
        placeholder="Impact Level"
        value={form.impactLevel}
        onChange={(e) => setForm({ ...form, impactLevel: parseInt(e.target.value) })}
      />
      {errors.impactLevel && <p className="error">{errors.impactLevel}</p>}

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      <button type="submit">Submit</button>

      {success && <p className="success">{success}</p>}
    </form>
  );
};

export default AddInspirationForm;
