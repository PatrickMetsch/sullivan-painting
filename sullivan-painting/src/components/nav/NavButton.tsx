import * as React from 'react';

export const navButtonStyle = {
    "textDecoration": "none",
    "display": "inline",
    "padding": "10px"
}

export const navLinkStyle = {
    "textDecoration": "none",
}

type HasButtonText = {buttonText:string};
type NavButtonProps = HasButtonText;
export const NavButton = (props:NavButtonProps) => {
    const { buttonText } = props;
    return <li style={navButtonStyle}>
        <a style={navLinkStyle} href="#"><strong>{buttonText}</strong></a>
    </li>
}