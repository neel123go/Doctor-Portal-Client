import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ routeName }) => {
    return (
        <button className="btn text-white border-0 bg-gradient-to-r from-teal-400 to-cyan-500 hover:bg-gradient-to-l"><Link to={`${routeName}`}>Get Started</Link></button>
    );
};

export default Button;