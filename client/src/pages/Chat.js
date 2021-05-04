import React from 'react'
import InitialChat from '../components/SocketChat/InitialChat'

const Chat = (props) => {
    return (
        <>
            <InitialChat optom={props.optom}/>  
        </>
    )
}

export default Chat
