import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useShop();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between pb-6">
        <h1 className="font-arial font-bold text-3xl text-[#072135]">
          Cart
        </h1>
        <Link to="/products" className="text-[#38A9FF] underline">
          Continue shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 border border-[#E5E5E5] rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#072135]">
                    {item.title}
                  </h3>
                  <p className="text-[#38A9FF] font-bold">
                    ${item.price?.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <label className="text-sm text-gray-500">Qty</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e =>
                        updateQuantity(item.id, Number(e.target.value) || 1)
                      }
                      className="w-16 border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-[#E5E5E5] rounded-lg p-4 h-fit">
            <h2 className="font-bold text-xl text-[#072135] pb-4">
              Order Summary
            </h2>
            <div className="flex justify-between text-sm pb-2">
              <span>Subtotal</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm pb-2">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between text-base font-bold pb-4">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#072135] text-white py-2 rounded"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

