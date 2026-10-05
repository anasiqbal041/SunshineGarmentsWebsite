import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
    return (
        <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-bounce-slow flex items-center justify-center group"
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
                Chat With Us
            </span>
        </a>
    );
};

export default WhatsAppFloat;
