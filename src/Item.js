import React, {useState, useEffect} from 'react';
import { StyledListItem, Checkmark } from './Style';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import ReactTooltip from 'react-tooltip';


const Item = ({name, ceva, active, comepleted, done, stil, index, id}) => {
    
    const [check, setCheck] = useState(false)
    const [finish, setFinish] = useState(false)
    
    const line = {textDecoration: 'line-through'}
  
    useEffect(()=>{
        ReactTooltip.rebuild();
    })

    return(
     
        <StyledListItem>
            
            <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (<div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}><div    className='container'  style={done ? line: null} onClick={comepleted}>
                <input  style={{height: '20px', width: '20px'}} type="checkbox" onClick={ceva}  onChange={() => setCheck(active)} checked={active} />
                <label data-tip data-for={id}> {name}
                <Checkmark />
                </label>
            </div></div>)}
            
            </Draggable>
        </StyledListItem>
        
    )
}

export default Item;