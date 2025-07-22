import RecipeLibrary from '../../pages/RecipeLibrary'
import About from '../../pages/About';
import './Navbar.css'


function Navbar(){
    return(
        <> 
            <div className="header">
                <h1 className="title">Recipe Library</h1>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="nav-links"><a href="#home">Home</a></li>
                        <li className="nav-links"><a href="#">About</a></li>
                        <li className="nav-links explore-container">
                            Explore<span >
                                    <img className='explore-icon' width="20" height="20" src="../src/assets/down-arrow.png"></img>
                            </span>
                            <div className="dropdown-menu">
                                        <ul>
                                            <li className="nav-links">View All Recipes</li>
                                            <li className="nav-links">Personal Recipes</li>
                                        </ul>
                                    </div>
                        </li>
                    </ul>
                </nav>

                <div className='account-nav'>
                    <button className="account-btn">Login</button>
                    <button className="account-btn">Sign in</button>
                </div>

            </div>
        </>
    )
}
export default Navbar;