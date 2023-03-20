import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {container} from './layout.module.css'
import {heading} from './layout.module.css'
import {navLinks} from './layout.module.css'
import {navLinkItem} from './layout.module.css'
import {navLinkText} from './layout.module.css'
import {siteTitle} from './layout.module.css'

console.log('container: ', container)

const Layout = ({ pageTitle, pageHeading, children }) =>{
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
        <title>{(pageTitle) | (data.site.siteMetadata.title)}</title>
        <p className={siteTitle}>(data.site.siteMetadata.title)</p>
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
            </ul>
        </nav>
        <h1 className={heading}>{pageHeading}</h1>
        {children}
    </main>
  );
};

export default Layout;