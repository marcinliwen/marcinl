import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { SvgIcon } from '@material-ui/core';
import TransitionsModal from './modal';


import "./timeline.css"
const Timeline = () =>{
    
    return(
        <div className="timeline-wrapper">
            <div className="timeline-container">
            <Timeitem 
                date={'2012'} 
                position={'Countertenor'}  
                company={'freelancer'}
                description={'classical singer, early music concerts and recordings with Polish vocal ensembles and orchestras'}
            />
            <Timeitem 
                date={'2015'} 
                position={'Music composer'}  
                company={'freelancer'}
                description={'music for theatre play, commercials'}
            />
            <Timeitem 
                date={'2018'} 
                position={'Frontend developer'}  
                company={'Sohoshop.pl'}
                description={'PSD to HTML/CSS/JS, RWD'}
                projects={['butik.pl', 'paklo.pl', 'b2b.rodan24.pl']}
            />
            <Timeitem 
                date={'2019'} 
                position={'Frontend / backend developer'}  
                company={'Sohoshop.pl'}
                description={'PSD to HTML/CSS/JS, SQL/PHP/smarty, RWD, PWA,  page performance, maintenance and new features'}
                projects={['salon.pl', 'sas24.pl', 'mybee.pl', 'b2b.biurozplusem.pl', 'biuronimo.pl']}
            />
            </div>
        </div>
    )
}

const Timeitem = (props) =>{
    const [openDescription, setOpenDescription] = useState(false);
    return(
        <div className="timeline item">
            <div className="date">{props.date}</div>
            <div className={openDescription?"body -open":"body"}>
                <div className="title">
                    <div className='position'>{props.position}</div>
                    <div className='company'>{props.company}</div>
                </div>
                <div className="description">{props.description}</div>
                {props.projects
                    ?<div className="more" onClick={()=>setOpenDescription(!openDescription)}> 
                        {openDescription
                            ?<SvgIcon component={RemoveCircleOutlineIcon} style={{fontSize: 18}}/>
                            :<SvgIcon component={AddCircleOutlineIcon} style={{fontSize: 18}}/>
                        }
                    </div>
                    : null
                }
              <Projects projects={props.projects?props.projects:null}/>
            </div>
        </div>
    )
}

const Projects = (props) =>{
    if(props.projects){
        return(
        <div className="projects">
                <h4>Projects:</h4>
            <ul>
                 {props.projects.map((item, index)=>(<li key={index}>{item}</li>))}
            </ul>

        </div>
        )
    }else{
        return(null)
    }
}

export default Timeline;
