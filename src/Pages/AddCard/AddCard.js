import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CartRow from './CartRow';

const AddCard = () => {
    const { user } = useContext(AuthContext);
    const [deleteCarts, setDeleteCarts] = useState([]);

    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/AddCart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [user?.email])

    // Delete section
    const handleDelete=id=>{
        const precced=window.confirm('Are you sure, you want to cancle thid order');
        if(precced){
            fetch(`http://localhost:5000/AddCart/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);

                if(data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining= deleteCarts.filter(dcart=>dcart._id !==id);
                    setDeleteCarts(remaining);
                }
            })
        }

    }
    return (
       <div className='bg-gradient-to-r from-gray-900 via-sky-300 to-gray-900 p-10'>
         <div className=' max-w-6xl mx-auto '>
            <h1 className='text-4xl text-gray-600 text-center pb-5'>My Cart:({carts.length})</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th className='text-xl'>Products</th>
                            <th className='text-xl'>Seller</th>
                            <th className='text-xl'>Phone</th>
                            <th className='text-xl'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(cart => <CartRow
                                key={cart._id}
                                cart={cart}
                                handleDelete={handleDelete}
                            ></CartRow>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot >
                        <tr >
                            <th></th>
                            <th className='text-xl'>Products</th>
                            <th className='text-xl'>Seller</th>
                            <th className='text-xl'>Phone</th>
                            <th className='text-xl'>Payment</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
       </div>


    );
};

export default AddCard;