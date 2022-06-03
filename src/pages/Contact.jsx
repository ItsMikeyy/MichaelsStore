import { Fragment } from "react"

import MainHeader from "../components/Header/MainHeader"
import NavHeader from "../components/Header/NavHeader"

import Footer from "../components/Footer/Footer"
import ContactForm from "../components/Contact/ContactForm"
const Contact = () => {
    return(
        <Fragment>
            <MainHeader />
            <NavHeader />
            <ContactForm />
            <Footer />
        </Fragment>
    )
}

export default Contact