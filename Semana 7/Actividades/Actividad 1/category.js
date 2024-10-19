import { Link, Outlet, useParams } from "react-router-dom"; 

const products = { 
electronics: ["Phone", "Laptop", "Tablet"], 
clothing: ["Shirt", "Jeans", "Jacket"], 
groceries: ["Apple", "Milk", "Bread"] 
}; 
export const Category = () => { 
const { categoryName } = useParams(); 
const categoryProducts = products[categoryName] || []; 
return ( 
 	<div> 
 				<h2>Products in {categoryName}</h2> 
 	 	<ul> 
 	 		{categoryProducts.map((product, index) => ( 
 						<li key={index}> 
 							<Link to={`${product}`}>{product}</Link> 
  						</li> 
 			))} 
 				</ul> 
 				<Outlet /> 
 			</div> 
 		); 
};
