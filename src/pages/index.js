import React , { useState }from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

import "../style/global.css"

const IndexPage = ({data}) => {
  const [projectSwith, setProjectSwith] = useState(false);


  var welcome ="";
  var about ="";

  data.allMarkdownRemark.edges.forEach((element, index)=>{
    if(element.node.frontmatter.title === 'welcome'){
      welcome = element.node.html;
    }else if(element.node.frontmatter.title === 'about'){
      about = element.node.html;
    }
  })

return(

  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div>
      <div dangerouslySetInnerHTML={{ __html: welcome}} />
      </div>
      <div>
        <p>follow me:</p>
        <ul className="tag-list">
          <li className="tag"><a href="https://github.com/marcinliwen" target="_blank" rel="noopener noreferrer">git</a></li>
          <li className="tag"><a href="https://linkedin.com/in/marcinliwen" target="_blank" rel="noreferrer noopener">linkedin</a></li>
        </ul>
      </div>
    </section>
    
    <section id="about">
      <div>
        <h2>About</h2>
        <div dangerouslySetInnerHTML={{ __html: about}}  style={{paddingRight: `15%`}}/>
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
      <div className="projects-header">
        <h2>Projects</h2>
        <div className={projectSwith?"switch-container github":"switch-container commercial"}>
          <span className="commercial">Commercial</span>
            <div className="switch">
              <input type="checkbox" id="projects-switch" role="switch" onChange={()=>setProjectSwith(!projectSwith)}/>
              <span className="switcher"></span>
            </div>
          <span class="github">Github</span>
        </div>
        
      </div>
      <div className="projects-container">
        <ul>
        {data.allProjects.nodes.map((node, index)=>(
          <li key={index} className='project-item'>
            <div><h4><a href={node.link}>{node.name}</a></h4></div>
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

