import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Header() {
  return <h1>Bienvenido a mi Aplicación</h1>;
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://youtu.be/D715zYn7TzM?list=LL" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BcW1PNqfe_YtGcljTLy0NvVj8gjEsrLTwDLZNLwZlYBYbOGgg219RSMWbbA73MN5dQQ&usqp=CAU" className="logo" alt="Vite logo" />
        </a>
        <a href="https://youtu.be/UEmLdKiERrc?list=LL" target="_blank">
          <img src="https://i.ytimg.com/vi/QgGuFZjFD6Y/maxresdefault.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PROBANDO USO DE REACT </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
