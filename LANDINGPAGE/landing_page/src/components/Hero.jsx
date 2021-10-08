import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-description">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab to see your sites load instantly. Try it for free.</p>                
                <button className="chrome">Get it on Chrome</button>
                <button className="firefox">Get it on Firefox</button>                
            </article>
            
            <div className="background-shape"></div>           
            
            <article className="hero-image"></article>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

export default Hero
