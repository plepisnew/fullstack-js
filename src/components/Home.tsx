
import '../styles/Home.css';
import ItemBoxList from './ItemBoxList';

const Home: React.FC = () => {
    return (
        <div className="content-container container">
            <ItemBoxList />
        </div>
    );
}

export default Home;