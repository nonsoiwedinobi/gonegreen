import React from "react";

import Image from 'next/image';
import '../layout.css'

const Gallery = () => {
    const images = [
        'image.jpg',
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
    ]


// return the images array
const renderImages = () => {
    return images.map((imageSrc:string, index:number) => (
        <div key={index} className='image-item-container'>
            <Image
                alt={`Image ${index + 1}`}
                key={index}
                src={`/assets/${imageSrc}`}
                width={200}
                height={200}
                layout="responsive"
                objectFit="cover"
                className='image-item-img'
            />
        </div>
    ));
};

return (
    <div className='gallery-page'>
        <h1>Gallery</h1>
        <div className='image-gallery'>
            {renderImages()}
        </div>
    </div>
);
}

export default Gallery;

