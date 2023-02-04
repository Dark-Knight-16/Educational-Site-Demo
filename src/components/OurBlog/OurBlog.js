import "./OurBlog.css"
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function OurBlog() {
    return (
        <>
            <div className="our-blog">
                <h2>Blog</h2>
                <h1>Recent From Our Blog</h1>

                <div className="blog-flex">
                    <div className="blog-card">
                        <img src="../../../images/learn-ui.jpg" alt="" />

                        <ul className="user-cal-comment">
                            <li>
                                <PersonIcon /> <span>Dark Knight</span>
                            </li>
                            <li>
                                <CalendarMonthIcon /> <span>Feb 04 2023</span>
                            </li>
                            <li>
                                <ChatIcon /> <span>4 Comments</span>
                            </li>
                        </ul>

                        <div className="blog-text">
                            <h2>Learn UI / UX and build your career in this industry.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas mollitia perferendis nisi, tenetur assumenda maiores blanditiis? Autem sed ipsum neque ut labore aliquam? Illum iste expedita modi quae incidunt?
                            </p>
                        </div>

                    </div>

                    <div className="blog-card">
                        <img src="../../../images/business.jpg" alt="" />

                        <ul className="user-cal-comment">
                            <li>
                                <PersonIcon /> <span>Dark Knight</span>
                            </li>
                            <li>
                                <CalendarMonthIcon /> <span>Feb 04 2023</span>
                            </li>
                            <li>
                                <ChatIcon /> <span>7 Comments</span>
                            </li>
                        </ul>

                        <div className="blog-text">
                            <h2>Manage your business in a better way by learning business.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas mollitia perferendis nisi, tenetur assumenda maiores blanditiis? Autem sed ipsum neque ut labore aliquam? Illum iste expedita modi quae incidunt?
                            </p>
                        </div>

                    </div>

                    <div className="blog-card">
                        <img src="../../../images/software-engineering.jpg" alt="" />

                        <ul className="user-cal-comment">
                            <li>
                                <PersonIcon /> <span>Dark Knight</span>
                            </li>
                            <li>
                                <CalendarMonthIcon /> <span>Feb 04 2023</span>
                            </li>
                            <li>
                                <ChatIcon /> <span>10 Comments</span>
                            </li>
                        </ul>

                        <div className="blog-text">
                            <h2>Build your dream software and career in engineering.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas mollitia perferendis nisi, tenetur assumenda maiores blanditiis? Autem sed ipsum neque ut labore aliquam? Illum iste expedita modi quae incidunt?
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}