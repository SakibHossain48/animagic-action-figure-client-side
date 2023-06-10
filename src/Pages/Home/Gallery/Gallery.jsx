import Aos from 'aos';
import React from 'react';

Aos.init()

const Gallery = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='500' className='my-12 px-10'>
            <p className='font-bold text-3xl text-center my-8'>Toy Gallery</p>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 '>
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/1z8D0sC/patryk-norman-BBQOQFk-OICg-unsplash.jpg" alt="patryk-norman-BBQOQFk-OICg-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/mtwHpQm/marcos-ferreira-QYBVbw-JYx-NA-unsplash.jpg" alt="marcos-ferreira-QYBVbw-JYx-NA-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/L5dWMGR/patryk-norman-ZR-AL5r0-KZA-unsplash.jpg" alt="patryk-norman-ZR-AL5r0-KZA-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/SchNg7x/aaron-cass-GJuh-DRb-Mj7g-unsplash.jpg" alt="aaron-cass-GJuh-DRb-Mj7g-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/Gf6TF6w/maha-khairy-3uu-LWb6a-QXc-unsplash.jpg" alt="maha-khairy-3uu-LWb6a-QXc-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/FqsMPb8/tengyart-RZfb8-FFd2g-unsplash.jpg" alt="tengyart-RZfb8-FFd2g-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}} src="https://i.ibb.co/Ssmh1K7/branden-skeli-x-KTp-Y-Ny-Ss-unsplash.jpg" alt="branden-skeli-x-KTp-Y-Ny-Ss-unsplash" border="0" />
                <img className='rounded-lg' style={{width:'305px', height:'203px'}}  src="https://i.ibb.co/3kqfj6L/valentino-montironi-av-Il29-hxao-unsplash.jpg"  alt="valentino-montironi-av-Il29-hxao-unsplash" border="0" />
            </div>
        </div>
    );
};

export default Gallery;