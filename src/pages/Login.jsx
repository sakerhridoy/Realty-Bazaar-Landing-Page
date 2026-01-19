import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Login = () => {
  const { user, login, logout } = useShop();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    if (!email) return;
    login({ email });
    navigate('/');
  };

  return (
    <section className="container mx-auto px-4 py-10 max-w-lg">
      <h1 className="font-arial font-bold text-3xl text-[#072135] pb-4">
        {user ? 'Account' : 'Login'}
      </h1>
      {user ? (
        <div className="border border-[#E5E5E5] rounded-lg p-4 space-y-3">
          <p className="text-gray-700">Signed in as {user.email}</p>
          <button
            onClick={() => logout()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleLogin}
          className="border border-[#E5E5E5] rounded-lg p-4 space-y-4"
        >
          <div>
            <label className="block text-sm font-semibold pb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#072135] text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </form>
      )}
    </section>
  );
};

export default Login;

