import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import Testimonials from '../Components/Testimonials';
import { Helmet } from 'react-helmet';
import { FaStar, FaShoppingBag, FaTruck, FaHeadset, FaUndo, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import heroImage1 from '../assets/hero_baby.png';
import heroImage2 from '../assets/hero_toddler.png';
import heroImage3 from '../assets/hero_sleeping.png';
import { products } from '../Data/products';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1920&q=80",
            title: "Carefully Crafted For Little Miracles",
            subtitle: "Premium 2024 Collection",
            desc: "Discover our most gentle organic cotton collection, where every thread is woven with love and safety.",
            cta: "Explore Collection",
            link: "/shop",
            accent: "from-pink-400 to-rose-600"
        },
        {
            image: heroImage2,
            title: "Style Meets Infinite Curiosity",
            subtitle: "Adventurous Toddler Wear",
            desc: "Durable, breathable, and vibrant outfits designed for the small humans with big dreams.",
            cta: "View Originals",
            link: "/shop?category=Toddler",
            accent: "from-indigo-400 to-blue-600"
        },
        {
            image: heroImage3,
            title: "The Softest Hug For Every Night",
            subtitle: "Luxe Sleepwear",
            desc: "Ensuring deep, safe, and blissful sleep with our ultra-breathable organic cotton pajamas.",
            cta: "Shop Sleep",
            link: "/shop?category=Baby",
            accent: "from-amber-300 to-orange-500"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const newArrivals = products.slice(0, 8);
    const bestSellers = products.filter(p => p.id >= 17 && p.id <= 20);

    return (
        <div className="bg-white dark:bg-gray-950 transition-colors duration-500 overflow-x-hidden">
            <Helmet>
                <title>Sunshine Baby Garments | Premium Kids Wear</title>
            </Helmet>
            <Navbar />

            {/* Premium Hero Slider */}
            <section className="relative h-[65vh] md:h-[75vh] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                    >
                        <div className="absolute inset-0">
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                        </div>
                        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
                            <div className={`max-w-3xl p-8 md:p-16 rounded-[3rem] glass dark:glass-dark premium-shadow transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`h-[2.5px] w-12 bg-gradient-to-r ${slide.accent}`}></div>
                                    <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-black text-white">{slide.subtitle}</span>
                                </div>
                                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-lg text-white/80 mb-10 max-w-lg leading-relaxed font-medium">
                                    {slide.desc}
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                    <Link to={slide.link} className={`w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r ${slide.accent} text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] transition-all shadow-xl shadow-pink-500/20 flex items-center justify-center gap-3 active:scale-95 whitespace-nowrap`}>
                                        {slide.cta} <FaArrowRight className="text-xs" />
                                    </Link>
                                    <Link to="/shop" className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-gray-900 transition-all active:scale-95 whitespace-nowrap flex items-center justify-center">
                                        View All
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Vertical Sidebar Indicators */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className="group relative flex items-center justify-end"
                        >
                            <span className={`mr-4 text-[10px] font-black tracking-widest transition-all ${idx === currentSlide ? 'text-white opacity-100 translate-x-0' : 'text-white opacity-0 translate-x-4'}`}>
                                0{idx + 1}
                            </span>
                            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-pink-500 scale-[2.5]' : 'bg-white/40 group-hover:bg-white'}`} />
                        </button>
                    ))}
                </div>
            </section>

            {/* Trust Features Section */}
            <section className="py-12 bg-gray-50 dark:bg-gray-900/50 border-b dark:border-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { icon: <FaTruck />, title: "Express Shipping", desc: "Delivery within 48 hours" },
                            { icon: <FaShieldAlt />, title: "Secure Checkout", desc: "100% Protected payments" },
                            { icon: <FaUndo />, title: "Easy Returns", desc: "7 Days Hassle-free return" },
                            { icon: <FaHeadset />, title: "Premium Support", desc: "Dedicated help line" }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 group">
                                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm text-pink-500 text-2xl group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <h4 className="font-black text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">{feature.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories (Luxury Circle Grid) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block">Curation</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white">Shop By Category</h2>
                        </div>
                        <Link to="/shop" className="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-pink-500 pb-1 hover:text-pink-500 transition">View Full Catalog</Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
                        {[
                            { name: 'New In', link: '/shop', img: require('../assets/hero_baby.png') },
                            { name: 'Little Man', link: '/shop?category=Baby%20Boy', img: require('../assets/cat_baby_boy.png') },
                            { name: 'Princess', link: '/shop?category=Baby%20Girl', img: require('../assets/banner_girl.png') },
                            { name: 'Toddlers', link: '/shop?category=Toddler', img: require('../assets/hero_toddler.png') },
                            { name: 'Footwear', link: '/shop?category=Accessories', img: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80' },
                            { name: 'Discovery', link: '/shop', img: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?auto=format&fit=crop&w=600&q=80' }
                        ].map((cat, idx) => (
                            <Link to={cat.link} key={idx} className="group text-center">
                                <div className="relative aspect-square rounded-full overflow-hidden mb-6 premium-shadow group-hover:-translate-y-2 transition-all duration-500 p-1.5 bg-gradient-to-tr from-pink-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    </div>
                                    <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>
                                </div>
                                <h3 className="text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-[0.2em] group-hover:text-pink-500 transition">{cat.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals - Sleek Grid */}
            <section className="py-24 bg-gray-50 dark:bg-gray-950/40">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-500 mb-2 block">Just Landed</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">New Store Arrivals</h2>
                        <p className="mt-4 text-gray-500 font-medium max-w-lg mx-auto">Explore our latest treasures, designed for maximum comfort and style.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link to="/shop" className="px-12 py-5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
                            Discover More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Best Sellers - Curated Row */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">Most Gifted Items</h2>
                            <p className="text-gray-500 font-medium mt-2">These are the favorites our community loves most.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/shop" className="px-8 py-3 bg-pink-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-600 transition shadow-lg">View All Favorites</Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellers.map(product => (
                            <div key={product.id} className="group flex flex-col">
                                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 premium-shadow-hover bg-gray-100">
                                    {product.badge && (
                                        <div className="absolute top-5 left-5 z-20">
                                            <span className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />
                                    <button className="absolute bottom-6 left-6 right-6 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95">
                                        Quick Shop <FaShoppingBag />
                                    </button>
                                </Link>
                                <div className="px-2">
                                    <Link to={`/product/${product.id}`} className="block">
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-pink-500 transition">{product.name}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-black text-pink-500">Rs.{product.price}</span>
                                            <span className="text-xs text-gray-400 line-through font-bold">Rs.{Math.round(product.price * 1.3)}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* High-End Promo Banner */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="relative rounded-[3rem] overflow-hidden bg-gray-900 min-h-[500px] flex items-center">
                        <div className="absolute inset-0 opacity-50">
                            <img src={require('../assets/hero_baby.png')} alt="Collection" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
                        <div className="relative z-10 p-12 md:p-24 max-w-2xl">
                            <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Seasonal Edit</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.05]">Winter Magic <br /><span className="text-gradient-indigo">Is Now Live.</span></h2>
                            <p className="text-lg text-white/70 mb-12 font-medium leading-relaxed">
                                Don't let the cold stop the fun. Our new winter collection features premium thermal insulation and adorable festive prints.
                            </p>
                            <Link to="/shop" className="px-12 py-5 bg-white text-gray-950 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl active:scale-95 inline-block">
                                Shop The Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <div className="py-12 border-t dark:border-gray-800">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-4">Follow The Sunshine</h3>
                    <div className="flex justify-center gap-6">
                        {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social) => (
                            <a key={social} href="#" className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-100 hover:text-pink-500 transition">{social}</a>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;