import "./TopHome.css"
import Header from "./Header"
import TopMain from "./TopMain"

export default function TopHome() {
    return (
        <>
            <div className="top-home">
                <Header />
                <div className="main-text">
                    <TopMain />
                </div>
            </div>
        </>
    )
}