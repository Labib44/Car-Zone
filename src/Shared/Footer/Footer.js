import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import logo from '../../Assets/img/logo1.png'

const Footer = () => {
    return (
        <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
            <div className="items-center grid-flow-col">
                <img className='w-20 h-20' src={logo} alt=""/>
                
                <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
            </div>
            <div className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                    <a rel="noreferrer" target={'_blank'} href='https://www.facebook.com/md.labib.9/'><FaFacebookF className='text-4xl'></FaFacebookF></a>
                    <a rel="noreferrer" target={'_blank'} href='https://www.linkedin.com/in/labibur-rahman/'><FaLinkedinIn className='text-4xl'></FaLinkedinIn></a>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;