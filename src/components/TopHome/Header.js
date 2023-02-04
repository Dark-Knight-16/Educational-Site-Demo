import "./Header.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [show, setShow] = useState(true)

    // Social media links
    const social = {
        github: "https://github.com/Dark-Knight-16",
        twitter: "https://twitter.com/D4rkGh7",
        instagram: "https://www.instagram.com/alex_127.0.0.1/"
    }

    return (
        <>
            <div className="header">
                <div className="logo-social">
                    <div className="logo">
                        <h1>Dark Academy</h1>
                        <p>E-Learning</p>
                    </div>
                    <ul className="social">
                        <li>
                            <NavLink to={social.instagram}><InstagramIcon style={{ color: "#0cf1a6" }} /></NavLink>
                        </li>
                        <li>
                            <NavLink to={social.twitter}><TwitterIcon style={{ color: "#0cf1a6" }} /></NavLink>
                        </li>
                        <li>
                            <NavLink to={social.github}><GitHubIcon style={{ color: "#0cf1a6" }} /></NavLink>
                        </li>
                    </ul>
                </div>
                <div className="links-close">
                    <ul className={show ? "nav-links" : "show-links"}>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>All Courses</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Team</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="close">

                        <button className="toggle" onClick={() => { setShow(!show) }}>
                            {
                                show ? <DensityMediumIcon /> : <CloseIcon />
                            }
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}