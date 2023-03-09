import React from 'react';

const CareCard = ({careData}) => {
    const { taitle, comment, icon } = careData;
    return (
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="card w-96 shadow-xl bg-gradient-to-tr from-green-200 to-blue-200 ">
            <figure className="">
                <img src={icon} alt="Shoes" className=" w-24 h-24 p-3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{taitle}</h2>
                <p>{comment}</p>
                
            </div>
        </div>
    );
};

export default CareCard;