import '../styles/Home.css';
import ItemBoxList from './ItemBoxList';
import Bubbles from './Bubbles';

const Home: React.FC = () => {
    return (
        <div className="content-container container">
            <Bubbles />
            <ItemBoxList />
        </div>
    );
}

export default Home;