import '../styles/ProjectBoxList.css';
import { useState } from 'react';
import { ProjectBox, Props as ProjectBoxProps } from './ProjectBox';
import getProjects from '../projects.js';

interface Props {
    rows?: number;
    cols?: number;
}

export const ProjectBoxList: React.FC<Props> = ({
    rows = 5, 
    cols = 5,
}) => {

    const [projects, setProjects] = useState(getProjects());
    
    const createProjectBox = (project: ProjectBoxProps, key: number) => {
        return (<ProjectBox 
            name={project.name}
            description={project.description}
            img={project.img}
            key={key}
        />)
    }

    const createProjectBoxes = (projects: ProjectBoxProps[]) => {
        return projects.map((project, index) => createProjectBox(project, index));
    }

    const repeat = (content: string, count: number) => {
        console.log(count);
        let result = "";
        for(let i = 0; i < count; i++) {
            result += content + " ";
        }
        console.log(result);
        return result;
    }

	return (
		<div className="project-list" style={{
            gridTemplateColumns: repeat('1fr', cols),
            gridTemplateRows: repeat('1fr', rows)
        }}>
            {createProjectBoxes(projects)}
        </div>
	);
}