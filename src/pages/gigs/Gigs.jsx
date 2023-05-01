import React from 'react';
import "./Gigs.scss"
import { useState } from 'react';
import {gigs} from "../../card"
import GigCard from '../../components/gigCard/GigCard';
const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");

    const reSort=(type)=>{
        setSort(type)
        setOpen(false)
    }
    return (
        <div className='gigs'>
            <div className="container">
                <div className="path">JobFinder Home > Cat&DeSign</div>
                <h2>AI Artists</h2>
                <span>Explore the boundaries of art and technology with Jobfinder's AI arties</span>
                <div className="menu">
                    <div className="left">
                    <h3>Budged</h3>
                    <input type="text" className='min' placeholder='min' />
                    <input type="text" className='max' placeholder='max' />
                    <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className='sortBy'> SortBy</span>
                        <span className='sortType'>{sort==="sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./imgs/down.png" onClick={()=>setOpen(!open)} alt="" />
                        {open && 
                        <div className="rightmenu">
                          {sort ==="sales" 
                        ? ( <span onClick={()=>setSort("createdAt")}>Newest</span>)
                        : (   <span onClick={()=>setSort("sales")}> Best Selling</span>)
                          }  
                        </div>
                        }
                    </div>
                </div>
                <div className="cards">
                    {gigs.map(gig=>(
                        <GigCard  item={gig} key={gig.id}/>
                         )
                    )}
                </div>


            </div>
        </div>
    );
}

export default Gigs;

