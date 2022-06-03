import { Fragment } from "react"

import MainHeader from "../components/Header/MainHeader"
import NavHeader from "../components/Header/NavHeader"

import ContainerHalf from "../components/ContainerHalf"
import ImgHalf from"../components/ImgHalf"

import Footer from "../components/Footer/Footer"

import img from "../imgs/office-1.jpg"
import img2 from "../imgs/office-2.jpg"
import img3 from "../imgs/office-3.jpg"

const About = () => {
    return (
        <Fragment>
          <MainHeader />
          <NavHeader />
          <div className="inline-flex flex-col my-8 lg:flex-row justify-evenly">
            <ContainerHalf title="About Us!" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu. Lorem sed risus ultricies tristique nulla aliquet. Vel orci porta non pulvinar neque. Arcu ac tortor dignissim convallis aenean et tortor. Sed id semper risus in hendrerit gravida rutrum. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Venenatis a condimentum vitae sapien pellentesque habitant. Curabitur gravida arcu ac tortor dignissim convallis aenean. Eget lorem dolor sed viverra ipsum. Pellentesque eu tincidunt tortor aliquam. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vitae purus faucibus ornare suspendisse sed nisi lacus. Volutpat est velit egestas dui id ornare arcu. Pellentesque elit ullamcorper dignissim cras."/>
            <ImgHalf imgSrc={img}/>
          </div>
          <div className="inline-flex flex-col my-8 lg:flex-row justify-evenly">
            <ImgHalf imgSrc={img2}/>
            <ContainerHalf title="Great Prices!" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu. Lorem sed risus ultricies tristique nulla aliquet. Vel orci porta non pulvinar neque. Arcu ac tortor dignissim convallis aenean et tortor. Sed id semper risus in hendrerit gravida rutrum. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Venenatis a condimentum vitae sapien pellentesque habitant. Curabitur gravida arcu ac tortor dignissim convallis aenean. Eget lorem dolor sed viverra ipsum. Pellentesque eu tincidunt tortor aliquam. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vitae purus faucibus ornare suspendisse sed nisi lacus. Volutpat est velit egestas dui id ornare arcu. Pellentesque elit ullamcorper dignissim cras."/>
          </div>
          <div className="inline-flex flex-col my-8 lg:flex-row justify-evenly">
            <ContainerHalf title="Amazing Services!" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu. Lorem sed risus ultricies tristique nulla aliquet. Vel orci porta non pulvinar neque. Arcu ac tortor dignissim convallis aenean et tortor. Sed id semper risus in hendrerit gravida rutrum. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Venenatis a condimentum vitae sapien pellentesque habitant. Curabitur gravida arcu ac tortor dignissim convallis aenean. Eget lorem dolor sed viverra ipsum. Pellentesque eu tincidunt tortor aliquam. Luctus accumsan tortor posuere ac ut consequat semper viverra. Vitae purus faucibus ornare suspendisse sed nisi lacus. Volutpat est velit egestas dui id ornare arcu. Pellentesque elit ullamcorper dignissim cras."/>
            <ImgHalf imgSrc={img3}/>
          </div>
          <Footer />
         </Fragment>
    );
}

export default About