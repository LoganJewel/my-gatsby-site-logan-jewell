import * as React from 'react'
import Layout from '../../components/layout'
import {Link, graphql} from 'gatsby'
import Seo from '../../components/seo'

const Blog = ({data}) =>{
    return(
        <Layout pageHeading='Blog' pageTitle='Blog Page'>
            {data.allMdx.nodes.map(node => {
                <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            })
            }            
        </Layout>
    )
};

export const query = graphql`
    query MyQuery{
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
            }
            id
            }
        }
    }
`;
export const Head = () => <Seo title="Blog Page" />

export default Blog;