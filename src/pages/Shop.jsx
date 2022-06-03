import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/Header/MainHeader";
import NavHeader from "../components/Header/NavHeader";
import Product from "../components/Product/Product";
import ProductHeader from "../components/Product/ProductHeader";

import p1 from "../imgs/ProductIMG/paper-1.jpg"
import p2 from "../imgs/ProductIMG/paper-2.jpg"
import p3 from "../imgs/ProductIMG/paper-3.jpg"
import p4 from "../imgs/ProductIMG/paper-4.jpg"

import pr1 from "../imgs/ProductIMG/printer-1.jpg"
import pr2 from "../imgs/ProductIMG/printer-2.jpg"
import pr3 from "../imgs/ProductIMG/printer-3.jpg"

import fc1 from "../imgs/ProductIMG/fc-1.jpg"
import fc2 from "../imgs/ProductIMG/fc-2.jpg"

import c1 from "../imgs/ProductIMG/chair-1.jpg"
import c2 from "../imgs/ProductIMG/chair-2.jpg"
import c3 from "../imgs/ProductIMG/chair-3.jpg"
import c4 from "../imgs/ProductIMG/chair-4.jpg"
import c5 from "../imgs/ProductIMG/chair-5.jpg"
import c6 from "../imgs/ProductIMG/chair-6.jpg"
const Shop = () => {
    return (
        <Fragment>
            <MainHeader />
            <NavHeader />

            <ProductHeader section="PAPERS" />
            <div className="inline-flex flex-wrap mx-auto justify-around w-screen">
                <Product imgSrc={p1} title="HP Printer Paper 8.5x11" desc="Great for printing!" price="15.98"/>
                <Product imgSrc={p2} title="Hammermille 8.5x11" desc="Great value" price="10.98"/>
                <Product imgSrc={p3} title="HP Printer Paper 8.5x11 BULK" desc="Tons of paper!" price="35.98"/>
                <Product imgSrc={p4} title="HP Premium Printer Paper 8.5x11" desc="High quality!" price="25.98"/>
            </div>
            
            <ProductHeader section="PRINTERS" />
            <div className="inline-flex flex-wrap mx-auto justify-around w-screen">
                <Product imgSrc={pr1} title="HP Printer" desc="Basic printer" price="125.99"/>
                <Product imgSrc={pr2} title="Cannon Printer" desc="Good overall value!" price="200.48"/>
                <Product imgSrc={pr3} title="Cannon AIO" desc="Perfect for large offices!" price="535.28"/>
            </div>

            <ProductHeader section="FILE CABINETS" />
            <div className="inline-flex flex-wrap mx-auto justify-around w-screen">
                <Product imgSrc={fc1} title="Small File Cabinet" desc="Fits well in small spaces!" price="103.72"/>
                <Product imgSrc={fc2} title="Large File Cabinet With Shelves" desc="More space!" price="186.16"/>
            </div>

            <ProductHeader section="CHAIRS" />
            <div className="inline-flex flex-wrap mx-auto justify-around w-screen">
                <Product imgSrc={c1} title="Basic Chair" desc="Just a basic chair!" price="100.21"/>
                <Product imgSrc={c2} title="Modern Chair" desc="Looks good in modern enviroments!" price="134.12"/>
                <Product imgSrc={c3} title="Classic Chair" desc="A classic!" price="113.99"/>
                <Product imgSrc={c4} title="Gaming Chair" desc="Comfy!" price="256.46"/>
                <Product imgSrc={c5} title="Premium Chair" desc="For the rich!" price="978.2"/>
                <Product imgSrc={c6} title="Budget Chair" desc="For the poor!" price="66.26"/>
            </div>

            <Footer />
        </Fragment>
    )
}

export default Shop;