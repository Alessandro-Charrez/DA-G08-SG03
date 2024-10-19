import { Outlet, Link } from "react-router-dom"; 

const Layout = () => { 
return ( 
 			<> 
 				<nav> 
 					<ul> 
 						<li><Link to="/">Categories</Link></li> 
 					</ul> 
 		</nav> 
 				<Outlet /> 
 			</> 
 		); 
}; 
export default layout; 
