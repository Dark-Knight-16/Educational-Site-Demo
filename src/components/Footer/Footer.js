import "./Footer.css"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from "react-router-dom";

export default function Footer() {

    // Social media links
    const social = {
        github: "https://github.com/Dark-Knight-16",
        twitter: "https://twitter.com/D4rkGh7",
        instagram: "https://www.instagram.com/alex_127.0.0.1/"
    }

    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="about-dark">
                        <h1>Dark Academy</h1>
                        <span>E - Learning</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore inventore odio libero aliquid quibusdam facere? Facere beatae incidunt,
                        </p>
                        <ul className="footer-social">
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

                    <ul className="questions">
                        <li>
                            <h1>Have Questions ?</h1>
                        </li>
                        <li>
                            <PlaceIcon /> <span>Imaginary 45 block patali gali, pan center ke samne, India</span>
                        </li>
                        <li>
                            <PhoneIcon /> <span>+9100000000</span>
                        </li>
                        <li>
                            <MailOutlineIcon /> <span>fake_dark_academy@gmail.com</span>
                        </li>

                    </ul>
                </div>

                <div className="copyright">
                    <p>
                        Copyright &copy; 2023 dark-academy | All rights reserved | Developer - <NavLink to={social.github}>Dark Knight</NavLink>
                    </p>
                </div>

            </div>
        </>
    )
}