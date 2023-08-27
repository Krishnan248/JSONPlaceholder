import React, { useState } from "react";
import mainpic from './IBItATn.png'
import main2pic from './mockend.svg'
import './mainpage.css'
import Mainpage from "./mainpage";

const JSONPlaceholder = () => {

    const bracket = {
        "first": "{",
        "second": "}"
    };
    const [button, setButton] = useState(

        function App() {
            return (
                <div>
                    <p className="answer1">{bracket.first}{bracket.second}</p>
                </div>
            )
        })

    function handleClick() {
        setButton(
            <div>
                <pre className="answer2">
                    <code >
                        <p>{bracket.first}</p>
                        <span>"userId"</span>
                        <span>:</span><span>1</span><span>,</span><br /><span>"id"</span><span>:</span> <span>1</span>
                        <span>,</span><br /><span>"title"</span><span>:</span> <span>"delectus aut autem"</span><span>,</span><br />
                        <span>"completed"</span><span>:</span> <span>false</span><p>{bracket.second}</p>

                    </code>
                </pre>
                <p style={{ marginLeft: "22%" }}>Congrats you've made your first call to JSONPlaceholder! 😃 🎉 </p></div>
        );
    }


    return (
        <div>
            <Mainpage/>
            <div>
                <h1 className="JSONPlaceholder" style={{ fontSize: "380%" }}>JSON Placeholder</h1>
                <h3 style={{ marginLeft: "22%", fontSize: "140%", color: "#222222" }}>Free fake API for testing and prototyping.</h3>
                <h3 style={{ marginLeft: "22%", fontSize: "140%", color: "#222222" }}>Powered by <a href="https://www.google.com/search?client=firefox-b-d&q=json">
                    JSON Server</a> + <a href="https://www.google.com/search?client=firefox-b-d&q=bcg+land+survey">
                        LowDB.</a> Tested with XV. </h3>
                <h3 style={{ marginLeft: "22%", fontSize: "120%", color: "#222222" }}>Serving ~2 billion requests each month.</h3>
            </div>



            <div>
                <h1 style={{ marginTop: "20%", marginLeft: "22%" }}>Sponsors</h1>
                <p style={{ marginLeft: "22%", fontSize: "90%" }}>JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖 </p>
                <a href="https://colorhunt.co/palettes/grey-black"><img src={mainpic} style={{ height: "60px", marginTop: "1%", marginLeft: "22%" }}></img></a> <br />
                <a href="https://bcggroupofcompany.com/"><img src={main2pic} style={{ height: "60px", marginTop: "4%", marginLeft: "22%" }}></img></a>
            </div>


            <div>
                <h1 style={{ marginLeft: "22%" }}>Try it</h1>
                <p style={{ marginLeft: "22%" }}>Run this code here, in a console or from any site:</p>
                <pre className="code">
                    <code>
                        <span style={{ marginLeft: "5%" }}>fetch</span>
                        <span>(</span>
                        <span>'https://jsonplaceholder.typicode.com/todos/1'</span>
                        <span>)</span><br />
                        <span style={{ marginLeft: "5%" }}>.</span>
                        <span>then</span>
                        <span>(</span>
                        <span>response</span>
                        <span>=&gt;</span>
                        response
                        <span>.</span>
                        <span>json</span>
                        <span>(</span>
                        <span>)</span>
                        <span>)</span><br />
                        <span style={{ marginLeft: "5%" }}>.</span>
                        <span>then</span>
                        <span>(</span>
                        <span>json</span>
                        <span>=&gt;</span>
                        console
                        <span>.</span>
                        <span>log</span>
                        <span>(</span>
                        json
                        <span>)</span>
                        <span>)</span>
                    </code>
                </pre><br />

                <p style={{ marginLeft: "22%" }}>Run this code here, in a console or from any site:</p>
                <button className="button" onClick={handleClick}>
                    Run script</button>
                <p>{button}</p>
            </div>

            <div>
                <h1 style={{ marginLeft: "22%", marginTop: "10%" }}>When to use</h1>
                <p style={{ marginLeft: "22%", fontSize: "18px" }}>JSONPlaceholder is a free online REST API that you can use
                    whenever you need some fake data. It can be in a README on</p>
                <p style={{ marginLeft: "22%", fontSize: "18px" }}>GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow,
                    ...or simply to test things locally.</p>
            </div>

            <div>
                <h1 style={{ marginLeft: "22%", marginTop: "8%" }}>Resources</h1>
                <p style={{ marginLeft: "293px", fontSize: "106%" }}>JSONPlaceholder comes with a set of 6 common resources:</p>

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_posts</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>100 posts</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_comments</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>500 comments</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_albums</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>100 albums</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_photos</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>5000 photos</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_todos</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>200 todos</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_users</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>10 users</p><br />

                <p style={{ marginLeft: "23%", fontSize: "105%" }}><b>Note:</b> resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</p>

            </div>
            <div>
                <h1 style={{ marginLeft: "22%", marginTop: "8%" }}>Routes</h1><br />
                <p style={{ marginLeft: "22%", fontSize: "105%" }}>All HTTP methods are supported. You can use http or https for your requests.</p><br />
                
                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_posts</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>100 posts</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_comments</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>500 comments</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_albums</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>100 albums</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_photos</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>5000 photos</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_todos</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>200 todos</p><br />

                <a style={{ marginLeft: "23%", fontSize: "18px" }} href="https://jsonplaceholder.typicode.com/posts" target="_blank">/_users</a>
                <p style={{ marginLeft: "45%", marginTop: "-1%", fontSize: "18px" }}>10 users</p><br />
                
                <p style={{marginLeft:"22%" , fontSize:"105%"}}><b>Note:</b> see <a 
                href="https://jsonplaceholder.typicode.com/guide/">guide</a> for usage examples.</p>
            
                <h1 style={{marginTop:"10%" , marginLeft:"22%"}}>Use your own data</h1>
                <p style={{ marginLeft:"22%"}}>With our sponsor<a href="https://mockend.com/"> Mockend </a> and a simple GitHub repo, you can have your own fake online REST server in seconds.</p>
                <a href="https://github.com/sponsors/typicode" style={{marginLeft:"22%"}}>You can sponsor this project (and others) on GitHub</a>
            <p style={{ marginLeft:"22%"}}>Coded and maintained with ❤️ by typicode © 2022 </p>
            </div>
        </div>


    )
}
export default JSONPlaceholder