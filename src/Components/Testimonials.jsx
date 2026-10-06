import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Happy Mom',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        text: "The quality of the baby clothes is absolutely amazing! My little one feels so comfortable, and the fabrics are so soft. Will definitely be buying more!"
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Verified Buyer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        text: "Fast delivery and beautiful packaging. The toddler tracksuit fits my son perfectly. Highly recommend Anas for stylish and durable kids' wear."
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Mother of Two',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
        rating: 4,
        text: "I love the variety of designs available. The festive collection is adorable. Customer service was also very helpful with sizing questions."
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-indigo-500 font-bold uppercase tracking-widest text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">What Parents Say</h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                    <p className="max-w-xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
                        Trusted by thousands of happy parents. Here's what they have to say about their experience with Anas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative group border border-gray-100 dark:border-gray-700"
                        >
                            <div className="absolute top-6 right-8 text-indigo-100 dark:text-gray-700 text-6xl opacity-50 group-hover:text-indigo-200 dark:group-hover:text-gray-600 transition-colors duration-300 pointer-events-none">
                                <FaQuoteLeft />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-50 dark:border-gray-700"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
                                    <span className="text-indigo-500 text-sm font-medium">{testimonial.role}</span>
                                </div>
                            </div>

                            <div className="flex text-yellow-400 text-sm mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"} />
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic relative z-10">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
