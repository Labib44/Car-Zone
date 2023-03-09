import React from 'react';
import labib from '../../../../Assets/img/labib0.jpg'
import elon from '../../../../Assets/img/elon-musk.jpg'
import justin from '../../../../Assets/img/justin-trudeau.jpg'
import putin from '../../../../Assets/img/putin.jpg'
import mark from '../../../../Assets/img/mark.jpg'
import kim from '../../../../Assets/img/Kim.png'
import Hillary from '../../../../Assets/img/Hillary_Clinton.jpg'
import imran from '../../../../Assets/img/Imran_.jpg'
import TeamCard from './TeamCard';

const Team = () => {
    const teamData = [
        {
            id: 1,
            name: 'Labibur Rahman',
            designation: '“ CEO & FOUNDER”',
            img: labib,
        },
        {
            id: 2,
            name: 'Elon Musk',
            designation: '“ CO-FOUNDER”',
            img: elon,
        },
        {
            id: 3,
            name: 'Mark Zuckerberg',
            designation: '“ CTO ”',
            img: mark,
        },
        {
            id: 4,
            name: 'Imran Khan',
            designation: '“ Manager ”',
            img: imran,
        },
        {
            id: 5,
            name: 'Vladimir Putin',
            designation: '“ SENIOR HR ”',
            img: putin,
        },
        {
            id: 6,
            name: 'Kim Jong-Un',
            designation: '“  JUNIOR ASSISTANT HR ”',
            img: kim,
        },
        {
            id: 7,
            name: 'Justin Trudeau',
            designation: '“ EXECUTIVE OFFICER ”',
            img: justin,
        },
        {
            id: 8,
            name: 'Hilari Klinton',
            designation: '“ PRODUCT DESIGNER ”',
            img: Hillary,
        },
        
        
    ]
    return (
        <section className="py-6 bg-gray-900 text-white">
            <div className="container p-4 mx-auto space-y-16 sm:p-10 bg-gray-700">
                <div className="space-y-4 text-center">
                    <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our team</h3>
                    
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        teamData.map(Tdata=><TeamCard
                        key={Tdata.id}
                        Tdata={Tdata}
                        ></TeamCard>)
                    } 
                </div>
            </div>
        </section>
    );
};

export default Team;