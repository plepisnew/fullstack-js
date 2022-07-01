import '../styles/ItemBoxList.css';
import { useState } from 'react';
import { ItemBox, Props as ItemBoxProps } from './ItemBox';
import getProjects from '../projects.js';

interface Props {
    rows?: number;
    cols?: number;
}

const ItemBoxList: React.FC<Props> = ({
    rows = 5, 
    cols = 5,
}) => {

    const [items, setItems] = useState(getProjects());
    
    const createItemBox = (item: ItemBoxProps, key: number) => {
        return (<ItemBox 
            name={item.name}
            description={item.description}
            img={item.img}
            key={key}
        />)
    }

    const createItemBoxes = (items: ItemBoxProps[]) => {
        return items.map((item, index) => createItemBox(item, index));
    }

    const repeat = (content: string, count: number) => {
        let result = "";
        for(let i = 0; i < count; i++) {
            result += content + " ";
        }
        return result;
    }

	return (
		<div className="item-list" style={{
            gridTemplateColumns: repeat('1fr', cols),
            gridTemplateRows: repeat('1fr', rows)
        }}>
            {createItemBoxes(items)}
        </div>
	);
}

export default ItemBoxList;