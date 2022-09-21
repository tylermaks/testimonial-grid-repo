import React from "react"
import "../Assets/Styles/Testimonial/Testimonial.css"

function Testimonial({id, img, name, highlight, quote}) {
    return(
        <section className={"testimonial-container  testimonial-container--" + id}>
            <div className="client-info">
                <img src={img} alt="User" />
                <article>
                    <h4 className="name">{name}</h4>
                    <p>Verified Graduate</p>
                </article> 
            </div>

            <article className="testimonial-text">
                <h2 className="highlight">{highlight}</h2>
                <p className="testimonial">"{quote}"</p>
            </article>
        </section>
    )
}

export default Testimonial;