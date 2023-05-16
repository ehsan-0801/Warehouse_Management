import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Watch.css'
const Watch = ({ watch }) => {
    const { _id, name, img, description, price, quantity, SoldAmount, SupplierName } = watch;
    const navigate = useNavigate();

    const navigateWatchDetails = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className='watch'>
            <img className='w-100' src={ img } alt="" />
            <h2>{ name }</h2>
            <p>Price: { price }</p>
            <p>Stock: { quantity }</p>
            <p>Sold: { SoldAmount }</p>
            <p>Supplier: { SupplierName }</p>
            <p><small>{ description }</small></p>
            <button onClick={ () => navigateWatchDetails(_id) } className='btnUpdate'>Update</button>
        </div>
    );
};

export default Watch;