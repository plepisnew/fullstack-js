import '../styles/ProjectBox.css';

export interface Props {
    name: string,
    description: string,
    img: any,
}

export const ProjectBox: React.FC<Props> = ({ name, description, img }) => {
    return (
        <div className="project-box">
            <img className="project-img" src={require(`../${img}`)} alt="Rubiks icon"></img>
            <div className="project-text-container">
                <p className="project-name">{name}</p>
                <p className="project-description">{description} </p>
            </div>
        </div>
    );
}