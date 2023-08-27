import React from "react";
import './mainpage.css'
import { Link } from "react-router-dom";
const Mainpage=()=>{

    return(
        <div>
            <ul className="topic">
                <Link to={'/JSON'}><li style={{fontWeight: "700" , fontSize:"16px"}}><b>JSONPlaceholder</b></li></Link>
                <a href="https://jsonplaceholder.typicode.com/guide/"><li  style={{marginLeft:"450px" ,fontSize:"18px" , color:"black"}} className="1topic">Guide</li></a>
                <a href="https://github.com/sponsors/typicode"><li className="topic1">Sponsor this project </li></a>
                <Link to={'/Blogdetails'}><li className="topic1">Blog</li></Link>
                <a href="https://my-json-server.typicode.com/"><li className="topic1">My JSON Server</li></a>
            </ul>
        </div>
    )
}
export default Mainpage


