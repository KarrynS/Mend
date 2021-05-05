import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CardLinks from "../components/Home/CardLinks";
import Footer from "../components/Footer";

function Dashboard(props) {

console.log("userInfo props dashbard", props)
    return(
        <>
            <Navbar />
            <CardLinks userInfo={props.userInfo}/>
            <Footer />
        </>
    )
}
export default Dashboard;