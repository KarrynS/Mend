import React from "react";
import "./style.css";

const CardLinks = () => {
    return (
        <>
        <div className="imgDiv">
            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-exclamation-triangle"></i>Got an eye issue?</h5>
                            <p className="card-text">Record your symptoms without any fuss! Save as many records as you want and we'll keep track of the details.</p>
                                <a href="/symptoms" className="btn btn-primary symptomBtn">New Symptom</a>                    
                        </div>
                        <div className="cardImg">

                        </div>
                    </div>
                    <div className="card">    
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-user-md"></i> Visited the optometrist?</h5>                             
                            <p className="card-text">View your custom management plan to help you on the road to recovery</p>
                                <a href="management" className="btn btn-primary">See Management Plan</a>                
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><i className="fas fa-book-medical"></i> Recieved your diagnosis?</h5>
                            <p className="card-text">Want to learn more about your condition?</p>
                                <a href="diagnosis" className="btn btn-primary">Learn more</a>                
                        </div>
                    </div>
                    <div className="card">    
                        <div className="card-body">
                            <h5 className="card-title"><i className="fa fa-comments"></i> Need more assistance?</h5>                             
                            <p className="card-text">Join a chat with your optometrist or chat with other members of the community</p>
                                <a href="chat" className="btn btn-primary">Chat</a>                
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
        </>
    )
}

export default CardLinks;
