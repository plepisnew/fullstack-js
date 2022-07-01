import '../styles/ItemBox.css';

export interface Props {
    name: string,
    description: string,
    img: any,
}

export const ItemBox: React.FC<Props> = ({ name, description, img }) => {
    return (
        <div className="item-box">
            <img className="item-img" src={require(`../${img}`)} alt="Rubiks icon"></img>
            <div className="item-text-container">
                <p className="item-name">{name}</p>
                <p className="item-description">{description} </p>
            </div>
        </div>
    );
}