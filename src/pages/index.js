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
      <div dangerouslySetInnerHTML={{ __html: welcome[1]}} />
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
      <div>
        <h2>Projects</h2>
        <button>commercial</button>
       <button>github</button>
      </div>
      <div className="projects-container">
        <ul>
        {data.allProjects.nodes.map((node, index)=>(
          <li key={index} className='project-item'>
            <div><h4><a href={node.link}></a>{node.name}</h4></div>
            <div className="project-skills"><ul>{node.skills.map(skill=>(<li>{skill}</li>))}</ul></div>
          </li>
        ))}
        </ul>
      </div>
      
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <Contact />
    </section>
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
    allProjects {
      nodes {
        id
        name
        link
        skills
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

