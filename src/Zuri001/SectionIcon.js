import React from 'react'
import slack from "./Image/slack.png"
import git from "./Image/git.png"
import "./section_icon.css"


export default function SectionIcon() {
  return (
    <div className='container section_icon '>
        <div> <img className='section_image' src={slack}/></div>
        <div> <img className='section_image' src={git}/></div>


    </div>
  )
}
