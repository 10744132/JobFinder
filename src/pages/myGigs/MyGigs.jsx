import React from 'react';
import { Link } from 'react-router-dom';
import "./MyGigs.scss"
const MyGigs = () => {
    return (
        <div className='myGigs'>    
            <div className="container">
                <div className="title">
                    <h1>Gig</h1>
                    <Link to="/add">
                        <button>
                            Add New Gig
                        </button>
                    </Link>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Orders</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>
                        <img
                            className="image"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                        <img className="delete" src="/public/imgs/delete.png" alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img
                            className="image"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                        <img className="delete" src="/public/imgs/delete.png" alt="" />
                        </td>
                    </tr><tr>
                        <td>
                        <img
                            className="image"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                        <img className="delete" src="/public/imgs/delete.png" alt="" />
                        </td>
                    </tr><tr>
                        <td>
                        <img
                            className="image"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                        <img className="delete" src="/public/imgs/delete.png" alt="" />
                        </td>
                    </tr><tr>
                        <td>
                        <img
                            className="image"
                            src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        </td>
                        <td>Stunning concept art</td>
                        <td>59.<sup>99</sup></td>
                        <td>13</td>
                        <td>
                        <img className="delete" src="/public/imgs/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>            
        </div>
    );
}

export default MyGigs;
