import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import useFetch from '../hooks/useFetch';
import { useShop } from '../context/ShopContext';

const Products = () => {
  const { data, loading, error } = useFetch(
    'https://dummyjson.com/products?limit=24'
  );
  const { addToCart, addToWishlist, wishlist } = useShop();

  const products = useMemo(() => data?.products || [], [data]);
  const isFav = id => wishlist.some(item => item.id === id);

  return (
    <section className="py-10 md:py-14 container mx-4 lg:mx-auto">
      <div className="flex items-center justify-between pb-6">
        <h1 className="font-arial font-bold text-3xl text-[#072135]">
          Products
        </h1>
        <p className="text-sm text-gray-500">
          Powered by dummyjson.com (click a product to see details)
        </p>
      </div>

      {loading && <p className="text-gray-600">Loading products...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="border border-[#E5E5E5] rounded-lg shadow-sm p-4 flex flex-col gap-3"
          >
            <Link to={`/products/${product.id}`} className="block">
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>
            <div className="flex justify-between items-start gap-3">
              <div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-arial font-bold text-lg text-[#072135] hover:text-[#38A9FF]">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>
              </div>
              <button
                className="text-[#38A9FF] text-xl"
                aria-label="Add to wishlist"
                onClick={() =>
                  addToWishlist({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.thumbnail || product.images?.[0],
                  })
                }
              >
                {isFav(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#38A9FF] text-xl">
                ${product.price.toLocaleString()}
              </p>
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.thumbnail || product.images?.[0],
                  })
                }
                className="flex items-center gap-2 bg-[#072135] text-white px-3 py-2 rounded"
              >
                <IoCartOutline />
                Add to cart
              </button>
            </div>
            <Link
              to={`/products/${product.id}`}
              className="text-sm text-[#38A9FF] underline self-start"
            >
              View details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

