import React from 'react'
import styled from 'styled-components'


const Footerstyle = styled.footer`
  flex-shrink: 0;
  display: flex;
    text-align: center;
    background-color: #031345;
    color: white;
    justify-content: center;


@media screen and (max-width: 425px){
    bottom: 0px;
    
}
`


const Footer = () => (
    <Footerstyle >
        <p>Andreas Frick Toresand</p>
    </Footerstyle>
);

export default Footer