import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Checkout = () => {
  const { cart, placeOrder } = useShop();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'card',
  });
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (!cart.length) return;
    const order = placeOrder(form);
    navigate('/order-confirmation', { state: { orderId: order.id } });
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between pb-6">
        <h1 className="font-arial font-bold text-3xl text-[#072135]">
          Checkout
        </h1>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 border border-[#E5E5E5] rounded-lg p-5 space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold pb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold pb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold pb-1">
                Shipping address
              </label>
              <textarea
                required
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
                className="w-full border rounded px-3 py-2 min-h-[100px]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold pb-1">
                Payment method
              </label>
              <select
                value={form.payment}
                onChange={e => setForm({ ...form, payment: e.target.value })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="card">Credit / Debit Card</option>
                <option value="cod">Cash on Delivery</option>
                <option value="wallet">Wallet</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#072135] text-white px-4 py-2 rounded"
            >
              Pay & place order
            </button>
          </form>

          <div className="border border-[#E5E5E5] rounded-lg p-4 h-fit">
            <h2 className="font-bold text-xl text-[#072135] pb-4">
              Order Summary
            </h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm pb-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between text-base font-bold border-t border-[#E5E5E5] pt-3">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;

