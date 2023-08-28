import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "../Styles/Navbar.module.css"
const Navbar = () => {
    const links=[{link:"/",title:"Home",class:"nav-link home"},
    {link:"/about",title:"About",class:"nav-link about"},
    {link:"/skills",title:"Skills",class:"nav-link skills"},
    {link:"/projects",title:"Projects",class:"nav-link projects"},
    {link:"/contact",title:"Contact",class:"nav-link contact"},
    {link:"/resume",title:"Resume", class:"nav-link resume"}]
  return (
    <div id="nav-menu" className={Styles.navmenu}>
        <img src="https://i.postimg.cc/Jh8w7W3V/Abhay.png" alt="" />
        <div className={Styles.links}>
        {links.map((ele)=>(
            <div><Link to={ele.link} className={ele.class}>{ele.title}</Link></div>
           
        ))}
        </div>
    </div>
  )
}

export default Navbar