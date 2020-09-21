import React from 'react';
import styled from 'styled-components'
//import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'


const MyDesktopNavbar = styled.nav`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: center;

background: #031345;
color: white;
height: 8vh;

.nav-links {
    display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
width: 50vw;
font-size: 2vh;
list-style: none;

}

.nav-links :hover,
.nav-links :active{
    color: pink;
}
.link {
    text-decoration: none;
    color: whitesmoke;
}
.logo {
    font-size: 3vh;
}

@media (max-width: 768px){
   


.nav-links {
    display: none;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
width: 35vw;

}
.nav-links :hover,
.nav-links :active{
    color: pink;
}
.logo {
    font-size: 3vh;
}

.link {
    display: flex;
justify-content: space-evenly;
color: red;
font-size: 2.5vh;
text-decoration: none;

}

}
@media (min-width: 769px){
    .nav-toggle {
display: none;
    }
}
`



const DesktopNavbar = props => {
    return (
        <MyDesktopNavbar><div className="logo">Andreas Frick Toresand</div>
            <ul className="nav-links">
                <li>
                    <Link to="/" className="link" >Home</Link>
                </li>
                <li>
                    <Link to="/about" className="link" >About</Link>
                </li>

                <li>
                    <Link to="/contact" className="link" >Contact</Link>
                </li>

            </ul>



            <div className="nav-toggle">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </MyDesktopNavbar>

    );
};

export default DesktopNavbar;
