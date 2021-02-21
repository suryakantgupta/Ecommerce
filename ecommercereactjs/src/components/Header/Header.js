import React from 'react'
import {cn} from '@bem-react/classname'
import './Header.scss'
import SearchBox from '../SearchBox/SearchBox';
import Menu from './Menu/Menu';

function Header() {

    const header = cn('header');

    return (
            <header
            className={header()}
            >
                <span
                    className={header('logo')}
                >
                    SuryaStore
                </span>
                <span>
                    <nav>
                        <ul
                            className={header('navigation')}
                        >
                            <li
                            className={header('navLinks')}
                            >
Home
                            </li>

                            <li
                            className={header('navLinks')}
                            >
Products
                            </li>

                            <li
                            className={header('navLinks')}
                            >
Orders
                            </li>
                        </ul>
                    </nav>
                </span>

                <span
                    className={header('searchbox')}
                >
                    <div>
                    <SearchBox />
                    </div>

                    <div>
                        <Menu />
                    </div>
                </span>
            </header>
    )
}

export default Header
