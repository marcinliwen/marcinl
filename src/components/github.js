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
    <div>
      {projects.map(item=>(<div>{item.name}</div>))}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default Github;