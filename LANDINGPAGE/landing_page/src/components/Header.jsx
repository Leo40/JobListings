import React from 'react'

const Header = () => {
    return (
        <nav className="nav-bar">
            <div>
                <span className="bookmark-icon"></span>
                <span className="bookmark">BOOKMARK</span>
            </div>
            <article>
                <button>FEATURES</button>
                <button>PRICING</button>
                <button>CONTACT</button>
                <button>LOGIN</button>
            </article>
            <div></div>
        </nav>
    )
}

export default Header
