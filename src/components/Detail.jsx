// import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from './NavBar';


// function Detail (props) {

//       useEffect (()=> {
//         props.handleFetch()
//       }, [])
//     return ( 
//         <>
//         <NavBar/>
//         <div className='info-card'>
//             <img src={props.img} alt="drinks photo" />
//             <div className='detail-info'>
//                 <ul>
//                     <li>
//                         <h3>Name:</h3>
//                         <p>{props.name}</p>
//                     </li>
//                     <li>
//                         <h3>Glass:</h3>
//                         <p>{props.glass}</p>
//                     </li>
//                     <li>
//                         <h3>Instructions:</h3>
//                         <p>{props.inst}</p>
//                     </li>
//                     <li>
//                         <h3>Ingredients:</h3>
//                         <p> Amaretto Baileys Irish Cream Cognac</p>
//                     </li>
//                 </ul>
//                <Link to="/"> <button className='back-btn'> Go Back </button></Link>
//             </div>
//         </div>
//         </>
//      );
// }

// export default Detail ;