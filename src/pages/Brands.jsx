import { Fragment } from "react"
import MainHeader from "../components/Header/MainHeader"
import NavHeader from "../components/Header/NavHeader"
import Footer from "../components/Footer/Footer"
import Brand from "../components/Brand/Brand"

import hpLogo from "../imgs/BrandIMG/hp-logo.png"
import threemLogo from "../imgs/BrandIMG/3m-logo.png"
import canonLogo from "../imgs/BrandIMG/canon-logo.png"

const Brands = () => {
    return (
        <Fragment>
            <MainHeader />
            <NavHeader />
                <Brand imgSrc={hpLogo} brandName="HP" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                <hr />
                <Brand imgSrc={threemLogo} imgWidth="300px" brandName="3M" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                <hr />
                <Brand imgSrc={canonLogo} imgWidth="350px" brandName="CANON" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <Footer />
        </Fragment>
    );
}

export default Brands;