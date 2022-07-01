import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <div className="container">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;