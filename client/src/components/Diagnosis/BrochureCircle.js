import React from 'react'

const BrochureCircle = ({ pdf, img, alt, title}) => {
    return (
        <>
            <div className="brochureColumn col-3">
                <div className="container">
                    <a href={pdf} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={alt} class="img-thumbnail pdfImg" width="250" height="250"/>  
                    </a>
                    <div className="overlay">{title}</div>
                </div>
                
            </div>
        </>
    )
}

export default BrochureCircle;
