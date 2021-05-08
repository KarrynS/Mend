import React, { useState, useEffect, useRef } from 'react';
import io from "socket.io-client";
import "./style.css";
import TopbarOptom from "../Topbar/TopbarOptom";
import Navbar from "../Navbar/Navbar";

let socket;
const CONNECTION_PORT = process.env.CONNECTION_PORT || 'localhost:3000/'


const defaultRoom = "Optometry"
const InitialChat = (props) => {
    console.log("optom", props.optom)
    console.log("optom", props.optom.role)
    console.log("optomLoggedIn", props.optomLoggedIn);

    //States - Before Login
    const [chatLogin, setChatLogin] = useState(false);
    const [room, setRoom] = useState(defaultRoom);
    const [name, setName] = useState("");

    //States - After Login
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const scrollRef =  useRef();

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, [CONNECTION_PORT])

    useEffect(() => {
        socket.on("join_room", message => {
            console.log(message);
        })
        
    })

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log("receive_message", data)
            console.log("current message list", messageList)
            console.log("spreader", [...messageList, data])
            setMessageList([...messageList, data])
        })
    })
  
    useEffect(() => {
       if(scrollRef.current) {
        scrollRef.current.scrollIntoView({behavior: "smooth"})
       } 
    }, [messageList])

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

        await 
        socket.emit("chat_message", messageContent);
        setMessageList([...messageList, messageContent.content]);
        setMessage("");
      
    }

    //Handling disconnecting from chat
    const disconnectChat = () => {
        setChatLogin(false)
    }

    return (
        
        <>
        { props.optom.role === "Optometrist" ? <TopbarOptom/> : <Navbar/> }

        <div className="chat">
            
            { !chatLogin ? 

                // Chatbox Login
                <div className="chatBoxContainer container-fluid">
                    {/* <div className="header">
                    <a id="leave-btn-cross" className="btn" href="/dashboard"><i class="fas fa-times"></i></a>
                    </div> */}
                    <div className="logIn col-6 col-md-offset-3 col-md-">
                        <header class="join-header">
                            <h1><i class="fas fa-eye"></i> iChat</h1>
                            
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
                </div>
            
            :

            // chatbox when user connects
            <div className="chatBoxContainer container-fluid">
                <div className="header">
                    <div className="row chatBoxHeader">
                        <div className="col-6 col-sm-12 colTitle">
                            <h1><i class="fas fa-eye"></i> iChat</h1>
                        </div>
                        <div className="col-6 col-sm-12 colBtn">
                            <button onClick={() => disconnectChat()} id="leave-btn" class="btn" to="/chat"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
                <div className="chatBoxUserInfo">
                            <p className="roomDisplay">Room: {room}</p>
                        </div>
                <div className="chatContainer">
                    <header class="chat-header">
                      
                    </header>
                    <div className="messages" >
                        {console.log("messageList", messageList)}
                        {messageList.length > 0 ?  messageList.map((val,key) => {
                            
                            return (
                                   <> 
                                    
                                    <div className="messageContainer"
                                        id={val.author === name ? "You" : "Other"}
                                        > 
                                        { val.author === name ?
                                            <>
                                            <div className="messageIndividual"> {val.message}</div>
                                            <h1>{val.author}</h1> 
                                            </>
                                            : 
                                            <>
                                            <h1>{val.author}</h1> 
                                            <div className="messageIndividual"> {val.message}</div>
                                            </>
                                            }
                                        
                                    </div>
                                    
                                    </>
                            )
                        }) : 
                                <p className="welcomeDisplay">Welcome to iChat, {name}</p>
                           
                        }
                        <div ref={scrollRef}></div>
                    </div>
                    <div className="messageInput">
                        <input value={ message} type="text" placeholder="Enter message" 
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <button className="sendBtn" onClick={sendMessage}>Send</button>
                    </div>
            </div>
          
            </div>
            }
        </div>
        </>
    )
}

export default InitialChat;
