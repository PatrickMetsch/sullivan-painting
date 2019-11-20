import * as React from 'react';
import { NavButton } from './NavButton';


export const style:React.CSSProperties = {
    "backgroundColor": "#7a879a",
    "width": "100%",
}

export const navStyle:React.CSSProperties = {
    "textAlign": "center"
}

export const MainNav = () => {
    return <div style={style}>
        <nav style={navStyle}>
            <ul>
                <NavButton buttonText="Home" />
                <NavButton buttonText="Painting" />
                <NavButton buttonText="Decks & Fencing" />
                <NavButton buttonText="Pressure Washing" />
                <NavButton buttonText="Remodeling" />
                <NavButton buttonText="Our Promise" />
                <NavButton buttonText="Photos" />
                <NavButton buttonText="Contact" />
            </ul>
        </nav>
    </div>
}