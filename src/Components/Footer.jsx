import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-900 pt-24 pb-12 transition-all duration-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Column 1: Brand & Identity */}
                    <div className="flex flex-col">
                        <Link to="/" className="text-2xl font-black tracking-tighter mb-8 dark:text-white">
                            <span className="text-pink-500 uppercase">Sunshine</span> <span className="text-xs font-bold tracking-widest text-gray-400">Baby Garments</span>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-[1.8] mb-8 max-w-xs">
                            Dedicated to providing the most gentle, safe, and stylish clothing for your little miracles. Because every childhood deserves to shine.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Curation */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white mb-8">Collections</h4>
                        <ul className="space-y-4">
                            {['New Arrivals', 'Baby Boys', 'Baby Girls', 'Toddler Shop', 'Footwear', 'Accessories'].map((item) => (
                                <li key={item}>
                                    <Link to="/shop" className="text-sm font-semibold text-gray-500 hover:text-pink-500 transition-colors duration-300">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white mb-8">Client Services</h4>
                        <ul className="space-y-4">
                            {['Contact Us', 'Track Your Order', 'Shipping Policy', 'Returns & Exchanges', 'Size Guide', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-sm font-semibold text-gray-500 hover:text-pink-500 transition-colors duration-300">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Newsletter */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white mb-8">Visit Us</h4>
                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4">
                                <FaMapMarkerAlt className="text-pink-500 shrink-0 mt-1" />
                                <p className="text-sm font-semibold text-gray-500 leading-relaxed">123 Sunshine Plaza, Main Bazaar, Gilgit, Pakistan</p>
                            </div>
                            <div className="flex gap-4">
                                <FaPhoneAlt className="text-pink-500 shrink-0" />
                                <p className="text-sm font-semibold text-gray-500">+92 300 1234567</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Stay in the loop"
                                className="w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 py-3 text-sm focus:border-pink-500 focus:outline-none transition-colors duration-500 dark:text-white"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-pink-500 hover:text-pink-600 transition">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Sunshine Premium Garments. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy', 'Terms', 'Cookies'].map((item) => (
                            <a key={item} href="#" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:text-pink-500 transition">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
