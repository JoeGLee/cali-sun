const NavBar = () =>{
    
    return(
        <div className="NavBarContainer">
            <ul className="NavBarButtonContainer">
                <li id="home"><a href="#Home" className="link">Home</a></li>
                <li id="about"><a href="#about" className="link" >About</a></li>
                <li id="Music"><a href="#about" className="link" >Music</a></li>
                <li id="contact"><a href="#about" className="link">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;