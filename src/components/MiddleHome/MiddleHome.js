import "./MiddleHome.css"

export default function MiddleHome() {
    return (
        <>
            <div className="middle-home">

                {/* Left side image */}
                <div className="left-img">
                    <img src="../../../images/e-learning.jpg" alt="" />
                </div>

                {/* Right side content */}
                <div className="right-content">
                    <h3>Learn Anything</h3>
                    <h1>Benefits About Online Learning Expertise</h1>
                    <div className="right-box-card">
                        <img src="../../../svg/online-course.png" alt="" />
                        <div className="right-box-text">
                            <h3>Online Course</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto voluptate, libero numquam ab harum blanditiis praesentium omnis culpa dolor illum quos. Porro eos beatae nam aspernatur accusantium, ducimus impedit?
                            </p>
                        </div>
                    </div>
                    <div className="right-box-card">
                        <img src="../../../svg/certificate.png" alt="" />
                        <div className="right-box-text">
                            <h3>Earn A Certificate</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto voluptate, libero numquam ab harum blanditiis praesentium omnis culpa dolor illum quos. Porro eos beatae nam aspernatur accusantium, ducimus impedit?
                            </p>
                        </div>
                    </div>
                    <div className="right-box-card">
                        <img src="../../../svg/expert.png" alt="" />
                        <div className="right-box-text">
                            <h3>Learn With Expert</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt iusto voluptate, libero numquam ab harum blanditiis praesentium omnis culpa dolor illum quos. Porro eos beatae nam aspernatur accusantium, ducimus impedit?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}