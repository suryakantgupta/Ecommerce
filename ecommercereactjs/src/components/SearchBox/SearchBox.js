import React from 'react';
import { cn } from '@bem-react/classname';
import { IoSearchCircleSharp } from 'react-icons/io5'
import './SearchBox.scss';

function SearchBox() {

    const searchbox = cn('searchbox')
    return (
        <div
            className={searchbox()}
        >
            <span
                className={searchbox('search-container')}
            >
                <input
                    className={searchbox('search-size')}
                />
                <IoSearchCircleSharp
                    className={searchbox('search-icon')}
                />

            </span>
        </div>
    )
}

export default SearchBox
