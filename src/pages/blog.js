import * as React from 'react';
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const Blog = ({data}) =>{
    return(
        <Layout pageHeading='Blog' pageTitle='Blog Page'>
            <ul>
            {data.allFile.nodes.map(node => {
                return <li key={node.name}>(node.name)</li>
            })}    
            </ul>        
        </Layout>
    );
};

export const query = graphql`
    query{
        allFile(filter: {sourceInstanceName: { eq: "blog"}}){
            nodes{
                name
            }    
        }
    }
`;
export default Blog;