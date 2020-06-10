import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Github =()=>{
    const [hasError, setErrors] = useState(false);
    const [projects, setProjects] = useState([]);

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/marcinliwen/repos");
    const data = await res.json();
      setProjects(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
console.log(projects);
  return (
    <div className='projects-container _git'>
      {projects.map(item=>(item.stargazers_count === 1 ?<GitProject data={item}/>:null))}
    </div>
  );
}

const GitProject =(props)=>{
  return(
    <div className='project-item' key={props.data.id}>
       <div><h4><a href={props.data.html_url} target="_blank" rel="noopener noreferrer">{props.data.name}</a></h4></div>
      <div className="project-skills">
        {props.data.description}
        <div> language: {props.data.language}</div>
      </div>
      <div className="project-skills">
        {props.data.homepage?<a href={props.data.homepage} target="_blank" rel="noopener noreferrer">Demo</a>:null}
        
        </div>

    </div>
  )
}
export default Github;