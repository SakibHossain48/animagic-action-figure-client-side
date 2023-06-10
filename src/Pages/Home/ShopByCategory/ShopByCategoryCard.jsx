import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const ShopByCategoryCard = ({data}) => {
    const {_id, toy_name, price, picture, ratings} = data;
    const {user} = useContext(AuthContext)

    const handleToast = () =>{
        if(!user){
            toast('Without login you can not visit this page. Please Login')
        }
    }

    return (
        <div className="card md:w-96 glass">
            <figure><img className="w-full h-60" src={picture} alt="41h-Ksm2-SJ0-L" border="0" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>Price: {price} $</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <Link to={`/categoryToyDetails/${_id}`}><button onClick={handleToast} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategoryCard;