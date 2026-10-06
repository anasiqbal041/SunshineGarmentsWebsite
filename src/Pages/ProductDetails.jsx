import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaHeart, FaStar, FaMinus, FaPlus, FaShoppingBag, FaShieldAlt, FaTruck, FaUndo } from 'react-icons/fa';

import { products as allProducts } from '../Data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const product = allProducts.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('6-12M');
    const { addToCart } = useCart();

    // Scroll to top on id change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <div className="text-center">
                    <h2 className="text-2xl font-black mb-4">Product Not Found</h2>
                    <Link to="/shop" className="text-pink-500 font-bold uppercase tracking-widest text-sm">Return to Shop</Link>
                </div>
            </div>
        );
    }

    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
            <Helmet>
                <title>{product.name} | Sunshine Premium</title>
            </Helmet>
            <Navbar />

            <main className="container mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                    {/* Image Section - Sticky for Desktop */}
                    <div className="w-full lg:w-3/5 lg:sticky lg:top-32 self-start">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-gray-900 premium-shadow">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition duration-700" />
                            </div>
                            <div className="hidden md:flex flex-col gap-6">
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-gray-900 premium-shadow opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 dark:bg-gray-900 premium-shadow opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="w-full lg:w-2/5 flex flex-col pt-4">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500">{product.category}</span>
                            <div className="flex text-amber-400 text-xs items-center gap-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                <span className="text-gray-400 font-black ml-2 mt-0.5">4.9 / 12 REVIEWS</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-baseline gap-4 mb-10">
                            <span className="text-3xl font-black text-pink-500">Rs.{product.price.toLocaleString()}</span>
                            <span className="text-lg text-gray-400 line-through font-bold">Rs.{Math.round(product.price * 1.3).toLocaleString()}</span>
                            <span className="bg-red-50 text-red-500 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">Save 30%</span>
                        </div>

                        <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Select Size</h4>
                            <div className="flex flex-wrap gap-4">
                                {['0-3M', '3-6M', '6-12M', '12-24M', '2-3Y'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-black transition-all duration-300 active:scale-90 ${selectedSize === size ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-xl' : 'bg-white dark:bg-gray-800 text-gray-400 border border-gray-100 dark:border-gray-700 hover:border-pink-500 hover:text-pink-500'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mb-12">
                            <div className="flex gap-4">
                                <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-5 text-gray-400 hover:text-pink-500 transition"><FaMinus size={12} /></button>
                                    <span className="w-10 text-center font-black text-sm dark:text-white">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="p-5 text-gray-400 hover:text-pink-500 transition"><FaPlus size={12} /></button>
                                </div>
                                <button
                                    onClick={() => addToCart(product, quantity, selectedSize)}
                                    className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black uppercase tracking-[0.2em] rounded-2xl py-5 text-xs hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95"
                                >
                                    Add to Bag <FaShoppingBag />
                                </button>
                                <button className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-gray-400 hover:text-pink-500 transition active:scale-95">
                                    <FaHeart size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Luxury Trust Icons */}
                        <div className="grid grid-cols-3 gap-4 mb-12 pt-8 border-t border-gray-100 dark:border-gray-900">
                            {[
                                { icon: <FaTruck />, text: "Free Fast Shipping" },
                                { icon: <FaUndo />, text: "7 Days Easy Returns" },
                                { icon: <FaShieldAlt />, text: "Secure Payment" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center gap-3">
                                    <div className="text-pink-500 text-lg">{item.icon}</div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <details className="group border-b border-gray-100 dark:border-gray-900 pb-4" open>
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white">Product Description</h4>
                                    <span className="group-open:rotate-180 transition-transform"><FaPlus size={10} /></span>
                                </summary>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    Meticulously designed for your baby's ultimate comfort. Our {product.name} is crafted from 100% fine-combed organic cotton, ensuring zero irritation and maximum breathability. Perfect for everyday luxury.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {relatedProducts.length > 0 && (
                    <section className="mt-32 pt-32 border-t border-gray-100 dark:border-gray-900">
                        <div className="flex items-center justify-between mb-16">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block">Curation</span>
                                <h2 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">You May Also Love</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {relatedProducts.map(item => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
