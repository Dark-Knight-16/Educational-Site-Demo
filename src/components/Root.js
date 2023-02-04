import "./Root.css"
import TopHome from "./TopHome/TopHome"
import MiddleHome from "./MiddleHome/MiddleHome"
import OurCourses from "./OurCourses/OurCourses"
import Testimonial from "./Testimonial/Testimonial"
import OurBlog from "./OurBlog/OurBlog"
import OurPricing from "./OurPricing/OurPricing"
import NewsLetter from "./NewsLetter/NewsLetter"
import Footer from "./Footer/Footer"

export default function Root() {
    return (
        <>
            <div className="root-layout">
                <TopHome />
                <MiddleHome />
                <OurCourses />
                <Testimonial />
                <OurBlog />
                <OurPricing />
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}