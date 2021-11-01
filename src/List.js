import React, {useState, useEffect} from 'react';
import Item from './Item';
import { StyledItem, StyledButton, StyledForm, StyledList, StyledContainerList, StyledItemWrapper, StyledButtonsWrapper, StyledFilterButtons  } from './Style';
import axios from 'axios';
import {Droppable, DragDropContext, Draggable} from 'react-beautiful-dnd'
import Button from './Button';
import ReactTooltip from 'react-tooltip';

const List = ({dark}) => {

    const [data, setData] = useState({});
    const [items, setItems] = useState([]);
    const [finish, setFinish] = useState(false)
    const [onlyActive, setOnlyActive] = useState([])
    const [onlyCompleted, setOnlyCompleted] = useState([])
    const [finishDragposition, setFinishDragPosition] = useState(items)

    useEffect(() => {
        getItems()
        ReactTooltip.rebuild();
    }, [setItems, finish, setFinishDragPosition, data])

    const test = (e) => {
        
        setData({
            name: e.target.value,
            active: false,
            completed: false
        })
        
       
    }

    const test2 = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api', {data}).then(res => console.log(res))
        getItems()
        
    }

    const testNou = (e, numar, maybe) => {
        axios.post('http://localhost:3000/api/updateActive', {id:numar, active: !maybe})
        .then(res => {
            console.log(res.data )
            getItems()
         })
    }

    const renderItems = () => {
        if(items.length !== 0){
            const listaIteme = finishDragposition.map((i,index )=> {
                return (
                        <>
                        <Item  id={i._id} index={index} key={i._id} comepleted={(e) =>handleCompleted(e, i._id, i.active)} stil={finish} done={i.completed} ceva={(e) => testNou(e, i._id, i.active)}  active={i.active} name={i.name} />
                        <ReactTooltip id={i._id}><span>{true && `active ${i.active} si completed ${i.completed}`}</span></ReactTooltip>
                        </>
                )
                 
            })
            return ( <DragDropContext onDragEnd={handleOnDragEnd}><Droppable droppableId='itemLista'>
                {(provided) =>(<StyledItemWrapper  {...provided.droppableProps}  ref={provided.innerRef}>
                {listaIteme}
                
                {provided.placeholder}
                
                </StyledItemWrapper >)}
                </Droppable></DragDropContext>)
        }
        else{
            return <h1>Adauga ceva in lista</h1>
        }
    }

    const handleCompleted = (e, numar, maybe) => {
        console.log(numar, maybe)
        if(maybe){
             axios.post('http://localhost:3000/api/updateCompleted', {id: numar, completed: true}).then(res => {
            console.log(res.data)
            setFinish(!finish)
            
        })
        }
       
    }

    const displayOnlyActive = () => {
        axios.get(`http://localhost:3000/api/onlyActive/${true}`)
        .then(res=> {
            setOnlyActive([res.data])
            setFinishDragPosition(res.data)
        })  
    }

    const displayOnlyCompleted = () => {
        axios.get(`http://localhost:3000/api/onlyCompleted/${true}`).
        then(res => {
            setOnlyCompleted([res.data])
            setFinishDragPosition(res.data)
        })
    }

    const deleteCompleted = () => {
        axios.post('http://localhost:3000/api/deleteCompleted', {completed: true}).then(res=> console.log(res.data))
        return getItems()

    }
    
    const getItems = () => {
        axios.get('http://localhost:3000/api/getData')
        .then(res =>  {
            setItems(res.data)
            setFinishDragPosition(res.data)
        })
        console.log('get all items')
        
    }

    const handleOnDragEnd = (res) => {
        console.log(res)
        const listItems = Array.from(finishDragposition);
        const [reorderedListItem] = listItems.splice(res.source.index, 1);
        listItems.splice(res.destination.index, 0, reorderedListItem)

        setFinishDragPosition(listItems)    
    }
    console.log(items)

    return(
        // <StyledList>
            <StyledContainerList primary={dark}>
                <h1>asta e lista</h1>
                <StyledForm onSubmit={test2}>
                <input type='text' onChange={(e) =>test(e)} />
                </StyledForm>
               
                    {renderItems(testNou)}
                <StyledButtonsWrapper >  
                <StyledButton primary={dark}>{finishDragposition.length } items left</StyledButton>
                <StyledFilterButtons>
                <StyledButton primary={dark} onClick={getItems}>All</StyledButton>
                <StyledButton primary={dark} onClick={displayOnlyActive}>Active</StyledButton>
                <StyledButton primary={dark} onClick={displayOnlyCompleted}>Completed</StyledButton>
                </StyledFilterButtons>
                <StyledButton primary={dark} onClick={deleteCompleted}>Clear completed</StyledButton>
                </StyledButtonsWrapper>
            </StyledContainerList>
        // </StyledList>
    )
}

export default List;