import React, { useState } from 'react';

const CartRow = ({ cart, handleDelete }) => {
    const { _id, productName, picture, location, sellerName, phone, price, email } = cart;
    



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline text-xl">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{productName}</div>
                        <div className=" opacity-100">Price: ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <h1 className='text-xl'>{sellerName}</h1>
                <br />
                <span className="badge badge-ghost p-5">{location}</span>
            </td>

            <td>
                <h1 className='text-xl'>{phone}</h1>
                <br />
                <span className="badge badge-ghost  p-5">{email}</span>
            </td>

            <th>
                <button className="btn btn-outline btn-primary btn-sm">Pay</button>
            </th>
        </tr>
    );
};

export default CartRow;