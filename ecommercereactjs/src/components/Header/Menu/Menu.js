import { cn } from '@bem-react/classname'
import React from 'react';
import './Menu.scss';

function Menu() {

    const menu = cn('menu')
    return (
        <div
            className={menu()}
        >
            <button
                className={menu('menu-btn')}
            >
                Login
        </button>
        </div>
    )
}

export default Menu
