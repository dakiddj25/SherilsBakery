import React from 'react';
import '../css/page.css';
import { useHistory } from 'react-router-dom';
import { Button } from './Button';
import Footer from './Footer'

const Services =() =>{
    const history = useHistory();
return(
<>

{/* <img className='imgBorder' src='/images/cakeslogo.png' /> */}

<div className='pageOne'>
    <div className='welcomeBox2'>
        <div className='Box3' data-aos='fade-right'>
            <p>One evening, two families were out having dinner and a conversation about both their love of dessert had begun. Later, over a fantastic baklava, they lamented about how hard it was to find exceptional classic desserts anymore. Not extravagant over-the-top creations, but the traditions perfected.
            </p>
        </div>

        <div data-aos='fade-left' className='Pic3'>
            <img  src='/images/cake3.png'  ></img>
        </div>

        <div className='Pic4' data-aos='fade-right'>
            <img src='/images/cake4.png' width="300" height="400"></img>
        </div>

        <div className='Box4' data-aos='fade-left'>
            <p>Catering services available for special events:
Birthdays, Graduations, Weddings, Anniversaries , Corporate Events, etc.
Contact us for more information. </p>
        </div>
    </div>

    <div className='welcomeBox2'>
        <div className='Box3' data-aos='fade-right'>
            <h1>Shop with us</h1>
            <p> 
            Treat yourself to my delisous cakes. Visit our contact me page and place your order for pickup today!
            </p>
            <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/ContactUs")}
            >
            Order Cakes</Button>
        
        </div>

        <div data-aos='fade-left' className='Pic3'>
            <img  src='/images/IMG_0244.JPG' ></img>
        </div>

        <div className='Pic4' data-aos='fade-right'>
            <img src='/images/IMG_0255.JPG' width="300" height="400"></img>
        </div>

        <div className='Box4' data-aos='fade-left'>
        <h1>Check out our Gallery</h1>
            <p>Check out our gallery and look at all the delisous cakes that were made for other customers! </p>
            <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push("/Gallery")}>
            Gallery</Button>   
        </div>
    </div>
    </div>
    
</>
) 

}

export default Services