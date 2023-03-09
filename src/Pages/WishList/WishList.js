import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishList, setWishList] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setWishList(data))
    // }, [user?.email])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;