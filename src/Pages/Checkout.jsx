import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { FaCreditCard, FaLock, FaTruck, FaShieldAlt, FaChevronRight } from 'react-icons/fa';
import { useCart } from '../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [step, setStep] = useState(1);
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? 200 : 0;
    const total = subtotal + shipping;

    // Redirect if cart is empty and not on success
    useEffect(() => {
        if (cartItems.length === 0 && step !== 3) {
            // navigate('/shop'); // Removed automatic redirect to allow success view
        }
    }, [cartItems, navigate, step]);

    const handlePlaceOrder = () => {
        setStep(3);
        toast.success("Order Placed Successfully!");
        clearCart();
    };

    if (step === 3) {
        return (
            <div className="bg-white dark:bg-gray-950 min-h-screen">
                <Navbar />
                <div className="container mx-auto px-6 py-32 text-center">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
                        <FaShieldAlt className="text-white" size={32} />
                    </div>
                    <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6 tracing-tighter">Order Confirmed</h1>
                    <p className="text-gray-400 font-medium mb-12 max-w-md mx-auto">Thank you for choosing Sunshine Premium. Your little one's treats will arrive shortly.</p>
                    <Link to="/shop" className="px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-xl active:scale-95 inline-block">
                        Continue Shopping
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500">
            <Helmet>
                <title>Secure Checkout | Sunshine Premium</title>
            </Helmet>
            <Navbar />

            <main className="container mx-auto px-6 py-12 md:py-24">
                <div className="mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block">Secure Process</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">Checkout</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                    {/* Multi-step Form */}
                    <div className="lg:w-3/5 space-y-12">
                        {/* Step 1: Shipping */}
                        <section className={`p-8 md:p-12 rounded-[3rem] border-2 transition-all duration-500 ${step === 1 ? 'bg-gray-50 dark:bg-gray-900 border-gray-900 dark:border-white shadow-2xl shadow-gray-200 dark:shadow-none' : 'bg-transparent border-gray-100 dark:border-gray-900 opacity-60'}`}>
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black flex items-center gap-4 text-gray-900 dark:text-white uppercase tracking-tight">
                                    <span className="w-10 h-10 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-black">1</span>
                                    Shipping Logic
                                </h2>
                                {step > 1 && <button onClick={() => setStep(1)} className="text-[10px] font-black uppercase tracking-widest text-pink-500 hover:underline">Revise Details</button>}
                            </div>

                            {step === 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">First Name</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 dark:focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">Last Name</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 dark:focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">Delivery Address</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 dark:focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" placeholder="House no, Street name, Area" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">City</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 dark:focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">Postal Code</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 dark:focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" />
                                    </div>

                                    <button onClick={() => setStep(2)} className="md:col-span-2 mt-4 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                                        Continue to Payment <FaChevronRight />
                                    </button>
                                </div>
                            )}
                        </section>

                        {/* Step 2: Payment */}
                        <section className={`p-8 md:p-12 rounded-[3rem] border-2 transition-all duration-500 ${step === 2 ? 'bg-gray-50 dark:bg-gray-900 border-gray-900 dark:border-white shadow-2xl shadow-gray-200 dark:shadow-none' : 'bg-transparent border-gray-100 dark:border-gray-900 opacity-60'}`}>
                            <h2 className="text-2xl font-black flex items-center gap-4 text-gray-900 dark:text-white uppercase tracking-tight mb-10">
                                <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-colors ${step === 2 ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>2</span>
                                Payment Method
                            </h2>

                            {step === 2 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="flex gap-4">
                                        <button className="flex-1 p-6 rounded-[1.5rem] border-2 border-pink-500 bg-pink-50 dark:bg-pink-900/10 text-pink-500 flex flex-col items-center gap-3">
                                            <FaCreditCard size={24} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Card</span>
                                        </button>
                                        <button className="flex-1 p-6 rounded-[1.5rem] border border-gray-100 dark:border-gray-800 text-gray-400 flex flex-col items-center gap-3 grayscale opacity-50">
                                            <FaTruck size={24} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">C.O.D</span>
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">Card Number</label>
                                            <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">Expiry Date</label>
                                                <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" placeholder="MM/YY" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 pl-2">CVC</label>
                                                <input type="text" className="w-full bg-white dark:bg-gray-800 border border-transparent focus:border-pink-500 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 dark:text-white outline-none transition-all" placeholder="123" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center gap-3 text-gray-400 mb-8">
                                            <FaLock className="text-green-500" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Encrypted Luxury Transaction</span>
                                        </div>
                                        <button onClick={handlePlaceOrder} className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all shadow-xl active:scale-95">
                                            Confirm & Pay Rs. {total.toLocaleString()}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar Cart Summary */}
                    <aside className="lg:w-2/5">
                        <div className="sticky top-32 glass dark:glass-dark p-8 md:p-12 rounded-[3rem] premium-shadow border border-white/50 dark:border-white/5">
                            <h3 className="text-xl font-black mb-10 tracking-tight text-gray-900 dark:text-white">Review Bag</h3>

                            <div className="space-y-8 mb-10 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                        <div className="w-20 h-24 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 shrink-0 border border-gray-100 dark:border-gray-800">
                                            <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="text-xs font-black text-gray-900 dark:text-white mb-1 line-clamp-1">{item.name}</h4>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Qty: {item.quantity}</span>
                                                <span className="text-[10px] font-black text-gray-900 dark:text-white">Rs.{item.price.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {cartItems.length === 0 && <p className="text-gray-400 italic text-sm text-center py-4">Your bag is empty.</p>}
                            </div>

                            <div className="space-y-6 pt-10 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400 font-black uppercase tracking-widest">Subtotal</span>
                                    <span className="text-gray-900 dark:text-white font-black">Rs.{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-gray-400 font-black uppercase tracking-widest">Express Shipping</span>
                                    <span className="text-gray-900 dark:text-white font-black">Rs.{shipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Total</span>
                                    <span className="text-2xl font-black text-pink-500">Rs.{total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Checkout;
