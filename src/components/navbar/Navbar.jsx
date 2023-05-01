import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState,useEffect} from 'react';
import "./Navbar.scss"
const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const { pathname} =useLocation()

    const isActive=()=>{
        window.scrollY>0 ?setActive(true) :setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll",isActive)
        return () => {
            window.removeEventListener("scroll",isActive)
        };
    }, []);

    const currentUser={
        id:1,
        username:"Bruce Hsu",
        isSeller:true
    }
    return (
            <div className={active || pathname!=='/'?  "navbar active" : "navbar"}>
            <div className="container">
                <Link to="/" className='link'>
                        <div className="logo">
                            <p>JobFinder</p>
                            <span>.U</span>
                        </div>
                </Link>
                    <div className="link">
                        <div className="item">Find Job</div>
                        <div className="item">Contact Us</div>
                        <div className="item">English</div>
                        {!currentUser?.isSeller && <div className="item">Become a Seller</div>}
                        <div className="item">Sign in</div>
                        {!currentUser && <button>Join</button>}
                        {
                            currentUser && 
                           <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://images.pexels.com/photos/6333665/pexels-photo-6333665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <span>{currentUser?.username}</span>
                                {open && <div className="option">
                                    {currentUser?.isSeller&& 
                                    <>
                                        <Link  className='link' to="/mygigs">Gigs</Link>
                                        <Link  className='link' to="/add">Add new Gig</Link>
                                    </>
                                    }
                                    <Link  className='link' to="/order">Orders</Link>
                                    <Link  className='link'  to="/messages">Messages</Link>
                                    <Link  className='link' to="/">Logout</Link>
                                </div>}
                            </div>
                        }
                    </div>     
               </div>
               <hr/>      
                   { active || pathname!=='/' &&
                    (<>
                     <div className="menu">
                    <Link className="link menuLink" to="/">
                    Graphics & Design
                    </Link>
                    <Link className="link menuLink" to="/">
                    Video & Animation
                    </Link>
                    <Link className="link menuLink" to="/">
                    Writing & Translation
                    </Link>
                    <Link className="link menuLink" to="/">
                    AI Services
                    </Link>
                    <Link className="link menuLink" to="/">
                    Digital Marketing
                    </Link>
                    <Link className="link menuLink" to="/">
                    Music & Audio
                    </Link>
                    <Link className="link menuLink" to="/">
                    Programming & Tech
                    </Link>
                    <Link className="link menuLink" to="/">
                    Business
                    </Link>
                    <Link className="link menuLink" to="/">
                    Lifestyle
                    </Link>
                </div>  
               <hr/>      

                   </>)
                   }
                  
        </div>

    );
}

export default Navbar;
