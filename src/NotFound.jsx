import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "./components/landingComponents/NavBar";

const NotFound=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
       // navigate('/login');

    },[])
    return(<>
    <NavBar></NavBar>
    <div className="row text-center ">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
            <h1 className="not404">404</h1>
            <h2 className="notfound">Not Found</h2>
            <h5>The resource requested could not be found on this server......</h5>
            
        </div>
        <div className="col-sm-2"></div>
    </div>
    
        </>)
}
export default NotFound;