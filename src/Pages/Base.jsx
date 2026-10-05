import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({ children }) {

    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}

export default Base