import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {container} from './layout.module.css'
import {heading} from './layout.module.css'
import {navLinks} from './layout.module.css'
import {navLinkItem} from './layout.module.css'
import {navLinkText} from './layout.module.css'
import {siteTitle} from './layout.module.css'

console.log('container: ', container)

const Layout = ({ siteTitle, children }) =>{
  return (
    <main className={container}>
        <p className={heading}>{siteTitle}</p>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
            </ul>
        </nav>
        {children}
    </main>
  );
};

export default Layout;