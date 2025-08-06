import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ name: '', nim: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/verify', form);
    setResult(res.data);
  };

  return (
    <div>
      <h2>Student Verification</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="nim" placeholder="NIM" onChange={handleChange} />
        <button type="submit">Verify</button>
      </form>
      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
