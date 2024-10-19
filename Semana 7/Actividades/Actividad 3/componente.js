import React, { useState, createContext, useContext } from "react"; 
import ReactDOM from "react-dom/client"; 

// Creamos el contexto para las películas 
const MovieContext = createContext(); 
function App() { 
 	return ( 
 		<MovieProvider> 
 			<h1>Lista de Películas</h1> 
 			<MovieList /> 
 			<Cart /> 
 		</MovieProvider> 
 	); 
} 

// Proveedor del contexto 

const MovieProvider = ({ children }) => { 
 	const [movies] = useState(["Hombre Araña", "Hulk", "Los Caballeros"]); 
 	const [cart, setCart] = useState([]); 
 	const addToCart = (movie) => setCart((prevCart) => [...prevCart, movie]); 
 	  return ( 
 		  <MovieContext.Provider value={{ movies, cart, addToCart }}> 
 			  {children} 
 		  </MovieContext.Provider> 
    ); 
}; 

// Componente para mostrar la lista de películas 

function MovieList() { 
 	const { movies, addToCart } = useContext(MovieContext); 
 	return ( 
 		<div> 
 	{movies.map((movie) => ( 
 			<div key={movie}> 
 				<span>{movie}</span> 
 				<button onClick={() => addToCart(movie)}>Agregar</button> 
 			</div> 
      ))} 
      </div> 
 	); 
} 

// Componente para mostrar el carrito de películas 

function Cart() { 
 	const { cart } = useContext(MovieContext); 
 	return ( 
 		<div> 
 	<h2>Carrito de Películas</h2> 
 			{cart.length === 0 ? <p>El carrito está vacío.</p> : <ul>{cart.map((movie, index) => 
        <li key={index}>{movie}</li>)}</ul>} 
</div> 
 	); 
} 

// Renderizamos el componente raíz en el DOM 

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />); 
