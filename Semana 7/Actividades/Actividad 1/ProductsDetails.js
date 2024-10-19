import { useParams } from "react-router-dom"; 
export const ProductDetails = () => { 
const { productName } = useParams(); 
return ( 
 	<div> 
 				<h3>Details of product: {productName}</h3> 
 				<p>This is a great {productName}!</p> 
 			</div> 
 		); 
}; 
