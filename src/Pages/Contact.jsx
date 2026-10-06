import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-500">
            <Helmet>
                <title>Contact Us | Sunshine Baby Garments</title>
            </Helmet>
            <Navbar />

            {/* Premium Header */}
            <header className="pt-32 pb-16 border-b dark:border-gray-900">
                <div className="container mx-auto px-6">
                    <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Concierge Service</span>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Get In Touch</h1>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                    {/* Brand Info */}
                    <div className="lg:w-2/5 space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Our Flagship Presence</h2>
                            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm">
                                Experience our collection in person or reach out for bespoke styling advice. We are here to ensure your little one's comfort.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-pink-500 shrink-0 premium-shadow group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Boutique Address</h3>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed">Sunshine Boutique<br />Main Bazaar, Gilgit, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-pink-500 shrink-0 premium-shadow group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                                    <FaWhatsapp size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Concierge WhatsApp</h3>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed">+92 300 123 4567</p>
                                    <span className="text-[9px] font-black text-green-500 uppercase tracking-tighter">Instant Support</span>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-pink-500 shrink-0 premium-shadow group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Inquiries</h3>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed">care@sunshinepremium.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-pink-500 shrink-0 premium-shadow group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                                    <FaClock size={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Service Hours</h3>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-relaxed">Available Mon - Sat<br />10:00 AM - 08:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Luxury Inquiry Form */}
                    <div className="lg:w-3/5">
                        <div className="glass dark:glass-dark p-8 md:p-12 rounded-[3.5rem] premium-shadow border border-white/50 dark:border-white/5">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-10">Direct Message</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 pl-4">Your Name</label>
                                        <input type="text" className="w-full bg-white dark:bg-gray-800 border-none rounded-3xl px-8 py-5 text-sm font-bold text-gray-900 dark:text-white outline-none focus:ring-2 ring-pink-500/50 transition-all shadow-inner" placeholder="E.g. Ali Khan" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 pl-4">Email Address</label>
                                        <input type="email" className="w-full bg-white dark:bg-gray-800 border-none rounded-3xl px-8 py-5 text-sm font-bold text-gray-900 dark:text-white outline-none focus:ring-2 ring-pink-500/50 transition-all shadow-inner" placeholder="care@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 pl-4">Message Context</label>
                                    <textarea rows="5" className="w-full bg-white dark:bg-gray-800 border-none rounded-[2.5rem] px-8 py-6 text-sm font-bold text-gray-900 dark:text-white outline-none focus:ring-2 ring-pink-500/50 transition-all shadow-inner resize-none" placeholder="Share your inquiry with our stylists..."></textarea>
                                </div>

                                <button type="button" className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-xl active:scale-95">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 aspect-video rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 premium-shadow">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps?q=Gilgit%20Pakistan&z=12&output=embed"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
