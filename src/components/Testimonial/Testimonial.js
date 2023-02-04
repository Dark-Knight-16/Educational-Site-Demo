import "./Testimonial.css"

export default function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <h2>Testimonial</h2>
                <h1>Our Successful Students</h1>
                <div className="testimonial-students">
                    <div className="student-card">
                        <div className="std-img-name">
                            <img src="../../../images/tony.jpg" alt="" />
                            <div className="std-name">
                                <h3>Tony Stark</h3>
                                <span>Owner of Iron Man suite</span>
                            </div>
                        </div>
                        <div className="std-text">
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non placeat nemo ullam sapiente, incidunt, mollitia aperiam unde quia velit quae atque maiores
                            </span>
                        </div>
                    </div>

                    <div className="student-card">
                        <div className="std-img-name">
                            <img src="../../../images/batman.jpg" alt="" />
                            <div className="std-name">
                                <h3>Bruce Wayne</h3>
                                <span>Owner of Wayne Enterprises and the Wayne Foundation</span>
                            </div>
                        </div>
                        <div className="std-text">
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non placeat nemo ullam sapiente, incidunt, mollitia aperiam unde quia velit quae atque maiores
                            </span>
                        </div>
                    </div>

                    <div className="student-card">
                        <div className="std-img-name">
                            <img src="../../../images/natasha.jpg" alt="" />
                            <div className="std-name">
                                <h3>Natasha Romanoff</h3>
                                <span>Beautiful KGB Agent</span>
                            </div>
                        </div>
                        <div className="std-text">
                            <span>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non placeat nemo ullam sapiente, incidunt, mollitia aperiam unde quia velit quae atque maiores
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}