import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { FaTrash, FaArrowRight, FaShoppingBag, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? 200 : 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500">
            <Helmet>
                <title>Shopping Bag | Anas Premium</title>
            </Helmet>
            <Navbar />

            <main className="container mx-auto px-6 py-12 md:py-24">
                <div className="mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block text-center lg:text-left">Your Selection</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white text-center lg:text-left">Shopping Bag</h1>
                </div>

                {cartItems.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        {/* Cart Items List */}
                        <div className="lg:w-3/5 space-y-10">
                            <div className="space-y-8">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="group flex flex-col sm:flex-row gap-8 pb-8 border-b border-gray-100 dark:border-gray-900 last:border-0">
                                        <Link to={`/product/${item.id}`} className="w-full sm:w-40 aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gray-50 dark:bg-gray-900 premium-shadow shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                        </Link>

                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <span className="text-[9px] font-black text-pink-500 uppercase tracking-widest mb-1 block">{item.category}</span>
                                                    <Link to={`/product/${item.id}`} className="text-xl font-black text-gray-900 dark:text-white hover:text-pink-500 transition-colors tracking-tight">{item.name}</Link>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size)}
                                                    className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                                                >
                                                    <FaTrash size={14} />
                                                </button>
                                            </div>

                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Size: <span className="text-gray-900 dark:text-gray-200">{item.size}</span></p>

                                            <div className="mt-auto flex justify-between items-end">
                                                <div className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="p-3 text-gray-400 hover:text-pink-500 transition"><FaTrash size={10} /></button>
                                                    <span className="w-8 text-center font-black text-xs dark:text-white">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="p-3 text-gray-400 hover:text-pink-500 transition font-black">+</button>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-bold text-gray-400 block mb-1">Item Total</span>
                                                    <span className="text-xl font-black text-gray-900 dark:text-white">Rs.{(item.price * item.quantity).toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary (Glassy) */}
                        <div className="lg:w-2/5">
                            <div className="sticky top-32 glass dark:glass-dark p-8 md:p-12 rounded-[3rem] premium-shadow border border-white/50 dark:border-white/5">
                                <h2 className="text-2xl font-black mb-10 tracking-tight text-gray-900 dark:text-white">Order Summary</h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Subtotal</span>
                                        <span className="text-gray-900 dark:text-white font-black">Rs.{subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Shipping</span>
                                        <span className="text-gray-900 dark:text-white font-black">Rs.{shipping.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">Estimated Tax</span>
                                        <span className="text-gray-900 dark:text-white font-black">Rs.0</span>
                                    </div>
                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                        <span className="text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white">Total</span>
                                        <span className="text-3xl font-black text-pink-500">Rs.{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <Link to="/checkout" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-95 mb-8">
                                    Proceed to Checkout <FaArrowRight />
                                </Link>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <FaShieldAlt className="text-green-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Secure Checkout Guaranteed</span>
                                    </div>
                                    <p className="text-[10px] font-medium text-gray-400 leading-relaxed uppercase tracking-tighter">
                                        Complimentary shipping on orders above Rs. 10,000. Easy returns within 7 days of delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-32 text-center bg-gray-50 dark:bg-gray-900 rounded-[4rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
                        <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8 premium-shadow">
                            <FaShoppingBag className="text-gray-300" size={32} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Your bag is currently empty</h2>
                        <p className="text-gray-400 font-medium mb-10 italic">Discover our latest collections for your little ones.</p>
                        <Link to="/shop" className="px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-xl active:scale-95 inline-block">
                            Start Shopping
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
