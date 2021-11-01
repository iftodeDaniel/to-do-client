import React, {useState, useEffect} from 'react';
import List from './List';
import { StyledList, StyledWrapper,StyledInput, DarkTheme } from './Style';
import InputData from './InputData';
import Item from './Item';
import axios from 'axios';
import {Droppable, DragDropContext} from 'react-beautiful-dnd';



const App = () => {

    
    const [darkTheme, setDarkTheme] = useState(false)
    
    return(
    
        <StyledWrapper primary={darkTheme}>
        <DarkTheme onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme ? 'white' : 'dark'}</DarkTheme>
        <h1>To-Do</h1>
    
        <List dark={darkTheme}/>
        
       
        <p>Drag and drop to reorder list</p>
        </StyledWrapper>
        


    
    )
}

export default App;