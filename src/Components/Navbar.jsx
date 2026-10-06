import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaUser, FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaMapMarkerAlt, FaSun, FaMoon, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const { getCartCount } = useCart();
    const cartCount = getCartCount();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const categories = [
        {
            name: 'New Arrivals',
            link: '/shop',
            color: 'pink',
            image: require('../assets/hero_baby.png'),
            sub: ['Latest Collection', 'Trending', 'Best Sellers', 'Editor\'s Pick']
        },
        {
            name: 'Boys',
            link: '/shop?category=Baby%20Boy',
            color: 'indigo',
            image: require('../assets/cat_baby_boy.png'),
            sub: ['Bodysuits & Rompers', 'Sleepwear', 'Tops', 'Bottoms', 'Winter Wear', 'Traditional']
        },
        {
            name: 'Girls',
            link: '/shop?category=Baby%20Girl',
            color: 'pink',
            image: require('../assets/banner_girl.png'),
            sub: ['Suits & Sets', 'Tops & Shirts', 'Frocks', 'Ethnic Wear', 'Tracksuits & Sweatshirts', 'Sweaters & Jackets']
        },
        {
            name: 'Toddler',
            link: '/shop?category=Toddler',
            color: 'emerald',
            image: require('../assets/hero_toddler.png'),
            sub: ['Activewear', 'Denim', 'Sets', 'Jackets', 'School Gear']
        },
        {
            name: 'Footwear',
            link: '/shop?category=Accessories',
            color: 'violet',
            image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80',
            sub: ['Booties', 'Sandals', 'Sneakers', 'Formal']
        }
    ];

    return (
        <header className={`font-sans sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass premium-shadow py-1' : 'bg-white dark:bg-gray-950 py-0'}`}>
            {/* Top Bar - Info (Compact & Premium) */}
            <div className={`bg-gray-900 text-white text-[11px] py-1.5 hidden md:block dark:bg-gray-950 transition-all duration-500 ${scrolled ? 'h-0 opacity-0 invisible overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center opacity-80">
                    <div className="flex items-center space-x-6 tracking-wide">
                        <span className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition"><FaPhoneAlt size={10} /> +92 300 1234567</span>
                        <span className="flex items-center gap-2 hover:text-pink-400 cursor-pointer transition"><FaEnvelope size={10} /> support@sunshine.pk</span>
                    </div>
                    <div className="flex items-center space-x-6 tracking-wide uppercase font-semibold">
                        <span className="cursor-pointer hover:text-pink-400 transition">Track Order</span>
                        <span className="cursor-pointer hover:text-pink-400 transition">Store Locator</span>
                        <button onClick={toggleTheme} className="flex items-center gap-1.5 hover:text-pink-400 transition ml-4 bg-white/10 px-3 py-1 rounded-full">
                            {theme === 'light' ? <FaMoon size={10} /> : <FaSun size={10} className="text-yellow-400" />}
                            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Bar */}
            <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-8">
                {/* Logo */}
                <Link to="/" className="text-2xl font-black flex items-center dark:text-white tracking-tighter shrink-0">
                    <span className="text-pink-500 uppercase">Sunshine</span>
                    <span className="text-gray-900 dark:text-gray-100 ml-2 font-bold tracking-widest uppercase text-xs">Baby Garments</span>
                </Link>

                {/* Navigation Links - Centered */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center space-x-8 text-[13px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                        <li>
                            <Link to="/" className={`pb-1 border-b-2 transition ${location.pathname === '/' ? 'border-pink-500 text-pink-500' : 'border-transparent hover:text-pink-500'}`}>Home</Link>
                        </li>
                        {categories.map((cat, idx) => (
                            <li key={idx} className="relative group">
                                <Link to={cat.link} className="pb-1 border-b-2 border-transparent hover:border-pink-500 hover:text-pink-500 transition-all duration-300 cursor-pointer">
                                    {cat.name}
                                </Link>
                                {/* Refined Mega Menu */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="glass premium-shadow rounded-2xl overflow-hidden flex ring-1 ring-black/5 dark:ring-white/10">
                                        <div className="w-2/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                            <img src={cat.image} alt={cat.name} className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                <span className="text-white text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                                            </div>
                                        </div>
                                        <div className="w-3/5 p-6 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl">
                                            <h4 className="text-[10px] font-black text-gray-400 mb-4 tracking-[0.2em] uppercase">Collections</h4>
                                            <ul className="grid grid-cols-1 gap-y-3 text-left normal-case text-gray-600 dark:text-gray-300 font-semibold text-sm">
                                                {cat.sub.map((item, id) => (
                                                    <li key={id}>
                                                        <Link to={`${cat.link}&sub=${item}`} className="hover:text-pink-500 transition flex items-center gap-3 group/item">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-200 group-hover/item:bg-pink-500 group-hover/item:scale-125 transition"></div>
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <li>
                            <Link to="/shop?category=Sale" className="pb-1 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 transition text-red-500">Sale</Link>
                        </li>
                    </ul>
                </nav>

                {/* Search & Actions */}
                <div className="flex items-center gap-6 shrink-0">
                    <div className="hidden md:flex items-center relative group">
                        <input
                            type="text"
                            placeholder="Find something special..."
                            className="w-48 xl:w-64 bg-gray-100 dark:bg-gray-800/50 border-transparent focus:bg-white dark:focus:bg-gray-800 border-2 focus:border-pink-500 focus:ring-0 rounded-full py-1.5 px-4 pr-10 text-xs transition-all duration-300 placeholder:text-gray-400 font-medium"
                        />
                        <FaSearch className="absolute right-3.5 text-gray-400 group-focus-within:text-pink-500 transition cursor-pointer" size={12} />
                    </div>

                    <div className="flex items-center gap-5 text-gray-800 dark:text-gray-300">
                        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition hover:scale-110">
                            <FaWhatsapp size={20} />
                        </a>
                        <Link to="/cart" className="relative group hover:scale-110 transition shrink-0">
                            <FaShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900 group-hover:scale-110 transition animate-pulse">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-800 dark:text-white">
                            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Refined */}
            <div className={`lg:hidden fixed inset-0 z-[100] bg-white dark:bg-gray-950 transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <Link to="/" className="text-xl font-black tracking-tight" onClick={() => setIsOpen(false)}>
                            <span className="text-pink-500 uppercase">Sunshine</span>
                            <span className="ml-2 text-gray-900 dark:text-white uppercase text-[10px] tracking-[0.25em]">Baby</span>
                        </Link>
                        <button onClick={() => setIsOpen(false)} className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-6 text-xl font-bold uppercase tracking-tight">
                        <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Home</Link></li>
                        <li><Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Shop All</Link></li>
                        <li><Link to="/shop?category=Baby%20Boy" onClick={() => setIsOpen(false)} className="hover:text-indigo-500">Boys</Link></li>
                        <li><Link to="/shop?category=Baby%20Girl" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Girls</Link></li>
                        <li><Link to="/shop?category=Sale" onClick={() => setIsOpen(false)} className="text-red-500">Sale</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-400">Contact</Link></li>
                    </ul>

                    <div className="mt-auto pt-10 border-t border-gray-100 dark:border-gray-800">
                        <button
                            onClick={toggleTheme}
                            className="flex items-center gap-3 w-full justify-between bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl font-bold"
                        >
                            <span>{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</span>
                            {theme === 'light' ? <FaMoon /> : <FaSun className="text-yellow-400" />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
