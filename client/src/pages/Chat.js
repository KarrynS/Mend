import React from 'react'
import InitialChat from '../components/SocketChat/InitialChat'

const Chat = (props) => {
    return (
        <>
            <InitialChat optom={props.optom} optomLoggedIn={props.optomLoggedIn}/>  
        </>
    )
}

export default Chat
