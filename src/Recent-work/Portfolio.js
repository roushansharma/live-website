import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';   
import OwlCarousel from 'react-owl-carousel2';
import '../../node_modules/react-owl-carousel2/lib/styles.css'
// import 'react-owl-carousel2/style.css'

const options = { 
    loop: false,
    margin: 20,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    dots: false,
    navText: ['', ''],
    responsive: {
        0: {
            items: 1,
            stagePadding: 60,
        },
        600: {
            items: 1,
            stagePadding: 100,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 3,
        },
        1400: {
            items: 3,
        },
        1600: {
            items: 5,
        },
    },
};

// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

function CrouselPortfolio(){
    return(
        <OwlCarousel options={options}  >
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-1.jpeg" className="w-100" alt=""  />
                    <div className="desPort">Sketch The Photos</div>
                </div>
            </div>
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-2.jpeg" className="w-100" alt="" />
                    <div className="desPort">Evotech - Evolution in Technology</div>
                </div>
            </div>  
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-3.jpeg" className="w-100" alt="" />
                    <div className="desPort">Elliott Moss - Proven Methodology</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-4.jpeg" className="w-100" alt="" />
                    <div className="desPort">Leasing Towers</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-5.jpeg" className="w-100" alt="" />
                    <div className="desPort">Igaa</div>
                </div>
            </div> 
            <div>
                <div className="innerPort position-relative">
                    <img src="images/port-6.jpeg" className="w-100" alt="" />
                    <div className="desPort">Rizingsun</div>
                </div>
            </div> 
        </OwlCarousel>
    );
}


export default CrouselPortfolio;