import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './BookingModal.css';

const BookingModal = ({ modalData }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    console.log(user?.email);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;

        const addCart = {
            productId: modalData._id,
            productName: modalData.name,
            price: modalData.price,
            picture:modalData.picture,
            location:modalData.location,
            usedTime:modalData.usedTime,
            sellerName:modalData.sellerName,
            email,
            phone
        }
        fetch('http://localhost:5000/AddCart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your Car Added to Cart Successfully')
                    form.reset();
                   
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-sky-200 w-11/12 max-w-5xl">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <div className="card card-side ">
                            <figure><img src={modalData?.picture} alt="Movie" className='modal-img' /></figure>
                            <div className="card-body w-72">
                                <h2 className="card-title">{modalData?.name}</h2>
                                <p>Price {modalData?.price}</p>
                                <input name='email' type="text" placeholder="User Email" required defaultValue={user?.email} className="input input-bordered input-primary w-full max-w-xs" />
                                <input name='phone' type="text" placeholder="Phone Number" required className="input input-bordered input-primary w-full max-w-xs" />
                                <div className="card-actions justify-end ">
                                    {/* <button className="btn btn-primary btn-sm mt-10">Confirm</button> */}
                                    <input type="submit" name="" className="btn btn-primary btn-sm mt-10" htmlFor="booking-modal" value="Confirm" />
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;