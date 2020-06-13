import React , { useState , useRef}from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Timeline from "../components/timeline"
import Github from "../components/github"
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
    <SEO title="Marcin L." />
    <section id="welcome">
      <h2>Hi there!</h2>
      <div>
      <div dangerouslySetInnerHTML={{ __html: welcome}} />
      </div>
      <div className="follow">
        <p>find me:</p>
        <ul className="tag-list">
          <li className="tag"><a href="https://github.com/marcinliwen" target="_blank" rel="noopener noreferrer">git</a></li>
          <li className="tag"><a href="https://linkedin.com/in/marcinliwen" target="_blank" rel="noreferrer noopener">linkedin</a></li>
        </ul>
      </div>
    </section>
    
    <section id="about">
      <h2>About</h2>
      <div>
        
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
    <section id="timeline">
        <h2>Timeline</h2>
      <Timeline data={data.allProjects.nodes}/>
    </section>
    <section id="projects" className={projectSwith?"_github":"_commercial"}>
        <h2>Projects 
        <div className={projectSwith?"switch-container github":"switch-container commercial"}>
        <span className="commercial">Commerce</span>
          <div className="switch">
            <input type="checkbox" id="projects-switch" role="switch" onChange={()=>setProjectSwith(!projectSwith)} />
            <span className="switcher"></span>
          </div>
        <span className="github">Github</span>
      </div>
        </h2>
      <div className="projects-container _com">
        <ul>
        {data.allProjects.nodes.map((node, index)=>(
          <li key={index} className='project-item'>
            <div><h4><a href={node.link} target="_blank" rel="noopener noreferrer">{node.name}</a></h4></div>
            <div className="project-skills"><ul>{node.skills.map(skill=>(<li key={skill+index}>{skill}</li>))}</ul></div>
          </li>
        ))}
        </ul>
        </div>
      <Github />
      
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

