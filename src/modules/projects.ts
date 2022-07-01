
interface Project {
    name: string,
    description: string,
    img: string,
}

const getProjects = (): Project[] => {
    return [
        {
            name: 'Rubiks Cube Solver',
            description: 'Rubiks Cube simulator and solver',
            img: 'assets/faces/rubiks.png'
        },
        {
            name: 'Collision Simulator',
            description: 'Customizable collision simulator between 2D balls',
            img: 'assets/faces/collision.png'
        }
    ]
}

export default getProjects;