import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardLinks from "../components/Home/CardLinks";

function Dashboard(props) {

console.log("userInfo props dashbard", props)
    return(
        <>
            <Navbar />
            <CardLinks userInfo={props.userInfo}/>
        </>
    )
}
export default Dashboard;