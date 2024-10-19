import { useParams } from "react-router-dom"; 
export const Petsdetails = () => { 
 	const { PetsId } = useParams(); 
 	return ( 
 		<div> 
 			<h1>Details of user {PetsId}</h1> 
 		</div> 
 	); 
} 
