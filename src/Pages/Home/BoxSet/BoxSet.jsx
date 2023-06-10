import Aos from 'aos';
import React from 'react';

Aos.init()

const BoxSet = () => {
    return (

        <div data-aos='zoom-in' data-aos-delay='800'  className='my-5 px-5 flex flex-col justify-center'>
            <p className='font-bold text-3xl text-center my-5'>SPECIAL BOX-SET Section</p>
            <p className='font-semibold text-center mb-16'>Grab Our Custom Made SPECIAL BOX SETS in Cheapest Price and Most Premium Quality </p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <div className="card glass shadow-3xl">
                    <figure><img className='w-full h-96' src="https://i.ibb.co/TMZyv1K/box-1.jpg" alt="BoxSet-1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Special Box Set: 1</h2>
                        <p className='font-semibold'>Price:$399 </p>
                        <p className='font-semibold  '>Box Description with Offers: <span className='font-normal'>Top Quality,  6 Action Figure, Customization Ability, Awesome Colours, 20% Discount</span> </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now!!!</button>
                        </div>
                    </div>
                </div>
                <div className="card glass shadow-3xl">
                    <figure><img className='w-full h-96' src="https://i.ibb.co/MPs5Q7S/box-2.jpg" alt="BoxSet-2" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Special Box Set: 2</h2>
                        <p className='font-semibold'>Price:$499 </p>
                        <p className='font-semibold '>Box Description with Offers: <span>Super Premium Quality, 6 Action Figures, Customization Ability, 3 Different Sets of Colours Available, 24% Discount, Super Fast Delivery </span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now!!!</button>
                        </div>
                    </div>
                </div>
                <div className="card glass shadow-3xl">
                    <figure><img className='w-full h-96' src="https://i.ibb.co/V2VnMFV/box-3.jpg" alt="BoxSet-3" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Special Box Set: 3</h2>
                        <p className='font-semibold'>Price:$699 </p>
                        <p className='font-semibold  '>Box Description with Offers: <span> Super Premium Quality, 12 Action Figure, Customization Ability, 5 Different Sets of Colours Available, 28% Discount, Super Fast Delivery with Free Shipping </span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now!!!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default BoxSet;



