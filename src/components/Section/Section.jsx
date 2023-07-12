import React from 'react'
import "./style.css"
import { sectionCarImage } from '../../utils/utils'



export default function Section() {
    return (
        <>
            <h1 className="text-section">Rent a Luxury Car</h1>
            <section className="section1">
                {sectionCarImage?.map(({ img, text_hover_bottom, text_hover_top }, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="car-box">
                                <img src={img} alt="" className="car" />
                                <div className="car-hover">
                                    <h3 className="text-hover-top">{text_hover_top}</h3>
                                    <h3 className="text-hover-bottom">{text_hover_bottom}</h3>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </section>
        </>
    )
}
