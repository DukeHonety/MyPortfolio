
const Nav = () => {
    return (<div className="flex justify-center items-center w-full bg-black text-white h-55 md:h-85 md:p-10 text-30">
        <ul className="flex">
            <li><a href="#about-section" className="nav-link">About</a></li>
            <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
            <li><a href="#services-section" className="nav-link">Develop part</a></li>
            <li><a href="#skills-section" className="nav-link">Skills</a></li>
            <li><a href="#contact-section" className="nav-link">Contact</a></li>
        </ul>
    </div>);
}

export default Nav;