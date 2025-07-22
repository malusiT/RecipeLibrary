import './Hero.css'
import chef from '../../assets/chef-icon.png'

function Hero(){
    return(
        <>
            <section className="hero-section">
                <h2 className="slogan">Unleash Your Inner Chef <img className='chef-icon' width={50} src={chef}></img>— Discover Recipes & Organize Like a Pro</h2>
                    <button className="call-to-action-btn">Explore Recipes</button>
            </section>
        </>
    )
}

export default Hero;