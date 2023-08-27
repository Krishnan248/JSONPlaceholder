import React from "react";
import './Project.css'
//import { useNavigation } from "react-router-dom";
import './project background.jpg'
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Blogdetails from "./mainpage(part4)";
import { Button } from "@react-md/button";
import Rootway from "./mainpage(part3)";
import JSONPlaceholder from "./mainpage(part2)";
const First = () => {

    return (
        <Routes>
            <Route path='/Blogdetails' element={<Blogdetails />}></Route>
            <Route path='/Rootway' element={<Rootway />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/createaccount" element={<Createaccount />}></Route>
            <Route path="/Forgot" element={<Forgot />}></Route>
            <Route path="/JSON" element={<JSONPlaceholder />}></Route>
        </Routes>
    )
}
export default First


const Login = () => {

    
    //---------------------------------------------
    const [user, setuser] = useState();

    const username = (e) => {
        setuser(e.target.value)
    }
    //---------------------------------------------

    const [pass, setpass] = useState();

    const password = (e) => {
        setpass(e.target.value)
    }

    //--------------------------------------------- 
    const [error, seterror] = useState()
    const [errorpass, seterrorpass] = useState()
    
    const getvalue = (v) => {

        v.preventDefault();
        if (user.length == 0) {
            seterror(true)
        } else {
            seterror(false)
        }

        if (pass.length == 0) {
            seterrorpass(true)
        } else {
            seterrorpass(false)
        }

    }
//--------------------------------------------------------------------------------------------
    const navigate = useNavigate();
        const Gotonextpage=()=>{
            //write code to navigate if 'error' anf 'errorpass' both are false
            if (error == false && errorpass == false) {
            
                    navigate('/Rootway')
                }
            }
    //--------------------------------------------------------------------
    const [passwordShown, setPasswordShown] = useState(true);
    const Password = () => {
        setPasswordShown(!passwordShown);
    }
    //--------------------------------------------------------------------
    return (
        <div>

            <div className="border">
                <div className="bordertitle"><h1>உங்காலை அம்புடண் வரவெக்கிரோம்</h1></div>
                <form onSubmit={getvalue}>
                    <div className="border2">
                        <div className="logintitle"><h1>BCG காய்கணிகள்</h1></div>

                        {error ? <div> <label style={{
                            color: "red", border: "1px solid white", position: "absolute",
                            left: "603px", bottom: "330px", boxShadow: "1px 0px 9px"
                        }}>Invalid UserName</label></div> : ""}   <input type="text" name="details" className="login" placeholder="USERNAME (OR) E-MAIL" value={user} onChange={username}></input><br />
                        {errorpass ? <div> <label style={{
                            color: "red", border: "1px solid white", position: "absolute",
                            left: "754px", bottom: "330px", boxShadow: "1px 0px 9px"
                        }}>Invalid password</label></div> : ""}   <input type={passwordShown ? "password" : "text"} name="details" className="loginpass" value={pass} onChange={password} placeholder="PASSWORD" />
                        <input onClick={Password} type="checkbox" className="check"></input><br /><br />
                        <div><a href="/createaccount" style={{ color: "blue", cursor: "pointer", marginLeft: "23%" }}><ins>Create Account</ins></a>
                            <a href="/Forgot" style={{ marginLeft: "14%", color: "blue", cursor: "pointer" }}><ins>Forgot Password</ins></a>

                        </div>
                        <button  className="loginbutton" onClick={Gotonextpage} style={{ marginTop: "20px", width: "268px", marginLeft: "106px" }} ><b>LOG IN</b> </button>
                    </div>
                </form>
                <div>

                </div>
                <div className="infromation"><p><b>தகாவல் :</b> நிங்கால் உல்லெ செல்வாதார்க்கு உங்காலது username , password கோடுக்கா வெண்டும் உங்கள் இடாம்
                    username password இல்லை எண்ரால் create account முலாம் நிங்காள் புதிய account டை create பண்ணா முடியும் </p></div>

            </div>
        </div>
    )
}

const Createaccount = () => {

    const [passwordShown, setPasswordShown] = useState(true);
    const Password = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <div className="createaccount">
                <div className="createaccountborder">
                    <div className="createaccounttitle"> <p> <b>Account Details</b> </p></div>
                    <input type="text" name="firstname" className="name" placeholder="FirstName*"></input>
                    <input type="text" name="lastname" className="name" placeholder="LastName*"></input><br />
                    <input type="date" placeholder="Date Of Brith" className="date"></input>
                    <input type="email" placeholder="E-MAIL (OR)  USERNAME" className="email"></input>
                    <input type={passwordShown ? "password" : "text"} className="password" placeholder=" NEW PASSWORD" />
                    <input onClick={Password} type="checkbox" className="check"></input><br /><br />
                    <input type={passwordShown ? "password" : "text"} className="cpassword" placeholder=" CONFORM PASSWORD" />
                    <input onClick={Password} type="checkbox" className="check"></input><br /><br />
                    <Link to="/"><Button variant="contained" style={{ marginLeft: "26px", width: "350px", height: "34px" }} >Submit</Button></Link>
                </div>
            </div>

        </div>
    )
}


const Forgot = () => {

    return (
        <div>
            <div className="createaccount">
                <div className="createaccountborder">
                    <div className="createaccounttitle"> <p> <b>FORGOT PASSWORD</b> </p></div>

                    <input type="email" placeholder="E-MAIL (OR)  USERNAME" className="email"></input>

                    <Link to="/"><Button variant="contained" style={{ marginLeft: "26px", width: "350px", height: "34px" }}>Submit</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

