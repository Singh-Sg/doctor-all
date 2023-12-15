import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Section from '../Section/Section'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div style={{ backgroundColor: '#0049B7' }}>
                <br />
                <Header />
                <br />
                <Section/>
                <br />
                <Footer />
            </div>

        </div>
    )
}
