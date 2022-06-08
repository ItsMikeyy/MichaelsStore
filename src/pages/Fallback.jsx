import { Fragment } from "react"
import MainHeader from "../components/Header/MainHeader"
import NavHeader from "../components/Header/NavHeader"
import Footer from "../components/Footer/Footer"

const Fallback = () => {
    return (
        <Fragment>
            <MainHeader />
            <NavHeader />
            <h1 className="text-center my-16 text-6xl">404</h1>
            <p className="text-center">Page not found</p>
            <Footer />
        </Fragment>
    )
}

export default Fallback