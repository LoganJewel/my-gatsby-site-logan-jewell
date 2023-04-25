import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const About = () =>{
    return(
        <main>
            <Layout pageHeading='About' pageTitle='About Page'>
            Welcome to the about page!
            </Layout>
        </main>
    );
};

export const Head = () => <Seo title="About Me"/>

export default About;