import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { lastOrder } = useShop();
  const orderId = state?.orderId || lastOrder?.id;

  return (
    <section className="container mx-auto px-4 py-10 text-center">
      <h1 className="font-arial font-bold text-3xl text-[#072135] pb-4">
        Thank you for your purchase!
      </h1>
      {orderId ? (
        <p className="text-lg text-gray-700 pb-6">
          Your order <span className="font-bold">{orderId}</span> is confirmed.
        </p>
      ) : (
        <p className="text-lg text-gray-700 pb-6">
          Order confirmed.
        </p>
      )}
      <div className="flex justify-center gap-4">
        <Link
          to="/products"
          className="bg-[#072135] text-white px-4 py-2 rounded"
        >
          Continue shopping
        </Link>
        <Link
          to="/"
          className="border border-[#072135] text-[#072135] px-4 py-2 rounded"
        >
          Go home
        </Link>
      </div>
    </section>
  );
};

export default OrderConfirmation;

