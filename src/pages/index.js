import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

import "../style/global.css"

const IndexPage = ({data}) => {
  var welcome = data.allMarkdownRemark.edges.map(({node})=>  node.html);
  console.log(welcome);
return(

  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div>
      <div dangerouslySetInnerHTML={{ __html: welcome[0]}} />
      </div>
      <div>
        <p>follow me:</p>
        <ul className="tag-list">
          <li className="tag"><a href="https://github.com/marcinliwen">git</a></li>
          <li className="tag"><a href="www.linkedin.com/in/marcinliwen">linkedin</a></li>
        </ul>
      </div>
    </section>
    
    <section id="about">
      <div>
        <h2>About</h2>
        <div dangerouslySetInnerHTML={{ __html: welcome[1]}} />
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
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        <ul>
          <li>Butik.pl: - coding styles for the entire store based on PSD (Prestashop), - maintenance and new features</li>
          <li>Paklo.pl: - coding styles for the entire store based on PSD (Prestashop); - Subject SG integration, - maintenance and new features</li>
          <li>b2b.rodan24.pl: - coding styles for the entire store based on PSD (Prestashop), - maintenance and new features</li>
          <li>Salon.pl: - coding styles for the entire store based on PSD (Prestashop), - maintenance and new features</li>
          <li>Shoperly.pl: - coding styles for category pages based on PSD (Prestashop) - page speed optimalisation, - Inpost integration, - maintenance and new features</li>
          <li>Sohoshop.pl: - conding style based on PSD (Wordpress)</li>
          <li>Sas24.pl: - maintenance and new features</li>
          <li>biuronimo.pl: - maintenance and new features</li>
          <li>b2b.biurozplusem.pl: - maintenance and new features</li>
        </ul>
      </div>
      
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <Contact />
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
  allMarkdownRemark
  {
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

