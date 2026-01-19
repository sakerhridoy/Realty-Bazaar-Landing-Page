import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { IoCartOutline } from 'react-icons/io5';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between pb-6">
        <h1 className="font-arial font-bold text-3xl text-[#072135]">
          Wishlist
        </h1>
        <Link to="/products" className="text-[#38A9FF] underline">
          Browse products
        </Link>
      </div>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div
              key={item.id}
              className="border border-[#E5E5E5] rounded-lg p-4 flex flex-col gap-3"
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </Link>
              <div>
                <Link to={`/products/${item.id}`}>
                  <h3 className="font-bold text-lg text-[#072135] hover:text-[#38A9FF]">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-[#38A9FF] font-bold">
                  ${item.price?.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => addToCart({ ...item })}
                  className="flex items-center gap-2 bg-[#072135] text-white px-3 py-2 rounded"
                >
                  <IoCartOutline />
                  Add to cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;

