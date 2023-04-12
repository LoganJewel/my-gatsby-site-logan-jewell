import * as React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({data}) =>{
    return(
        <Layout pageHeading='Blog' pageTitle='Blog Page'>
            {data.allMdx.nodes.map(node => {
                return <article key={node.id}
                >
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.date}</p>
                    <MDXRenderer>{node.body}</MDXRenderer>
                </article>;
            })}            
        </Layout>
    );
};

export const query = graphql`
    query MyQuery{
        allMdx(sort: {fields:
        frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
            }
        }
    }
`;
export default Blog;