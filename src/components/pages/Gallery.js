import React from 'react'
import GalleryCard from './GalleryCard'
import Footer from '../Footer';
import '../css/Gallery.css';


const gallery = [
    {
        img:'/images/cake1.JPG',
        alt:'cake image'
    },
    {
        img:'/images/cake2.JPG',
        alt:'cake image'
    },
    {
        img:'/images/cake3.png',
        alt:'cake image'
    },
    {
        img:'/images/cake4.png',
        alt:'cake image'
    },
    {
        img:'/images/cake5.png',
        alt:'cake image'
    },
    {
        img:'/images/cake6.jpg',
        alt:'cake image'
    },
    {
        img:'/images/cake7.png',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0213.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0214.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0215.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0218.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0219.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0220.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0221.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0222.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0223.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0234.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0225.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0226.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0227.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0228.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0229.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0230.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0231.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0232.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0233.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0234.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0235.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0236.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0237.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0238.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0239.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0240.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0241.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0242.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0243.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0244.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0245.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0246.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0247.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0248.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0249.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0250.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0251.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0252.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0253.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0254.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0255.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0256.JPG',
        alt:'cake image'
    },  
    {
        img:'/images/IMG_0257.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0258.JPG',
        alt:'cake image'
    },
    {
        img:'/images/IMG_0259.JPG',
        alt:'cake image'
    },

]

const Gallery= () => {
    return(
        <div className="gallery">
           <h1 className='SkillsHero'>Wonderfull Cakes</h1>

            <div className='container'>
            {gallery.map(photo => <GalleryCard photo={photo} /> )}
            </div>

            <Footer/>
        </div>
    )
}

export default Gallery;