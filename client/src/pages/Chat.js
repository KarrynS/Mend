import React from 'react'
import Footer from '../components/Footer'
import InitialChat from '../components/SocketChat/InitialChat'

const Chat = (props) => {
    return (
        <>
            <InitialChat optom={props.optom} optomLoggedIn={props.optomLoggedIn}/>  
            <Footer/>
        </>
    )
}

export default Chat
