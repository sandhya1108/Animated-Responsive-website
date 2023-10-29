import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <>
        <nav>
        <div className="navbar navbar-expand-lg nbm">
            <Link to="https/www.youtube.com/" className="navbar-brand nb  active">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"><span className="navbar-toggle-icon"></span></button>
            <div className="collapse navbar-collapse nm" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link active nl ">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/about" className="nav-link nl ">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link nl ">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/contact" className="nav-link nl ">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Navbar;