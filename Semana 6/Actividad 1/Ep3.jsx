
const Header = () => {
    return (
        <header>
            <h1>Alien Covenant</h1>
        </header>
    );
};


const MainContent = () => {
    return (
        <main>
            <p>Durante un viaje interplanetario, la tripulación de la nave Covenant descubre un mundo nuevo y piensan que se trata de un lugar paradisíaco. Cuando llegan, se dan cuenta de que es un territorio aterrador, repleto de criaturas brutales. Mientras lo exploran se percatan de que no son los primeros en aterrizar en ese planeta.</p>
        </main>
    );
};


const Footer = () => {
    return (
        <footer>
            <p>&copy; Todos los derechos reservados</p>
        </footer>
    );
};


const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
