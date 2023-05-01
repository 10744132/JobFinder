import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.scss"
import { motion } from "framer-motion";


const ProductCard = ({card }) => {
    return (

        <Link  className='link' to="/gigs?cat=design">
        <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
            </Link>

    );
}

export default ProductCard;
