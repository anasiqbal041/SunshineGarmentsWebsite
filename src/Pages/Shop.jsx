import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import { products as allProducts } from '../Data/products';
import { FaFilter, FaChevronDown } from 'react-icons/fa';
import bannerGirl from '../assets/banner_girl.png';
import bannerBoy from '../assets/banner_boy.png';

const Shop = () => {
    const [searchParams] = useSearchParams();
    const urlCategory = searchParams.get('category');

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(5000);

    const categories = ['All', 'Baby Boy', 'Baby Girl', 'Toddler', 'Accessories'];

    useEffect(() => {
        if (urlCategory) {
            setSelectedCategory(urlCategory);
        } else {
            setSelectedCategory('All');
        }
    }, [urlCategory]);

    const filteredProducts = allProducts.filter(product => {
        let categoryMatch = false;
        if (selectedCategory === 'All') {
            categoryMatch = true;
        } else if (selectedCategory === 'Baby Boy') {
            categoryMatch = product.category === 'Baby Boy' || (product.category === 'Baby' && (product.gender === 'Boy' || product.gender === 'Unisex'));
        } else if (selectedCategory === 'Baby Girl') {
            categoryMatch = product.category === 'Baby Girl' || (product.category === 'Baby' && (product.gender === 'Girl' || product.gender === 'Unisex'));
        } else if (selectedCategory === 'Sale') {
            categoryMatch = product.badge && (product.badge === 'Sale' || product.badge.includes('%') || product.badge === 'Best Seller');
        } else {
            categoryMatch = product.category === selectedCategory;
        }

        const priceMatch = product.price <= priceRange;
        return categoryMatch && priceMatch;
    });

    const getBanner = () => {
        if (selectedCategory === 'Baby Girl') return bannerGirl;
        if (selectedCategory === 'Baby Boy') return bannerBoy;
        return null;
    };

    const activeBanner = getBanner();

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen transition-all duration-500">
            <Helmet>
                <title>Shop Collection | Sunshine Baby Garments</title>
            </Helmet>
            <Navbar />

            {/* Premium Header/Banner */}
            {activeBanner ? (
                <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                    <img src={activeBanner} alt={selectedCategory} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                        <div className="container mx-auto px-6 pb-12 md:pb-20">
                            <span className="text-pink-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Store Catalog</span>
                            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-2xl capitalize leading-none">{selectedCategory}</h1>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="pt-32 pb-16 border-b dark:border-gray-900">
                    <div className="container mx-auto px-6">
                        <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Exquisite Curation</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">Shop Collection</h1>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                    {/* Refined Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <div className="sticky top-32 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8 flex items-center gap-3">
                                    <FaFilter className="text-pink-500" /> Filter By Category
                                </h4>
                                <ul className="space-y-6">
                                    {categories.map(cat => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${selectedCategory === cat ? 'text-pink-500 pl-6' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                                            >
                                                {selectedCategory === cat && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-pink-500 rounded-full"></span>}
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Price Threshold</h4>
                                <div className="space-y-6">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5000"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="w-full h-1 bg-gray-100 dark:bg-gray-900 rounded-full appearance-none cursor-pointer accent-pink-500"
                                    />
                                    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Max Price</span>
                                        <span className="text-sm font-black text-gray-900 dark:text-white">Rs. {priceRange}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800">
                                <h5 className="text-xs font-black text-indigo-900 dark:text-indigo-400 mb-2 uppercase">Need Help?</h5>
                                <p className="text-xs text-indigo-700/60 dark:text-indigo-400/60 font-medium leading-relaxed mb-4">Our style advisors are available via WhatsApp to help you choose the perfect outfit.</p>
                                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:underline">Chat With Us &rarr;</a>
                            </div>
                        </div>
                    </aside>

                    {/* Enhanced Product Grid */}
                    <main className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{filteredProducts.length} Items Listed</span>
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white">Sort By Default</span>
                                <FaChevronDown size={10} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-20">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-32 bg-gray-50 dark:bg-gray-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
                                <p className="text-gray-400 font-bold mb-6 italic text-lg">No treasures found matching your filters.</p>
                                <button onClick={() => setSelectedCategory('All')} className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform">Reset Filters</button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Shop;
