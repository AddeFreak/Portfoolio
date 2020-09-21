import styled from 'styled-components'

const Content = styled.div`
display: flex;

justify-content: center;
flex-direction: column;
line-height: normal; 
margin: 50px auto ; 
border: 2px solid black;
padding: 0 30px 0 30px;
height: 100vh;
width: 80%;
box-sizing: border-box;
list-style-type: none;
text-align: center;

li {
    list-style-type: none;
}

@media screen and (max-width: 425px){
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: center;
box-sizing: border-box;
width: 100%;
height: 100vh;
list-style: none;
border: none;
overflow: scroll;
margin-bottom: 0;
}
`
export { Content }
