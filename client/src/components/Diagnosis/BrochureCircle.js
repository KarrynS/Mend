import React from 'react'

const BrochureCircle = ({ pdf, img, alt, title}) => {
    return (
        <>
            <div className="brochureColumn col-lg-3 col-md-4 col-sm-6">
                <div className="container">
                    <a href={pdf} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={alt} class="img-thumbnail pdfImg" />  
                    </a>
                    <div className="overlay">{title}</div>
                </div>
                
            </div>
        </>
    )
}

export default BrochureCircle;


// width="250" height="250"