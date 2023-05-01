import React from 'react';
import { delay, motion } from "framer-motion"
import "./Feature.scss"
const Feature = () => {
    return (
            <div className="feature">
                <div className="container">
                    <div className="left">
                        <motion.img initial={{ x:-200  }} transition={{ duration: 1 }}  animate={{ x:0 }} src="../../../public/imgs/people.png" className='man' alt="" />
                    </div>
                    <div className="right">
                        <h1>Find the perfect Freelance services for your business</h1>
                        <div  className='search'>
                            <div className="searchInput">
                                <img src="../../../public/imgs/search.png" alt="" className="icon" />
                                <input type="text" />
                            </div>
                            <button >Search</button>                
                        </div>
                        <div className="popular">
                            <span>popular :</span>
                            <button>Web</button>
                            <button>Ui</button>
                            <button>SQL</button>
                            <button>Node</button>
                            <button>Server</button>
                        </div>    
                    </div>
                </div>
            </div>
        
    );
}

export default Feature;
