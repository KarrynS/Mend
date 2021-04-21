import "./style.css";
import React from 'react'
import ListItem from "./listItem"

const SavedSymptoms = (props) => {
    

    return (
        <>
            <div className="symptomContainer">
                <div className="row">
                    <div className=" cardDiv col-md-6 col-md-6">
                        <h3> Saved Symptoms</h3>
                        <ul>
                            
                            {/* list symptoms here */}
                            <ListItem/>
                        </ul>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default SavedSymptoms;
