import React from "react";
import "./style.css";
import pic1 from "../../img/eyeissue.jpg";
import pic2 from "../../img/modeleye.jpg";
import pic3 from "../../img/diagnosis_book.jpg";
import pic4 from "../../img/rainboweye.jpg";

const CardLinks = (props) => {
    console.log("Cardlink userInfo", props);

    return (
        <>
            <div className="dashboardcontainer">
                <div className="card-deck cd1">
                    <div className="card card-cd1">
                        <div className="card-body">
                            <div className="cd1Imgdiv col-md-6" >
                                <img className="pic1" src={pic1} alt="eye"/>
                            </div>
                            <div className="cd1textdiv col-md-6">
                                <h1 className="card-title"><i className="fas fa-exclamation-triangle"></i>Got an eye issue?</h1>
                                <p className="card-text">Record your symptoms without any fuss! Save as many records as you want and we'll keep track of the details.</p>
                                <a href="/symptoms" className="btn btn-primary btn-symptom">New Symptom</a>                   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck cd2">
                    <div className="card card-cd2">    
                        <div className="card-body">
                            <div className="cd2Imgdiv col-md-6" >
                                <img className="pic2" src={pic2} alt="eye"/>
                            </div>
                            <div className="cd2textdiv col-md-6">
                                <h1 className="card-title"><i className="fas fa-user-md"></i> Visited the optometrist?</h1>                             
                                <p className="card-text">Your optometrist will record details of your visit. View your custom management plan here to help you on the road to recovery.</p>
                                <a href="management" className="btn btn-primary btn-optom">See Management Plan</a>                
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="card-deck cd3">
                    <div className="card card-cd3">
                        <div className="card-body">
                            <div className="cd3Imgdiv col-md-6" >
                                <img className="pic3" src={pic3} alt="eye"/>
                            </div>
                            <div className="cd3textdiv col-md-6">
                                <h1 className="card-title"><i className="fas fa-book-medical"></i> Received your diagnosis?</h1>
                                <p className="card-text">Want to learn more about your condition? Search for specific eye related information here. </p>
                                    <a href="diagnosis" className="btn btn-primary btn-medical">Learn more</a>                
                            </div>
                        </div>
                    </div>
                </div>    
                <div className="card-deck cd4">
                    <div className="card card-cd4">    
                        <div className="card-body">
                            <div className="cd4Imgdiv col-md-6" >
                                <img className="pic4" src={pic4} alt="eye"/>    
                            </div>
                            <div className="cd4textdiv col-md-6">
                                <h1 className="card-title"><i className="fa fa-comments"></i> Need more assistance?</h1>                             
                                <p className="card-text">Don't worry if you have more questions following your visit with the optometrist. Easily join a chat with your optometrist or enter discussions with other members of the Mend community.</p>
                                <a href="chat" className="btn btn-primary btn-chat">iChat</a>   
                                </div>
                           
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLinks;
