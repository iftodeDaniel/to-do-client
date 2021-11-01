import styled, {css} from 'styled-components';


export const StyledContainerList = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vmin);
  width: 90%;
  margin: auto;
  background-color: white;
  border-radius: 10px;

  ${props => props.primary && css`
    background-color: black;
    color: white;`
}
`
export const StyledWrapper = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    max-width: 50rem;
    height: 80%;
    background-color: #f5f7f6;
    color: #acadad;

    p{
        text-align: center;
        font-size: 1.5rem;
        margin-top: 3rem;
    }
    
   ${props => props.primary && css`
    background-color: black;
    color: white;`
}
`

export const StyledList = styled.div`
    border-radius: 15px;
    background-color: white;
    margin: auto;
`

export const StyledButton = styled.button`
    border: none;
    font-size: 1.5rem;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
    color: #acadad;
    ${props => props.primary && css`
    background-color: black;
    color: white;`
}
`

export const StyledItemWrapper = styled.div` 
    color: black;
    width: 100%;
`
export const StyledButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  
`


export const StyledFilterButtons = styled.div`
    background-color: red;
`


export const StyledForm = styled.form`
margin-bottom: 2rem;
width: 100%;
   
  input {
    font-size: 1.5rem;
    box-sizing: border-box;
    width: 100%; 
  }
    
`

export const StyledListItem = styled.div`
    display: flex;
  align-items: center;
  border: solid 2px #d0d0d0;
  border-radius: .2em;
  padding: .5em .8em .5em .5em;
  background-color: white;
`

export const Checkmark = styled.span`
   
  &:after{
    left: 9px;
    top: 5px;
    width: 15px;
    height: 30px;
    
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
`
export const DarkTheme = styled.button`
    width: 6rem;
    padding: 20px;
	background-color:black;
	border-radius:28px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:1.5rem;
	text-decoration:none;
	text-shadow:0px 1px 0px #121412;
`