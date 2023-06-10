import Aos from 'aos';
import React from 'react';

Aos.init()

const Banner = () => {
    return (
        <div data-aos='zoom-in' data-aos-delay='700' className='w-full relative my-5'>
        <img
        style={{height : '85vh'}}
          className='w-full brightness-60'
          src="https://www.wallpaperflare.com/static/550/72/960/princess-guardian-boy-and-girl-anime-wallpaper-preview.jpg"
          alt=""
        />
        <div className='absolute inset-0 w-2/3 left-20'>
            <div className=' text-white space-y-8 translate-y-1/2'>
        <p className='text-3xl md:text-5xl font-bold'>BRAND NEW <br /> ANIME ACTION FIGURE <br /> FOR YOUR KIDS</p>
          <p className='hidden md:block'>We makes spacial and collectables, age appropriate action figures <br /> and deliver straight to your door.</p>   
            <button className='btn w-5/6 md:w-1/4 rounded-3xl'>Get your action figure</button>
            </div>
        </div>
      </div>
    );
};

export default Banner;
