import React from 'react';
import "./Home.scss";
import Feature from '../../components/feature/Feature';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import { cards, projects } from '../../card';
import ProductCard from '../../components/productCard/ProductCard';
const Home = () => {
    return (
        <div className="home">
        <Feature/>      
        <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
        <div className="features">
            <div className="container">
                <div className="left">
                    <h2>JobFinder business</h2>
                    <h1>A business solution  designed for teams</h1>
                    <p>upgarde  to a curated experience packed with tools and benefits, dedicated to businesses</p>
                    
                        <div className="item">
                            <img src="../../imgs/check.png" alt="" />
                            <span>Connect to freelancers with proven busness experience </span>
                        </div>
                        <div className="item">
                            <img src="../../imgs/check.png" alt="" />
                            <span>Get matched with the perfect talent by a customer success manager</span>
                        </div>
                        <div className="item">
                            <img src="../../imgs/check.png" alt="" />
                            <span>Manage teamwork and boost productivity with one powerful workspace</span>
                        </div>
                    <button>Explore Business</button>
                </div>
                <div className="right">

                <img src="../../imgs/team.png"></img>
                </div>

            </div>
        </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </Slide>
        </div>
    );
}

export default Home;
