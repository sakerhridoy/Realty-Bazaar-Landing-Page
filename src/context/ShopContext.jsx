import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ShopContext = createContext(null);

const STORAGE_KEYS = {
  cart: 'rb_cart',
  wishlist: 'rb_wishlist',
  user: 'rb_user',
};

const loadStorage = key => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn('Failed to parse storage', err);
    return null;
  }
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => loadStorage(STORAGE_KEYS.cart) || []);
  const [wishlist, setWishlist] = useState(
    () => loadStorage(STORAGE_KEYS.wishlist) || []
  );
  const [user, setUser] = useState(() => loadStorage(STORAGE_KEYS.user));
  const [lastOrder, setLastOrder] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.user);
    }
  }, [user]);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const addToWishlist = product => {
    setWishlist(prev => {
      if (prev.some(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = id => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);
  const clearWishlist = () => setWishlist([]);

  const login = ({ email }) => setUser({ email });
  const logout = () => {
    setUser(null);
    setLastOrder(null);
  };

  const placeOrder = details => {
    const orderId = `ORD-${Math.floor(Math.random() * 900000 + 100000)}`;
    const order = {
      id: orderId,
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0
      ),
      details,
      placedAt: new Date().toISOString(),
    };
    setLastOrder(order);
    clearCart();
    return order;
  };

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      user,
      lastOrder,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist,
      clearCart,
      clearWishlist,
      login,
      logout,
      placeOrder,
    }),
    [cart, wishlist, user, lastOrder]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};

export default ShopContext;

