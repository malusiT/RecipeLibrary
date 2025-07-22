import firstTestimonial from '../../assets/testimonials/Testimonial-1.jpg'
import secondTestimonial from '../../assets/testimonials/Testimonial-2.jpg'
import thirdTestimonial from '../../assets/testimonials/Testimonial-3.jpg'


const testimonials = [
    {
        id:1,
        name: "Macy",
        image: firstTestimonial,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore minima repudiandae tenetur enim temporibus odit ipsum, nemo voluptatibus. Nostrum aspernatur natus explicabo maxime nam itaque incidunt alias, quasi accusamus.",
        reviewStars: 3
    },
    {   
        id:2,
        name: "John",
        image: secondTestimonial,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore minima repudiandae tenetur enim temporibus odit ipsum, nemo voluptatibus. Nostrum aspernatur natus explicabo maxime nam itaque incidunt alias, quasi accusamus.",
        reviewStars: 5
    },
    {   
        id:3,
        name: "John",
        image: thirdTestimonial,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolore minima repudiandae tenetur enim temporibus odit ipsum, nemo voluptatibus. Nostrum aspernatur natus explicabo maxime nam itaque incidunt alias, quasi accusamus.",
        reviewStars: 4
    }
]



function Testimonials(){
    return (
         <>
            <h3>Testimonials</h3>
            <div className="card-container">
                {
                testimonials.map((testimonial) =>{
                    return(
                        <div key={testimonial.id}>
                            <div className="card" >
                                <div className='top-section'>
                                    <h4 className="testimonee-name">{testimonial.name}</h4>
                                    <img src={testimonial.image} alt={testimonial.name + "image"}/>
                                    <div>
                                        {"⭐".repeat(testimonial.reviewStars)}
                                    </div>
                                </div>
                                <div className='bottom-section'>
                                    <p>{testimonial.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }        
            </div>
         </>
    )
}

export default Testimonials;