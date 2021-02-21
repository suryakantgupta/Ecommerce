import React from 'react';
import {cn} from '@bem-react/classname';
import './SearchBox.scss';

function SearchBox() {

    const searchbox = cn('searchbox')
    return (
        <div
            className={searchbox()}
        >
            <input />
        </div>
    )
}

export default SearchBox
