import { Link } from "react-router-dom"; 
export const Categories = () => { 
 	return ( 
 		<div> 
 			<h1>Categories</h1> 
 			<ul> 
 		<li><Link to="electronics">Electronics</Link></li> 
   			<li><Link to="clothing">Clothing</Link></li> 
   			<li><Link to="groceries">Groceries</Link></li> 
  			</ul> 
 		</div> 
 	); 
}; 
