import * as React from 'react'
import {Link} from 'gatsby'
import {container} from './layout.module.css'
import {heading} from './layout.module.css'
import {navLinks} from './layout.module.css'
import {navLinkItem} from './layout.module.css'
import {navLinkText} from './layout.module.css'

console.log('container: ', container)

const Layout = ({ pageTitle, pageHeading, children }) =>{
  return (
    <main className={container}>
        <title>{pageTitle}</title>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
    </main>
  );
};

export default Layout;