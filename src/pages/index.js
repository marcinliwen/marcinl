import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/global.css"

const IndexPage = ({data}) => {
  var welcome = data.allMarkdownRemark.edges.map(({node})=>  node.html);
  console.log(welcome);
return(

  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div>
      <div dangerouslySetInnerHTML={{ __html: welcome[1]}} />
      </div>
      <div>
        <p>follow me:</p>
        <ul className="tag-list">
          <li className="tag">git</li>
          <li className="tag">linkedin</li>
        </ul>
      </div>
    </section>
    
    <section id="about">
      <div>
        <h2>About</h2>
        <div dangerouslySetInnerHTML={{ __html: welcome[0]}} />
      </div>
      
      <div>
      <p>technologies that I use most often:</p>
      <ul className="skills">
        {data.allSkillTech.nodes.map((node, index)=>(
          <li key={index}>{node.name}</li>
        ))}
      </ul>
      </div>
      
    </section>
    <section id="projects">
      <h2>Projects</h2>
    </section>
    <section id="contact">
      <h2>Contact</h2>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allSkillTech {
      nodes {
        id
        name
      }
    },
  allMarkdownRemark{
    edges {
      node {
        html
        frontmatter {
          title
        }
      }
    }
  }
}
`

