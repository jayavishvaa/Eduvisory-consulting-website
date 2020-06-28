import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../components/home.css';
import Image1 from '../components/newimage1.jpg';
import Image2 from '../components/newimage2.png';
import Image3 from '../components/newimage3.jpg';
import Image4 from '../image4.jpg';

console.log(Image1);
console.log(Image2);
console.log(Image3);
console.log(Image4);

export default class Home extends Component {
    render() {
        return (
            <div>
            <Carousel autoplay style={{}}>
             <div style={{}}>
              <img src={Image1} alt="Image1" className="image1"/>
             </div>
             <div>
             <img src={Image2} alt="Image2"/>
             </div>
             <div>
             <img src={Image3} alt="Image3"/>
             </div>
             <div>
             <img src={Image4} alt="Image4"/>
             </div>
            </Carousel>
            <div>
               
            </div>
            </div>
            
        )
    }
}
