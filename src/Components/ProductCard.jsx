import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaEye } from 'react-icons/fa';
import { getProductPriceDetails } from '../Data/products';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const priceDetails = getProductPriceDetails(product);
    return (
        <div className="group flex flex-col">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-gray-900 premium-shadow-hover mb-6">
                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </Link>

                {/* Badge */}
                {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md text-gray-900 dark:text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                            {product.badge}
                        </span>
                    </div>
                )}

                {/* Quick Action Buttons (Glassy) */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md text-gray-900 dark:text-white py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                        Buy <FaShoppingBag size={12} />
                    </button>
                    <Link
                        to={`/product/${product.id}`}
                        className="w-12 h-12 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md text-gray-900 dark:text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-pink-500 hover:text-white transition-all active:scale-95"
                    >
                        <FaEye size={14} />
                    </Link>
                </div>
            </div>

            {/* Product Info */}
            <div className="px-2">
                <span className="text-[9px] font-black text-pink-500 uppercase tracking-[0.3em] mb-2 block">{product.category}</span>
                <Link to={`/product/${product.id}`} className="block">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-pink-500 transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-2">
                        <span className={`text-lg font-black ${priceDetails.originalPrice ? 'text-pink-500' : 'text-gray-900 dark:text-white'}`}>Rs.{priceDetails.price.toLocaleString()}</span>
                        {priceDetails.originalPrice && (
                            <>
                                <span className="text-xs text-gray-400 line-through font-bold">Rs.{priceDetails.originalPrice.toLocaleString()}</span>
                                <span className="text-[9px] font-black text-red-500 uppercase">10% Off</span>
                            </>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
