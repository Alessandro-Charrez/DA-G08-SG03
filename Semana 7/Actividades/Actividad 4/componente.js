import React, { createContext, useContext, useState } from 'react'; 
import ReactDOM from 'react-dom/client'; // Asegúrate de importar ReactDOM 

// Crear el contexto 

const UserContext = createContext(); 
const App = () => { 
 	const [user, setUser] = useState({ name: 'Alice', age: 25 }); 
 	return ( 
 		<UserContext.Provider value={{ user, setUser }}> 
 			<UserProfile /> 
</UserContext.Provider> 
 	); 
}; 
const UserProfile = () => { 
 	const { user, setUser } = useContext(UserContext); 
 	const incrementAge = () => { 
 		setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 })); 
 	}; 
 	return ( 

<div> 
 			<h1>Nombre: {user.name}</h1> 
 			<p>Edad: {user.age}</p> 
 			<button onClick={incrementAge}>Incrementar Edad</button> 
 		</div> 
 	); 
}; 

// Renderizar el componente raíz en el DOM 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 
