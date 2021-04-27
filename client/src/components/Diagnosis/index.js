import React from "react";


const DiagnosisTable = () => {
    return (
        <>
         <div className="diagnosisDiv">
        <table className="table table-borderless">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Prevalence</th>
                <th scope="col">Severity</th>
                <th scope="col">Comments</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody>
            </table>
        </div>   
        </>
    )
}

export default DiagnosisTable;
