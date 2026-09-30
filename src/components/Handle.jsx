import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VALID_USER = {
  username: 'userone',
  password: '123456',
};

const Handle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const submitData = (event) => {
    event.preventDefault();

    if (
      formData.username.trim().toLowerCase() === VALID_USER.username &&
      formData.password === VALID_USER.password
    ) {
      setError('');
      navigate('/');
      return;
    }

    setError('Invalid username or password. Use userone / 123456');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#dcb5b1] p-4">
      <div className="w-full max-w-md rounded-[28px] bg-[#071d2f] p-6 shadow-2xl shadow-slate-900/20">
        <form onSubmit={submitData} className="space-y-5">
          <h1 className="text-center text-4xl font-black text-white">Login</h1>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-600 bg-slate-100 p-3 text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-400"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-600 bg-slate-100 p-3 text-slate-800 outline-none placeholder:text-slate-400 focus:border-blue-400"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-400 bg-red-100 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#e85d73] px-4 py-3 text-lg font-bold text-white transition hover:bg-[#d94d64]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Handle;