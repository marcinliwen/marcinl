import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../style/global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="welcome">
      <div>
        <h2>Hi there!</h2>
        <h1>I'm Marcin L.</h1>
        <p>this is my portfolio website</p>
        <p>here you can check the projects I have worked on as <span className="contrast-text">frontend developer</span><br/>and get to know me a little closer</p>
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
        <p>I have been working as a front end developer since 2018, and I immediately started struggling with Smarty, PHP and SQL.</p>
        <p>In the meantime I sing early music as countertenor with Polish early music ansambles.</p>
        <p>If we have the opportunity to talk on Skype, you'll see bookshelves with books behind me.</p>
      </div>
      
      <div>
      <p>technologies that I use most often:</p>
      <ul className="skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>PHP</li>
        <li>SQL</li>
        <li>Prestashop</li>
        <li>Wordpress</li>
        <li>Gatsby.js</li>
        <li>git</li>
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
)

export default IndexPage
