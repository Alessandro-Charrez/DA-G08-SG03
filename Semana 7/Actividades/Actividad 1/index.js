import React from "react"; 
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import { Categories } from "./pages/Categories"; 
import { Category } from "./pages/Category"; 
import { ProductDetails } from "./pages/ProductDetails"; 
import NoPage from "./pages/NoPage"; 

export default function MiApp() { 
return ( 
<BrowserRouter> 
<Routes> 
<Route path="/" element={<Layout />}> 
<Route index element={<Categories />} /> 
<Route path=":categoryName" element={<Category />}> 
<Route path=":productName" element={<ProductDetails />} /> 
</Route> 
                      	<Route path="*" element={<NoPage />} /> 
 				</Route> 
 			</Routes> 
 		</BrowserRouter> 
 	); 
} 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
<React.StrictMode> 
 			<MiApp /> 
 		</React.StrictMode> 
); 
