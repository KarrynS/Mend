import React from 'react'
import './style.css';
import BrochureCircle from "./BrochureCircle";

//importing static PDF files
import AgeRelatedMD from "../../pdf/AgeRelatedMD.pdf";
import Amblyopia from "../../pdf/Amblyopia.pdf";
import Astigmatism from "../../pdf/Astigmatism.pdf";
import Blepharitis from "../../pdf/Blepharitis.pdf";
import Cataracts from "../../pdf/Cataracts.pdf";
import ColourVision from "../../pdf/Colour-Vision.pdf";
import ComputerVision from "../../pdf/ComputerVision.pdf";
import ContactLenses from "../../pdf/ContactLenses.pdf";
import Diabetes from "../../pdf/Diabetes.pdf";
import DryEye from "../../pdf/DryEye.pdf";
import EyeAllergy from "../../pdf/EyeAllergy.pdf";
import Floaters from "../../pdf/Floaters.pdf";
import Glaucoma from "../../pdf/Glaucoma.pdf";
import Hyperopia from "../../pdf/Hyperopia.pdf";
import Myopia from "../../pdf/Myopia.pdf";
import Presbyopia from "../../pdf/Presbyopia.pdf";

//importing images
import AMDImg from "../../img/AMD.png";
import AmblyopiaImg from "../../img/Amblyopia.png";
import AstigmatismImg from "../../img/Astigmatism.png";
import BlepharitisImg from "../../img/Blepharitis.png";
import CataractsImg from "../../img/Cataracts.png";
import ColourVisionImg from "../../img/ColourVision.png";
import ComputersAndVisionImg from "../../img/ComputersAndVision.png";
import ContactLensesImg from "../../img/ContactLenses.png";
import DiabetesImg from "../../img/Diabetes.png";
import DryEyeImg from "../../img/DryEye.png";
import EyeAllergyImg from "../../img/EyeAllergy.png";
import FloatersImg from "../../img/Floaters.png";
import GlaucomaImg from "../../img/Glaucoma.png";
import HyperopiaImg from "../../img/Hyperopia.png";
import MyopiaImg from "../../img/Myopia.png";
import PresbyopiaImg from "../../img/Presbyopia.png";

const dataArray = [
    {
        title:"AMD",
        pdf: AgeRelatedMD,
        img: AMDImg,
        alt: "Age Related Macular Degeneration"
    },
    {
        title:"Amblyopia",
        pdf: Amblyopia,
        img: AmblyopiaImg,
        alt: "Amblyopia"
    }, 
    {
        title:"Astigmatism",
        pdf: Astigmatism,
        img: AstigmatismImg,
        alt: "Astigmatism"
    },
    {
        title:"Blepharitis",
        pdf: Blepharitis,
        img: BlepharitisImg,
        alt: "Blepharitis"
    },
    {
        title:"Cataracts",
        pdf: Cataracts,
        img: CataractsImg,
        alt: "Cataracts"
    },
    {
        title:"Colour Vision",
        pdf: ColourVision,
        img: ColourVisionImg,
        alt: "ColorVision"
    },
    {
        title:"Computers & Vision",
        pdf: ComputerVision,
        img: ComputersAndVisionImg,
        alt: "Computers and Vision"
    },
    {
        title:"Contact Lenses",
        pdf: ContactLenses,
        img: ContactLensesImg,
        alt: "Contact Lenses"
    },
    {
        title:"Diabetes",
        pdf: Diabetes,
        img: DiabetesImg,
        alt: "Diabetes"
    },
    {
        title:"Dry Eyes",
        pdf: DryEye,
        img: DryEyeImg,
        alt: "DryEye"
    },
    {
        title:"Eye Allergy",
        pdf: EyeAllergy,
        img: EyeAllergyImg,
        alt: "Eye Allergy"
    },
    {
        title:"Floaters",
        pdf: Floaters,
        img: FloatersImg,
        alt: "Floaters"
    },
    {
        title:"Glaucoma",
        pdf: Glaucoma,
        img: GlaucomaImg,
        alt: "Glaucoma"
    },
    {
        title:"Hyperopia",
        pdf: Hyperopia,
        img: HyperopiaImg,
        alt: "Hyperopia"
    },
    {
        title:"Myopia",
        pdf: Myopia,
        img: MyopiaImg,
        alt: "Myopia"
    },
    {
        title:"Presbyopia",
        pdf: Presbyopia,
        img: PresbyopiaImg,
        alt: "Presbyopia"
    },
]

const Brochures = () => {

    return (
        <>
        <div className="brochuresDiv">
            <div className="titleDiv row">
                <div className="col-4 col-sm-6">
                    <h3>Informational Brochures</h3>
                </div>
                <div className="col-7 col-sm-6">
                    <p className="titleDivP">Easy to understand brochures summarising key facts about different eye conditions</p>
                </div>
            </div>
            <div className="brochureContainer">
                <div className="row brochureRow">

                {dataArray.map((data, index) => {
                        return (
                            <BrochureCircle 
                            pdf={data.pdf}
                            img={data.img}
                            key={index}
                            alt={data.alt}
                            title={data.title}
                        />
                        )
                })}
                </div>
            </div>
            <div className="closingDiv">
                <p>*Informational brochures are provided by <a href="https://www.optometry.org.au/">Optometry Australia. </a></p>
                <p>They are for educational purposes only and should not replace or subsitite advice given by a qualified optometrist*</p>
            </div>
        </div>   

        </>
    )
}

export default Brochures;
