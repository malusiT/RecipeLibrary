

function Footer(){

    const currYear = new Date().getFullYear();

    return(
        <>
        <section className="footer">
            <div className="social-media">
                <div className="social-media-icon">Facebook</div>
                <div className="social-media-icon">X</div>
                <div className="social-media-icon">Email</div>
            </div>
            <div className="enquries">
                For any enquries Contact: 0123456789
            </div>

            <div className="copyright">
                <p>Copyright @ RecipeLibrary {currYear}</p>
            </div>

        </section>
        
        </>
    )
}

export default Footer;