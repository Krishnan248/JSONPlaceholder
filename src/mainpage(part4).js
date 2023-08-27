import React from "react"
import './mainpage.css'
import Mainpage from "./mainpage"

const Blogdetails = () => {

    return (
        <div>

            <Mainpage/>
            <a href="" className="blog">Home</a><br />
            <h1 style={{ color: "blue", marginTop: "18%", marginLeft: "33%" }}><b>Posts</b></h1>
            <ul style={{marginLeft:"31%"}}>
                <li><a href="https://blog.typicode.com/husky-git-hooks-autoinstall/">2021-04-02 - Why husky doesn't autoinstall anymore</a></li>
                <li><a href="https://blog.typicode.com/husky-git-hooks-javascript-config/">2021-03-26 - Why husky has dropped conventional JS config</a></li>
                <li><a href="https://blog.typicode.com/husky-5/">2021-01-23 - Husky 5</a></li>
            </ul>

            <p style={{marginTop:"14%" , marginLeft:"33%" , boxShadow:"0px -1px" , width:"31%"}}>© 2021-present Typicode /<a href="https://github.com/typicode"
            > GitHub </a>/ <a href="https://twitter.com/typicode">Twitter</a></p>
        </div>
    )

}
export default Blogdetails