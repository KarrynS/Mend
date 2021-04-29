import React, { useState, useEffect } from 'react'
import { Socket } from 'socket.io';
import io from "socket.io-client";
import Chatbox from './Chatbox';
import "./style.css"

let socket;
const CONNECTION_PORT = 'localhost:3000/'

const InitialChat = () => {

    //States - Before Login
    const [chatLogin, setChatLogin] = useState(false);
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");

    //States - After Login
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([{}]);

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, [CONNECTION_PORT])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log("receive_message", data)
            setMessageList([...messageList, data])
        })
    })

    const connectToRoom = () => {
        setChatLogin(true)
        socket.emit("join_room", room)
    };

    const sendMessage = async () => {

        let messageContent = {
            room: room,
            content: {
                author: name, 
                message: message
            }
        };

        await socket.emit("send_message", messageContent)
        setMessageList([...messageList, messageContent.content])
        setMessage("")

    }

    return (
        
        <>
        <div className="chat">
            
            { !chatLogin ? 
                <div className="logIn">
                    <header class="join-header">
				        <h1><i class="fas fa-smile"></i> iChat</h1>
			        </header>
                    <div className="inputs">
                        <input type="text" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
                        <select name="room" id="room" onChange={(e) => {setRoom(e.target.value)}}>
							<option value="Optometrist">Optometrist</option>
							<option value="General">General</option>
						</select>
                        
                    </div>
                    <div className="divbtn">
                        <button onClick={connectToRoom} className="chatBtn">Start conversation</button>
                    </div>
                </div>
            
            :
            <div className="chatContainer">
                <div className="messages">
                    {messageList.map((val,key) => {
                        return (
                                <div className="messageContainer"
                                    id={val.author === name ? "You" : "Other"}
                                    > 
                                    <div className="messageIndividual"> {val.message}</div>
                                    <h1>{val.author}</h1>
                                </div>
                        )
                    })}
                </div>
                <div className="messageInput">
                    <input type="text" placeholder="Enter message" 
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                    />
                    <button className="sendBtn" onClick={sendMessage}>Send</button>
                </div>
            </div>
            }
        </div>
        </>
    )
}

export default InitialChat;
