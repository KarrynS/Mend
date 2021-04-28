import React, { useState } from 'react'
import "./style.css"

const InitialChatBox = () => {
    const [chatLogin, setchatLogin] = useState(false);


    return (
        
        <>
        <div className="chat">
            { !chatLogin ? 
                <div className="logIn">
                    <div className="inputs">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Room" />
                    </div>
                    <div className="divbtn">
                        <button className="chatBtn">Start conversation</button>
                    </div>
                </div>
            
            :
                <h1> Logged In</h1>
            }
        </div>
        </>
    )
}

export default InitialChatBox;
