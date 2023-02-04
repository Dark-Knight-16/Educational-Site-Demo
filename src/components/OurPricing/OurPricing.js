import "./OurPricing.css"

export default function OurPricing() {
    return (
        <>
            <div className="our-pricing">
                <h2>Our Pricing</h2>
                <h1>Pricing & Packages</h1>

                <div className="pricing-flex">
                    <div className="pricing-card">
                        <h3>Basic Plan</h3>
                        <h1>&#x24; 20K</h1>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci quaerat saepe praesentium ad fugiat impedit, dolor unde consequatur quod autem veritatis eum dicta ipsum dolorum quisquam. Aperiam, officiis corporis?
                        </p>

                        <a href="/" className="pricing-btn">Get Started</a>
                    </div>

                    <div className="pricing-card">
                        <h3>Premium Plan</h3>
                        <h1>&#x24; 80K</h1>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci quaerat saepe praesentium ad fugiat impedit, dolor unde consequatur quod autem veritatis eum dicta ipsum dolorum quisquam. Aperiam, officiis corporis?
                        </p>

                        <a href="/" className="pricing-btn">Get Started</a>
                    </div>

                    <div className="pricing-card">
                        <h3>Golden Plan</h3>
                        <h1>&#x24; 120K</h1>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci quaerat saepe praesentium ad fugiat impedit, dolor unde consequatur quod autem veritatis eum dicta ipsum dolorum quisquam. Aperiam, officiis corporis?
                        </p>

                        <a href="/" className="pricing-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </>
    )
}