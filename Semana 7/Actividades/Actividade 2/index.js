import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import Home from "./pages/Home"; 
import Blogs from "./pages/Blogs"; 
import NoPage from "./pages/NoPage"; 
import { Pets } from "./pages/Pets"; 
import { Petsdetails } from "./pages/PetsDetails"; 
import { Admin } from "./pages/Admin"; 
export default function App() { 

 	return ( 
 	 	<BrowserRouter> 
 	 	 	<Routes> 
 			 	<Route path="/" element={<Layout />}> 
 		<Route index element={<Home />} /> 
  				<Route path="blogs" element={<Blogs />} /> 
 				<Route path="pets" element={<Pets />}> 
 				<Route path=":PetsId" element={<Petsdetails />} /> 
 				<Route path="admin" element={<Admin />} /> 
 			</Route> 
 			<Route path="*" element={<NoPage />} /> 
 	 	 	</Route> 
 			</Routes> 
</BrowserRouter> 
  ); 
} 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 
