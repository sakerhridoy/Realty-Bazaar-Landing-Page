import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useShop } from '../context/ShopContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    id ? `https://dummyjson.com/products/${id}` : ''
  );
  const { addToCart, addToWishlist, wishlist } = useShop();

  const product = useMemo(() => data, [data]);
  const isFav = product && wishlist.some(item => item.id === product.id);

  if (loading) return <p className="container mx-auto py-10">Loading...</p>;
  if (error)
    return (
      <p className="container mx-auto py-10 text-red-600">
        Could not load product: {error}
      </p>
    );
  if (!product)
    return (
      <p className="container mx-auto py-10">Product not found.</p>
    );

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="w-full h-[420px] object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-3 mt-3">
            {(product.images || []).slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title}-${i}`}
                className="w-full h-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-arial font-bold text-3xl text-[#072135]">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl text-[#38A9FF] font-bold">
            ${product.price?.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            Category: {product.category} • Brand: {product.brand || 'N/A'} •
            Stock: {product.stock}
          </p>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.thumbnail || product.images?.[0],
                });
                navigate('/cart');
              }}
              className="flex items-center gap-2 bg-[#072135] text-white px-4 py-2 rounded"
            >
              <IoCartOutline />
              Add to cart
            </button>
            <button
              onClick={() =>
                addToWishlist({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.thumbnail || product.images?.[0],
                })
              }
              className="flex items-center gap-2 border border-[#38A9FF] text-[#38A9FF] px-4 py-2 rounded"
            >
              {isFav ? <FaHeart /> : <FaRegHeart />}
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

