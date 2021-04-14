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
                            <h5 className="card-title">Got an eye issue?</h5>
                            <i className="fas fa-exclamation-triangle"></i>       
                            <p className="card-text">Record your symptoms without any fuss! Save as many records as you want and we'll keep track of the details.</p>
                                <a href="/symptoms" class="btn btn-primary symptomBtn">New Symptom</a>                    
                        </div>
                    </div>
                    <div className="card">    
                        <div className="card-body">
                            <h5 className="card-title">Made an appointment with the optometrist?</h5>
                            <i className="fas fa-user-md"></i>  
                            <p className="card-text">Send your optometrist a treatment plan request to help you on the road to recovery</p>
                                <a href="treatment" class="btn btn-primary">Send treatment request</a>                
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Recieved your diagnosis?</h5>
                            <i className="fas fa-book-medical"></i>  
                            <p className="card-text">Want to learn more about your condition?</p>
                                <a href="diagnosis" class="btn btn-primary">Learn more</a>                
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
        </>
    )
}

export default CardLinks;
