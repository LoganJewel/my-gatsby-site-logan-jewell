import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image"
import Seo from '../components/seo'

const Home = () =>{
  return (
    <main>
      <Layout pageHeading='Home' pageTitle='Home Page'>
        Welcome, this is my site!
        <StaticImage src='../images/2 Regular Hedgehogs.jpg' alt='Just Some Hedgehogs'/>
    </Layout>
    </main>
  );
};

export const Head = () => <Seo title = "Home Page" />

export default Home;